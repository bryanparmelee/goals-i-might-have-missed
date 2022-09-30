import Match from '../match/match.component';

import './match-list.styles.css';

const MatchList = ({ matches }) => {
        const matchesWithIsOpen = matches.map(match => ({
        ...match,
        isOpen: false,
    }))

    const matchList = matchesWithIsOpen.map(matchItem => {
        const id = matchItem.videos[0].id;
        return <Match 
                key={id}
                matchInfo={matchItem} 
                // selectHandler={selectHandler}
        />  
    })

    // const selectHandler = (id) => {    
    //     matchList.map(match => {
    //         if(id === match.id) {
    //         console.log(id);
    //         }
        
    //     })
    // }
    return (
        <div className="match-list">
           {matchList}
        </div>
    )
}

export default MatchList;