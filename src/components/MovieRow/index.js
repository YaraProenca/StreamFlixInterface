import React from "react";
import './MovieRow.css';

export default ({ title, item }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow_listArea">
        <div className="movieRow_list">
          {item.results.length > 0 && item.results.map((item, key) => (
            <div  key={key}  className="movieRow_item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}