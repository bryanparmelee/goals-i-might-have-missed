import Match from '../match/match.component';
import Video from '../video/video.component';

import { embedRegex } from '../../utils/leagueRegex';

import './match-list.styles.css';

const MatchList = ({ matches, clickHandler, closeModal }) => {
       
    
    
    const matchList = matches.map(matchItem => {
        const {id, embed } = matchItem.videos[0];
        console.log(embed);
        const embedCode = embed.match(embedRegex);
        console.log(embedCode[0]);
        return matchItem.isOpen ?   
            <Video 
                key={id}
                embed={embedCode[0]}
                closeModal={closeModal}
            /> :
            <Match 
                key={id}
                id={id}
                matchInfo={matchItem}
                clickHandler={clickHandler}                
        />  
    })


    return (
        <div className="match-list">
           {matchList}         
        </div>
    )
}

export default MatchList;