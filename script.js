function Cell() {
    //This will represent each individual element within the 3x3 tic tac toe space
    let value=0;

    const addMarker = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {addMarker, getValue};
}

function Gameboard() {

    //Create the Board
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++){
        board[i]=[]; //set each row up with an empty array
        for (let j=0; j < columns; j++) {
            board[i].push(Cell()); //fill each row with columns
        }
    }

    const placeMarker = (row, column, player) => {
        //Check for any open spots

    }

}