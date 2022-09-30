import { useEffect, useState } from "react";

import { initialLeagueRegex } from "./utils/leagueRegex";

const App = () => { 
  const [matches, setMatches] = useState([]);

  const token = process.env.REACT_APP_SCOREBAT_TOKEN;
  const api = `https://www.scorebat.com/video-api/v3/feed/?token=${token}`;

    fetch(api)
      .then(res => res.json())
      .then(data => {
        const sortedLeagues = data.response.filter((val) => val.competition.match(initialLeagueRegex));
        console.log(sortedLeagues);
      })
      .catch(error => console.log(error))
 



  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
