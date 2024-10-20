import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }    
    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'lightsalmon' : 'black'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h5>Area: {area}</h5>
            <p>Code: {cca3}</p>
            <button onClick={() =>    handleVisitedCountry(country)}>Marked Visited</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
            {/* {visited && 'Already Visited This Country.'} */}
        </div>
    );
};
export default Country;