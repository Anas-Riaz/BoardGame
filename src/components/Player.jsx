import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [IsEditing, setIsEditing] = useState(false);
    const [PlayerName, setPlayerName] = useState(initialName)


    function handleClick(){
        setIsEditing((editing)=>!editing);
        if(IsEditing){
            onChangeName(symbol, PlayerName);
        }
    }

    function changeName(event){
        setPlayerName(event.target.value);
    }
    return(           
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {!IsEditing ? (
                <span className="player-name">{PlayerName}</span>) : 
                <input type="text" required value={PlayerName} onChange={changeName}/>
            }
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{!IsEditing ? 'Edit' : 'Save'}</button>
        </li>
    );
}