import Reply from './svgs/Reply';
import Retweet from './svgs/Retweet';
import Like from './svgs/Like';
import Share from './svgs/Share';
import Verified from './svgs/Verified';
import IconButton from './IconButton';
import { getTimeSpan } from '../utils/TimeFormatter';

export default function Tweet({ tweet }) {
    const RETWEET_BEGGINING_STRING = 'RT ';
    const REPLY_BEGGINING_STRING = '@';

    const getTaggedUserFromBeggining = (text) => {
        if (text.startsWith(REPLY_BEGGINING_STRING)) {
            return text.split(" ")[0].substr(1).replace(":", "");
        }

        return undefined;
    }

    const getTweetStructure = () => {
        let sanitizedTweet = tweet.text;
        let retweetingUser = undefined;
        let replyingToUsers = [];

        if (sanitizedTweet.startsWith(RETWEET_BEGGINING_STRING)) {
            retweetingUser = getTaggedUserFromBeggining(sanitizedTweet.substr(RETWEET_BEGGINING_STRING.length));
            if (retweetingUser) {
                sanitizedTweet = sanitizedTweet.substr(RETWEET_BEGGINING_STRING.length + REPLY_BEGGINING_STRING.length + retweetingUser.length + 2); //RT , @, dos puntos y espacio
            }
        }

        while (sanitizedTweet.startsWith(REPLY_BEGGINING_STRING)) {
            let user = getTaggedUserFromBeggining(sanitizedTweet)
            replyingToUsers.push(user);
            sanitizedTweet = sanitizedTweet.substr(REPLY_BEGGINING_STRING.length + user.length + 1); //@ y espacio
        }
        

        return {
            text: sanitizedTweet,
            replyingToUsers: replyingToUsers,
            retweetingUser: retweetingUser
        }
    }

    const tweetStructure = getTweetStructure(tweet.text);

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
                            {tweet.user.verified &&
                                <span className="Tweet-user-verified">
                                    <Verified />
                                </span>
                            }
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

                    {tweetStructure.replyingToUsers.length > 0 &&
                        <div className="Row Tweet-replyingusers-container">
                            <span className="Tweet-replying-to">Replying to</span>
                            {tweetStructure.replyingToUsers.map(u => <a href={`https://twitter.com/${u}`} target="_blank" className="Tweet-replyinguser">@{u}</a>)}
                        </div>
                    }
                    <div className="Row Tweet-message">
                        {tweetStructure.text}
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