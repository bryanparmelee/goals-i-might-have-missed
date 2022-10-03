import { useEffect, useState } from "react";

import MatchList from "./components/match-list/match-list.component";

import { initialLeagueRegex } from "./utils/leagueRegex";

const App = () => { 
  const [matches, setMatches] = useState([]);

  const token = process.env.REACT_APP_SCOREBAT_TOKEN;
  const api = `https://www.scorebat.com/video-api/v3/feed/?token=${token}`;

  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(data => {
      const sortedLeagues = data.response.filter((val) => val.competition.match(initialLeagueRegex));
      const sortedLeaguesWithIsOpen = sortedLeagues.map(matchItem => ({
        ...matchItem,
        isOpen: false,
      }))
      setMatches(sortedLeaguesWithIsOpen);
    })
    .catch(error => console.log(error))
  }, [])
    
  const handleClick = (event) => {    
    let clickedId = event.currentTarget.id;
    setMatches(
      matches.map(matchItem => {
        let vidId = matchItem.videos[0].id;
        return clickedId === vidId ?
        {...matchItem, isOpen: true} :
        matchItem          
      })
    )

   
}
const closeModal = (event) => {
  setMatches(
    matches.map(matchItem => ({...matchItem, isOpen: false}))
  )
}

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  })

  return (
    <div className="app">
      <MatchList 
        matches={matches}
        clickHandler={handleClick}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
