let board = "";
for(let row=0;row<8;row++){
    board += row%2==0 ? " " : "";
    for(let col=0;col<8;col++){
        board += "# ";
    }
    board += "\n";
}
console.log(board);