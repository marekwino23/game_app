import React,{useEffect, useState} from 'react';

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
    const [player, setPlayer] = useState('O'); 

    const onClick = (index) => {
        if(board[index]) return;
        let nextMove;

        if(player === 'X') {
            nextMove = 'O';
        }
        else {
            console.log(nextMove)
            nextMove = 'X';
        }
        console.log(board)
        setPlayer(nextMove);
        board[index] = nextMove;
        setBoard([...board]);

    }

    useEffect(() => {
        const isEndOfGame = endOfGame(board, player);
        if(isEndOfGame) {
            alert("player" + player  + "-" + "win this game")
            setBoard(['','','','','','','','',''])
        }
    }, [board, player]);


    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {board.map((el, index) => (
              <div key={index} style={{ backgroundColor: 'white', flexBasis: '25%', height: '30px', border: '1px solid black', color: 'black' }} onClick={() => onClick(index)}>{el}</div>  
            ))}
        </div>
    )
}

export default Game;