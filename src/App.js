import { useEffect, useState } from "react";

import Header from "./components/header/header.component";
import MatchList from "./components/match-list/match-list.component";

import { initialLeagueRegex } from "./utils/leagueRegex";

import leagueTypes from "./league.types";
import NoMatch from "./components/match/no-match.component";

import './App.css';

const App = () => { 
  const [matches, setMatches] = useState([]);
  const [selectValue, setSelectValue] = useState('all');
  const [filteredMatches, setFilteredMatches] = useState(matches)

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

  useEffect(() => {
    const newFilteredMatches = matches.filter(match => 
      match.competition.includes(leagueTypes[selectValue])
    );
    setFilteredMatches(newFilteredMatches); 
  }, [matches, selectValue])
    
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

  const closeModal = () => {
    setMatches(
      matches.map(matchItem => ({...matchItem, isOpen: false}))
    )
  }

  const selectHandler = (event) => {
    setSelectValue(event.target.value);
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  })

  return (
    <div className="app">    
        <Header 
          selected={selectValue}
          selectHandler={selectHandler}
        />
       
          {!filteredMatches.length ? 
          <NoMatch /> :      
          <MatchList        
            matches={filteredMatches}
            clickHandler={handleClick}
            closeModal={closeModal}
          />}
    
    </div>
  );
}

export default App;
