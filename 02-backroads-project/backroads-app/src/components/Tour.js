import React from "react";

const Tour = ({ image, date, title, text, country, duration, price }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {country}
          </p>
          <p>
            {duration} {duration === 1 ? "day" : "days"}
          </p>
          <p>from ${price.toLocaleString()}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
