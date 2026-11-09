function Game(props) {
    return (
        <li>
            <p>{props.name}</p>
            <p>{props.genre}</p>
            <p>{props.isCompleted ? "Pelattu loppuun" : "Keskeneräinen"}</p>
            <button onClick={props.onToggle}>Muuta tilaa</button>
            <button onClick={props.onDelete}>Poista</button>
            <br />
            <br />
        </li>
    );
}

export default Game;