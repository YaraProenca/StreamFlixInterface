// Request API

const apiKey = '439b8131851afa9346227806fe7610cb';
const apiBase = 'https://api.themoviedb.org/3';

const fetchRequest = async(endpoint)=>{
  const request = await fetch(`${apiBase}${endpoint}`);
  const json = await request.json();
  return json;
};

export default{
  getHomeList: async()=>{
    return[
      {
        slug:'originals',
        title:'Stream originals',
        items:await fetchRequest(`/discover/tv?with_network=213&api_key=${apiKey}`)
      },

      {
        slug:'trending',
        title: 'Recommended for you',
        items: await fetchRequest(`/trending/all/week?api_key=${apiKey}`)
      },

      {
        slug:'toprated',
        title: 'Top on Stream',
        items: await fetchRequest(`/movie/top_rated?api_key=${apiKey}`)
      },

      {
        slug:'action',
        title: 'Action',
        items: await fetchRequest(`/discover/movie?with_genres=28&api_key=${apiKey}`)
      },

      {
        slug:'comedy',
        title: 'Comedy',
        items: await fetchRequest(`/discover/movie?with_genres=35&api_key=${apiKey}`)
      },

      {
        slug:'horror',
        title: 'Horror',
        items: await fetchRequest(`/discover/movie?with_genres=27&api_key=${apiKey}`)
      },

      {
        slug:'romance',
        title: 'Romance',
        items: await fetchRequest(`/discover/movie?with_genres=10749&api_key=${apiKey}`)
      },

      {
        slug:'documentary',
        title: 'Documentary',
        items: await fetchRequest(`/discover/movie?with_genres=99&api_key=${apiKey}`)
      }
    ];
  },

  getMovieInfo: async (movieId, type) =>{
    let info = {};

    if (movieId) {
      switch(type){
        case 'movie':
        info = await fetchRequest(`/movie/${movieId}?api_key=${apiKey}`)
        break;

        case 'tv':
          info = await fetchRequest(`/tv/${movieId}?api_key=${apiKey}`)
        break;
      }
    }
    return info
  }
}