export function Person({ name, nickName, images }) {
  return (
    <div>
      {name && <h3>{name}</h3>}
      {nickName && <p>{nickName}</p>}
      {images?.length > 0 && (
        <img src={images[0].small.url} alt={name} />
      )}
    </div>
  );
}
