const useGetWinner = (matrix, matSize) => {

    
    const lines = [];

    // Rows
    for (let i = 0; i < size; i++) {
        lines.push(matrix[i]);
    }

    // Columns
    for (let i = 0; i < size; i++) {
        const col = [];
        for (let j = 0; j < size; j++) {
            col.push(matrix[j][i]);
        }
        lines.push(col);
    }

    // Diagonals
    const diag1 = [];
    const diag2 = [];
    for (let i = 0; i < size; i++) {
        diag1.push(matrix[i][i]);
        diag2.push(matrix[i][size - 1 - i]);
    }
    lines.push(diag1);
    lines.push(diag2);

    for (let line of lines) {
        if (line[0] && line.every(cell => cell === line[0])) {
            setWinner(line[0]);
            return;
        }
    }

    if (matrix.flat().every(cell => cell !== null)) {
        setWinner('Draw');
    }
}


export default useGetWinner;

