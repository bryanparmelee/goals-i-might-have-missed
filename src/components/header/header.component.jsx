const Header = ({ selected, selectHandler }) => {
    
    return (
        <div className="logo">
          <img />
          <form>
            <label>
                LEAGUE: 
                <select
                    id="league-select"
                    value={selected}
                    onChange={selectHandler}
                >
                    <option value="all">All</option>
                    <option value="premier-league">Premier League</option>
                    <option value="la-liga">La Liga</option>
                    <option value="serie-a">Serie A</option>
                    <option value="ligue-1">Ligue 1</option>
                    <option value="bundesliga">Bundesliga</option>
                    <option value="champions-league">Champions League</option>
                    <option value="europa-league">Europa League</option>
                    <option value="international">International</option>
                    <option value="women">Women</option>
                </select>
            </label>
          </form>  
        </div>
    )
}

export default Header;