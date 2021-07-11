import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Tweet from './Tweet';
import { getLatestTweets } from '../network/NetworkAPI';

export default function TweetsList ({ fetchSize, loader, endMessage }) {
    const DEFAULT_FETCH_SIZE = 25;
    const finalFetchSize = fetchSize || DEFAULT_FETCH_SIZE;
    const [tweets, setTweets] = useState([]);
    const [fetchMoreTweets, setFetchMoreTweets] = useState(true);
  
    useEffect(() => {
        fetchTweets();
    }, [])
  
    const getOldestTweetId = () => {
        if (tweets.length === 0) {
            return undefined;
        }
  
      return tweets[tweets.length - 1].id;
    }
  
    const fetchTweets = () => {
        const oldestTweetId = getOldestTweetId();
        getLatestTweets({ untilid: oldestTweetId, limit: finalFetchSize })
        .then(response => {
            setTweets(tweets.concat(response));
            if (response.length !== finalFetchSize) {
                setFetchMoreTweets(false);
            }
        })
        .catch(e => console.log(e));
    }
  
    return (
        <InfiniteScroll
            dataLength={tweets.length}
            next={fetchTweets}
            hasMore={fetchMoreTweets}
            loader={loader || <p>Obteniendo tweets..</p>}
            endMessage={endMessage || <p>No hay más tweets</p>}
            pullDownToRefreshThreshold={'15%'}
        >
            {tweets.map(t => <Tweet key={t.id} tweet={t} />)}
        </InfiniteScroll>
    );
}