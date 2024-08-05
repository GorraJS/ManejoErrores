import { useState } from "react";
import "./App.css";

function App() {
  const [pais, setPais] = useState("");
  const [country, setCountry] = useState("");

  const getWeb = () => {
    let URL = `https://restcountries.com/v3.1/name/${pais}`;
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error(`HTML error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        setCountry(data[0]);
      });
  };

  const selectCountry = (e) => {
    setPais(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    getWeb();
  };

  return (
    <>
      <form>
        <h1>Ingrese pais</h1>
        <input type="text" value={pais} onChange={selectCountry}></input>
        <button type="submit" onClick={Submit}>
          Submit
        </button>
        <h4>Falg: {country.flag}</h4>
        <h4>Capital: {country.capital}</h4>
        <h4>Fifa: {country.fifa}</h4>
        <h4>Poblacion: {country.population}</h4>
        <h4>Area: {country.area}</h4>
        <h4>Region: {country.region}</h4>
      </form>
    </>
  );
}

export default App;
