import React from 'react';

const CountryCard = ({ country }) => (
    <div className="w-1/6 shadow m-5 bg-white">
        <img className="w-full h-48 object-cover" src={country.flag} alt={country.name} />
        <div className="p-4">
            <h3 className="text-xl font-bold">{country.name}</h3>
            <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
            <p><strong>Capital: </strong>{country.capital}</p>
            <p><strong>Region: </strong>{country.region}</p>
        </div>
    </div>
);

export default CountryCard;