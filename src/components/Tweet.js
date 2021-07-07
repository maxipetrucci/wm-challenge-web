import Reply from './svgs/Reply';
import Retweet from './svgs/Retweet';
import Like from './svgs/Like';
import Share from './svgs/Share';
import IconButton from './IconButton';

export default function Tweet() {
    return (
        <div className="Tweet">
            <div className="Row">
                <div className="Column Tweet-user-picture-container">
                    <img width={46} height={46} className="Tweet-user-picture" alt="Carlitos" src="https://pbs.twimg.com/profile_images/1400796702974619651/1PMm0ru2_normal.jpg" />
                </div>
                <div className="Column Tweet-container">
                    <div className="Row">
                        <span className="Tweet-user">Muhammad Haseeb</span>
                        <span className="Tweet-username">@MHaseeb1704</span>
                        <span className="Tweet-separator">·</span>
                        <span className="Tweet-timestamp">7s</span>
                    
                    </div>
                    <div className="Row Tweet-message">
                        I knew some basic Python before 2018. Variables, data types… got confused around for loops and functions. Went into JavaScript hard last year, though I dabbled in 2019. Until now, knew even some intermediate JavaScript things (MERN bootcamp grad). I approach in a few ways.
                    </div>
                    <div className="Row Tweet-public-metrics">
                        <IconButton icon={Reply} activeColor='#1da1f2' count={0} />
                        <IconButton icon={Retweet} activeColor='#17bf63' count={25} />
                        <IconButton icon={Like} activeColor='#e0245e' />
                        <IconButton icon={Share} activeColor='#1da1f2' />
                    </div>
                </div>
            </div>
            
        </div>
    )

    /*
        <div className="Tweet-container">
            <span className="Tweet-user">Muhammad Haseeb</span>
            <span className="Tweet-username">@MHaseeb1704</span>
            <span className="Tweet-separator">·</span>
            <span className="Tweet-timestamp">7s</span>
            <div className="Tweet-message">Python and Javascript</div>
            <div className="Tweet-public-metrics">
                <IconButton icon={Reply} activeColor='#1da1f2' />
                <IconButton icon={Retweet} activeColor='#17bf63' />
                <IconButton icon={Like} activeColor='#e0245e' />
                <IconButton icon={Share} activeColor='#1da1f2' />
            </div>
        </div>
    */
}