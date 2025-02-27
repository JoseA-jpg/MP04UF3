//import './PlayerName.css';

function PlayerName(props) {
	let [player_name, setPlayerName] =useState("");

	return (
		<form>
			<p><input type="text" name="player_name" placeholder="Nombre del jugador/a" /><button onClick="">Guardar</button></p>
		</form>
	);
}

export default PlayerName;
