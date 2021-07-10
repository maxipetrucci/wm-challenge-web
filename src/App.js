import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import Tweet from './components/Tweet';
import { getLatestTweets } from './network/NetworkAPI';

function App() {
  const FETCH_SIZE = 15;
  const [tweets, setTweets] = useState([]);
  const [fetchMoreTweets, setFetchMoreTweets] = useState(true);

  useEffect(() => {
    fetchTweets()
  }, [])

  const getOldestTweetId = () => {
    if (tweets.length === 0) {
      return undefined;
    }

    return tweets[tweets.length - 1].id;
  }

  const fetchTweets = () => {
    const oldestTweetId = getOldestTweetId();
    getLatestTweets({ untilid: oldestTweetId, limit: FETCH_SIZE })
    .then(response => {
      setTweets(tweets.concat(response));
      console.log(response[response.length - 1].id);
      if (response.length !== FETCH_SIZE) {
        setFetchMoreTweets(false);
      }
    })
    .catch(e => console.log(e));
  }

  return (
    <div className="App">
      <header className="App-header">
        <InfiniteScroll
          dataLength={tweets.length}
          next={fetchTweets}
          hasMore={fetchMoreTweets}
          loader={<p>Obteniendo tweets..</p>}
          endMessage={<p>No hay más tweets</p>}
          pullDownToRefreshThreshold={'15%'}
        >
          {tweets.map(t => <Tweet key={t.id} tweet={t} />)}
        </InfiniteScroll>
      </header>
    </div>
  );
}

export default App;
