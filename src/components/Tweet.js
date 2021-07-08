import Reply from './svgs/Reply';
import Retweet from './svgs/Retweet';
import Like from './svgs/Like';
import Share from './svgs/Share';
import IconButton from './IconButton';
import { getTimeSpan } from '../utils/TimeFormatter';

export default function Tweet({ tweet }) {
    return (
        <div className="Tweet">
            <div className="Row">
                <div className="Column Tweet-user-picture-container">
                    <img width={46} height={46} className="Tweet-user-picture" alt={tweet.user.name} src={tweet.user.image_url} />
                </div>
                <div className="Column Tweet-container">
                        <div className="Row Tweet-header">
                            <span className="Tweet-user">
                                <a href={`https://twitter.com/${tweet.user.username}`} className="Tweet-user-link" target="_blank" rel="noreferrer">
                                    {tweet.user.name}
                                </a>
                            </span>
                            <span className="Tweet-username">
                                <a href={`https://twitter.com/${tweet.user.username}`} className="Tweet-username-link" target="_blank" rel="noreferrer">
                                    @{tweet.user.username}
                                </a>
                            </span>
                            <span className="Tweet-separator">·</span>
                            <span className="Tweet-timestamp">
                                <a href={`https://twitter.com/${tweet.user.username}/status/${tweet.id}`} className="Tweet-timestamp-link" target="_blank" rel="noreferrer">{getTimeSpan(tweet.created_at)}</a>
                            </span>
                        </div>
                    
                    <div className="Row Tweet-message">
                        {tweet.text}
                    </div>
                    <div className="Row Tweet-public-metrics">
                        <IconButton icon={Reply} activeColor='#1da1f2' count={tweet.replies_count} />
                        <IconButton icon={Retweet} activeColor='#17bf63' count={tweet.retweets_count} />
                        <IconButton icon={Like} activeColor='#e0245e' count={tweet.likes_count} />
                        <IconButton icon={Share} activeColor='#1da1f2' count={tweet.quotes_count} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}