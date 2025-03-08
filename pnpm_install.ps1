# Script to recursively find package.json files and install dependencies using a shared cache
param(
    [Parameter(Mandatory=$true)]
    [string]$RootDirectory,
    
    [Parameter(Mandatory=$false)]
    [string]$CacheDirectory = ".npm-shared-cache"
)

# Verify pnpm is installed, if not - install it
if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
    Write-Host "Installing pnpm globally..." -ForegroundColor Yellow
    npm install -g pnpm
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to install pnpm"
        exit 1
    }
}

# Verify the root directory exists
if (-not (Test-Path -Path $RootDirectory -PathType Container)) {
    Write-Error "Directory '$RootDirectory' does not exist!"
    exit 1
}

# Convert root directory to absolute path
$RootDirectory = Resolve-Path $RootDirectory

# Handle cache directory path
if ([System.IO.Path]::IsPathRooted($CacheDirectory)) {
    # If CacheDirectory is absolute path, use it as is
    $CachePath = $CacheDirectory
} else {
    # If relative path, create it relative to current directory
    $CachePath = Join-Path (Get-Location) $CacheDirectory
}

# Create cache directory if it doesn't exist
if (-not (Test-Path -Path $CachePath -PathType Container)) {
    New-Item -ItemType Directory -Path $CachePath | Out-Null
}

# Configure pnpm to use the cache directory
$env:PNPM_HOME = $CachePath
pnpm config set store-dir "$CachePath/store"
pnpm config set global-dir "$CachePath/global"

Write-Host "Searching for package.json files in: $RootDirectory" -ForegroundColor Cyan

# Find all package.json files
$packageFiles = Get-ChildItem -Path $RootDirectory -Filter "package.json" -Recurse -Exclude "node_modules"

if ($packageFiles.Count -eq 0) {
    Write-Host "No package.json files found!" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($packageFiles.Count) package.json files" -ForegroundColor Green

foreach ($file in $packageFiles) {
    $directory = $file.DirectoryName
    Write-Host "`nProcessing: $directory" -ForegroundColor Cyan
    
    try {
        # Store current location
        Push-Location -Path $directory
        
        # Run pnpm install
        Write-Host "Running pnpm install..." -ForegroundColor Yellow
        pnpm install --shamefully-hoist
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Successfully installed dependencies" -ForegroundColor Green
        } else {
            Write-Host "Failed to install dependencies" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "Error occurred while processing $directory" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
    finally {
        # Return to previous location
        Pop-Location
    }
}

Write-Host "`nCompleted processing all directories" -ForegroundColor Green
Write-Host "Shared cache location: $CachePath" -ForegroundColor Cyan