import { useState } from "react";
import Game from "./Game";

function App() {

  const [newName, setNewName] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [library, setLibrary] = useState([
    {
      id: 1,
      name: "Minecraft",
      genre: "Sandbox",
      isCompleted: true
    },
    {
      id: 2,
      name: "Amnesia: The Dark Descent",
      genre: "Horror",
      isCompleted: false
    },
    {
      id: 3,
      name: "Pseudoregalia",
      genre: "3D Platformer",
      isCompleted: false

    }
  ]);

  function addToLibrary(event){
    event.preventDefault();
    if (newName.trim() === "" || newGenre.trim() === ""){
      return;
    }
    const entry = {
      id: Date.now(),
      name: newName,
      genre: newGenre,
      isCompleted: false
    };
    const newLibrary = [
      ...library,
      entry
    ];
    setLibrary(newLibrary);
    setNewName("");
    setNewGenre("");
  }

  function removeEntry(id){
    const filteredList = library.filter(function(game){
      return game.id !== id;
    });
    setLibrary(filteredList);
  }

  function toggleStatus(id){
    const modifiedList = library.map(function(game){
      if (game.id === id){
        return {
          ...game,
          isCompleted: !game.isCompleted
        }
      }
      return game;
    });
    setLibrary(modifiedList);
  }

  return (
    <div>
      <h1>Pelikirjasto</h1>
      <div>
        {library.map(function (game) {
          return (
            <Game
              key={game.id}
              name={game.name}
              genre={game.genre}
              isCompleted={game.isCompleted}
              onToggle={function(){
                toggleStatus(game.id);
              }}
              onDelete={function(){
                removeEntry(game.id);
              }}
            />
          );
        })}
      </div>
      <br />
      <form onSubmit={addToLibrary}>
        <p>Pelin nimi</p>
        <input 
        type="text" 
        value={newName}
        onChange={function(event){
          setNewName(event.target.value);
        }}
        />
        <br />
        <p>Genre</p>
        <input 
        type="text" 
        value={newGenre}
        onChange={function(event){
          setNewGenre(event.target.value);
        }}
        />
        <br />
        <br />
        <button type="submit">Lisää</button>
      </form>
    </div>
  );
}

export default App;