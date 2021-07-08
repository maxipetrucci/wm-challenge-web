import { useEffect, useState, useRef } from 'react';
import './App.css';
import Tweet from './components/Tweet';
import { getLatestTweets } from './network/NetworkAPI';

function App() {
  const [tweets, setTweets] = useState([]);
  const tweetsRef = useRef(tweets);

  useEffect(() => {
    const getOldestTweetId = () => {
      if (tweetsRef.current.length === 0) {
        return undefined;
      }
  
      return tweetsRef.current[tweetsRef.current.length - 1].id;
    }

    getLatestTweets({ fromid: getOldestTweetId()})
    .then(response => setTweets(response))
    .catch(e => console.log(e));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {tweets.map(t => <Tweet key={t.id} tweet={t} />)}
      </header>
    </div>
  );
}

export default App;
