import React, { useState } from "react";
import './MovieRow.css';

export default ({ title, item }) => {

  const [scrollX, setScrollX] = useState(-1000);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = item.results.length *150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) -60;
    }
    setScrollX(x);
  }


  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow_icon_left" onClick={handleLeftArrow}>

        <img src="https://cdn.discordapp.com/attachments/929862302537232484/946193072595796008/baseline_keyboard_double_arrow_left_black_24dp.png" style={{ width: 50 }} />
      </div>

      <div className="movieRow_icon_right" onClick={handleRightArrow}>
        <img src="https://cdn.discordapp.com/attachments/929862302537232484/946193072876822538/baseline_keyboard_double_arrow_right_black_24dp.png" style={{ width: 50 }} />
      </div>

      <div className="movieRow_listArea">
        <div className="movieRow_list" style={{
          marginLeft: scrollX,
          width: item.results.length * 150
        }}>
          {item.results.length > 0 && item.results.map((item, key) => (
            <div key={key} className="movieRow_item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}