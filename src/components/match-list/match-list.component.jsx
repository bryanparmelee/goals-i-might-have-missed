import Match from '../match/match.component';

import './match-list.styles.css';

const MatchList = ({ matches }) => {
        const matchesWithIsOpen = matches.map(match => ({
        ...match,
        isOpen: false,
    }))

    const handleClick = (event) => {
        console.log(event.currentTarget);
    }
    
    const matchList = matchesWithIsOpen.map(matchItem => {
        const id = matchItem.videos[0].id;
        return <Match 
                key={id}
                id={id}
                matchInfo={matchItem}
                clickHandler={handleClick}                
        />  
    })


    return (
        <div className="match-list">
           {matchList}
        </div>
    )
}

export default MatchList;