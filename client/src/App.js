import logo from './logo.svg';
import { accessToken, logout, getCurrentUserProfile } from './spotify'
import './App.css';
import { useState, useEffect } from 'react';
import { catchErrors } from './utils';


function App() {
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
     
        const { data } = await getCurrentUserProfile();
        setProfile(data)
      

    }

    catchErrors(fetchData());

  }, [])




  return (
    <div className="App">
      <header className="App-header">
        {!token ? (

          <a
            className="App-link"
            href="http://localhost:8888/login"
            target="_blank"
          >
            Login to Spotify
          </a>
        ) : (
          <>
            <h1>Logged in!</h1>
            <button onClick={logout}>log out</button>

            {profile && (
            <div>
                <h1>{profile.display_name}</h1>
                <p>{profile.followers.total}</p>
                {profile.images.length && profile.images[0].url && (
                  <img src={profile.images[0].url} alt='avatar' />
                )}
            </div>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
