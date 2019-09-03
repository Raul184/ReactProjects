import React , {useState} from 'react';
import './App.css';

function App() {
//hooks
  const [artist , setArtist] = useState('');
  const [tracks , setTracks] = useState([]);
  
  //ON SUBMIT
  //1. Search for an Artist
  const searchArtist = async () => {
    try {
      const request = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${artist}`);
      const response = await request.json();
      
      //find artists
      if(response.artists.total > 0){

        // 1 save artist 
        const artistSearch = response.artists.items[0];
        setArtist(artistSearch);
        // 2 get top tracks
        const tracksReq = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${artistSearch.id}/top-tracks`);
        const trackRes = await tracksReq.json();

        setTracks(trackRes.tracks);
      }  
    } 
    catch (error) {
      console.log(error)
    }
  }

  //2. Enter ==> Search an Artist
  const handleKeyPress = async (e) => {
    if(e.key === 'Enter'){
      searchArtist();
    }
  }
  return (
    <div className="App">
      <h2>Music Box</h2>
      <input 
        type='text' 
        name='name'
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        onKeyPress={handleKeyPress} 
        placeholder='Search for your favorite artist'/>
      <button onClick={searchArtist}>Search</button>
    </div>
  );
}

export default App;
