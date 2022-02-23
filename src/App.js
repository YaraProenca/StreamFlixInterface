import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/Featured';
import Header from './components/Header';
import Footer from './components/Footer';

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

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className='myPage'>

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='list'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} item={item.items} />
        ))}
      </section>
    </div>
  )
}