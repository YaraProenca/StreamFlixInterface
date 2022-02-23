import React from "react";

import './FeaturedMovie.css';

export default ({ item }) => {
  console.log(item);
  let date = new Date(item.first_air_date);
  let genres =[];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }


  return (
    <section className="featured" style={
      {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }
    }>

      <div className="featured_vertical">
        <div className="featured_horizonl">
          <div className="featured_name">
            {item.original_name}
          </div>

          <div className="featured_info">
            <div className="featured_point">{item.vote_average} points
            </div>

            <div className="featured_year">{date.getFullYear()}</div>

            <div className="featured_seasons">{item.number_of_seasons} Season{item.number_of_seasons !== 1 ? 's' : ''}
            </div>

            <div className="featured_description">
              {item.overview}
            </div>

            <div className="featured_buttuns">
                <a href={`/watch/${item.id}`} className="featured_whiteButton"> ► Watch </a>
                <a href={`/list/add/${item.id}`} className="featured_blackButton"> + My List</a>
            </div>

            <div className="featured_genres">
                <strong> Genre: {genres.join(', ')} </strong>
            </div>

            
          </div>
        </div>


      </div>
    </section>
  )
}