import './App.css';
import Dice from '.Dice.js';
import Title from './Title.js';
import RollButton from './RollButton.js';
import PlayerName from './PlayerName.js';

import { useState } from 'react';

function App() {

	let [roll, setRoll] = useState(false);

	function roll_dice()
	{
		setRoll(true(;
	}

  return (
    <div className="App">
			<Title title_text="Rollmania" subtitle_text="Prueba de subtitulo"/>
			<PlayerName />
			<main className="App">
				<Dice cantidad="5" roll={roll} />
			</main>
    </div>
  );
}

export default App;
