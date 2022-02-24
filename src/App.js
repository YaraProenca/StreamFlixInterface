import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/Featured';
import Header from './components/Header';

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadingAll = async () => {
      // Here I'll get the total list
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Getting featured
      let originals = list.filter(i => i.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo);
    }

    loadingAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className='myPage'>

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='list'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} item={item.items} />
        ))}
      </section>

      <footer>
        <p>
          Projeto realizado para fins didáticos com React.js
        </p>

        <p>
          Direitos de imagem reservados para os serviços de Stream: Disney, HBO+, NetFlix, Prime, Star+
        </p>
        <p>
          Requisição de API feita pelo site Themoviedb.org
        </p>
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://cdn.discordapp.com/attachments/929862302537232484/946211721264136222/Netflix_LoadTime.gif' alt='Loading' />
        </div>
      }
    </div>
  )
}