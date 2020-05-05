import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';

function App() {

  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sortByPopulation, setSortByPopulation] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);

  const handleOnChangeInput = e => setInputValue(e.target.value);
  const handledOnchangeCheckbox = () => setSortByPopulation(!sortByPopulation);

  const byInputValue = country => country.name.toLowerCase().includes(inputValue.toLowerCase());
  const filteredCountries = countries.filter(byInputValue);

  const filterByPolulation = (a, b) => {
    if (sortByPopulation) {
      return b.population - a.population;
    }

    return 0;
  }

  return (
    <div>
      <h1 className="text-6xl text-center">Countries List</h1>
      <div className="flex items-center justify-center">
        <input
          className="border-2 p-3 w-1/2"
          type="text"
          placeholder="Search for a country"
          value={inputValue}
          onChange={handleOnChangeInput}
        />
        <div>
          <label className="m-2" htmlFor="population">Sort by population</label>
          <input type="checkbox" id="population" checked={sortByPopulation} onChange={handledOnchangeCheckbox}/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {
        filteredCountries.length < 1 ? (
          <p className="text-xl p-3">
            {inputValue === '' ? 'Loading...' : 'No countries found'}
          </p>
        ) :
          filteredCountries.sort(filterByPolulation).map(country => (
            <CountryCard country={country} key={country.alpha3Code}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
