import { compRegex } from "../../utils/leagueRegex";

import './match.styles.css';

const Match = ({ match }) => {
    
    const { title, competition, date, thumbnail, videos } = match;
    
    const id = videos[0].id;

    const matchDay = new Date(date).toDateString();

    return (
        <div className="match" id={id}>
            <div className="inner-border">
                <h2>{title.toUpperCase().replace("-", "vs")}</h2>
                <div className="match-info">
                    <h3>{competition.replace(compRegex, "").toUpperCase()}</h3>
                    <h4>{matchDay}</h4>
                </div>
                <div className="thumb-sq">
                    <img 
                        className="thumb"
                        alt={title}
                        src={thumbnail}
                    />
                </div>
            </div>
        </div>
    )
}

export default Match;