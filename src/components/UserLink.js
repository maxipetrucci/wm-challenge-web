import Verified from './svgs/Verified';

export default function UserLink({ label, username, verified, className }) {
    return (
        <>
            <a href={`https://twitter.com/${username}`} target="_blank" rel="noreferrer" className={className}>
                @{label || username}
            </a>
            {verified &&
                <span className="Tweet-user-verified">
                    <Verified />
                </span>
            }
        </>
    )
}