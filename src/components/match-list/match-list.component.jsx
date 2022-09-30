import Match from '../match/match.component';

import './match-list.styles.css';

const MatchList = ({ matches }) => {
    return (
        <div className="match-list">
            {matches.map((match) => {
                return <Match match={match}/>
            })}
        </div>
    )
}

export default MatchList;