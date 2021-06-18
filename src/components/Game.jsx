import React,{useEffect, useState} from 'react';
import cogoToast from 'cogo-toast';

const endOfGame = (board, player) => {
    if(board[0] === player && board[1] === player && board[2] === player){
        return true;
    }
    else if(board[3] === player && board[4] === player && board[5] === player) {
        return true;
    }
    else if(board[6] === player && board[7] === player && board[8] === player) {
        return true;
    }
    else if((board[0] === player && board[3] === player && board[6] === player)){
        return true;
    }
    else if((board[1] === player && board[4] === player && board[7] === player)){
        return true;
    }
    else if((board[2] === player && board[5] === player && board[8] === player)){
        return true;
    }
    else if((board[0] === player && board[4] === player && board[8] === player)){
        return true;
    }
    else if((board[2] === player && board[4] === player && board[6] === player)){
        return true;
    }
    return false;

}

const Game = () => {
    const [board, setBoard] = useState(['','','','','','','','','']);
    const [player, setPlayer] = useState('X'); 

    const onReset = () =>{
        setBoard(['','','','','','','','',''])
    }

    const onClick = (index) => {
        if(board[index]) return;
        let nextMove;

        if(player === 'X') {
            nextMove = 'O';
        }
        else {
            nextMove = 'X';
        }
        setPlayer(nextMove);
        board[index] = nextMove;
        setBoard([...board]);

    }

    useEffect(() => {
        const isEndOfGame = endOfGame(board, player);
        if(isEndOfGame) {
            cogoToast.success("player" + player  +  "-" + "win")
            setBoard(['','','','','','','','',''])
        }
    }, [board, player]);


    return(
        <div data-testid="board" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {board.map((el, index) => (
              <div data-testid="cel" key={index} style={{ backgroundColor: 'white', flexBasis: '25%', height: '30px', border: '2px solid black', color: 'red' }} onClick={() => onClick(index)}>{el}</div>  
            ))}
            <button onClick={onReset}>New game</button> 
            <p style={{marginLeft:"89px", fontWeight:"bold"}}>Next player: {player}</p>
        </div>
    )
}

export default Game;