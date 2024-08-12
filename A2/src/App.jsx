import { useState } from "react";
import "./App.css";

function App() {
  const [user, newUser] = useState("");
  const [userList, setUserList] = useState([]);

  const getWeb = () => {
    let url = "https://randomuser.me/api/";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error(`HTML error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        newUser(data);
        setUserList((prevList) => [...prevList, data.results[0]]);
      });
  };

  const Generate = (e) => {
    e.preventDefault();
    getWeb();
  };

  const listado = () => {
    setUserList(...userList, newUser);
  };

  return (
    <>
      <form>
        <h2>Human Generator</h2>
        <button type="submit" onClick={Generate}>
          generar
        </button>
      </form>
      <h4>
        Name: {user.results[0].name.first} {user.results[0].name.last}
      </h4>
      <h4>Genero: {user.results[0].gender}</h4>
      <h4>Pais: {user.results[0].location.country}</h4>
      <h4>Ciudad: {user.results[0].location.city}</h4>
      <h4>Email: {user.results[0].email}</h4>
      <h4>Numero Telefonico: {user.results[0].cell}</h4>

      <h2>|--------LISTA--------|</h2>

      <ol>
        {userList.map((user, index) => (
          <li key={index}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
