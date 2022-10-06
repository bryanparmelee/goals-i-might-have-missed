import './match.styles.css';

import yellow from '../../assets/yellow-card.png';

const NoMatch = () => {
    return (
        <div className="match no-match">
            <div className='inner-border'>
                <h2>
                No recent matches in this league, please select another.
                </h2>             
                <img 
                    className='yellow-card'
                    src={yellow}                        
                />
            
            </div>
        </div>
    )
}

export default NoMatch;