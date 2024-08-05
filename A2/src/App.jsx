import { useState } from "react";
import "./App.css";

function App() {
  const [user, newUser] = useState('')  

  const getWeb = () => {
    let url = 'https://randomuser.me/api/'
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        newUser(data)
      })
  }

  const Generate = (e) => {
    e.preventDefault()
    getWeb()
  }

  return (
    <>
      <form>
        <h2>Human Generator</h2>
        <button type="submit" onClick={Generate}>generar</button>
      </form>
      <h4>Numero Telefonico: {user.results[0].name.title}</h4>
      <h4>Name: {user.results[0].name.first} {user.results[0].name.last}</h4>
      <h4>Genero: {user.results[0].gender}</h4>
      <h4>Pais: {user.results[0].location.country}</h4>
      <h4>Ciudad: {user.results[0].location.city}</h4>
      <h4>Email: {user.results[0].email}</h4>
      <h4>Numero Telefonico: {user.results[0].cell}</h4>
    </>
  );
}

export default App;
