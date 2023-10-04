javascript
  const numRows = 10; // Number of rows in the grid
  const numCols = 10; // Number of columns in the grid
  const numMines = 20; // Number of mines
  
  let board = [];
  
  function initializeBoard() {
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        row.push({ isMine: false, isRevealed: false });
      }
      board.push(row);
    }
  
    // Randomly place mines
    let minesPlaced = 0;
    while (minesPlaced < numMines) {
      const row = Math.floor(Math.random() * numRows);
      const col = Math.floor(Math.random() * numCols);
      if (!board[row][col].isMine) {
        board[row][col].isMine = true;
        minesPlaced++;
      }
    }
  }
  
  function revealCell(row, col) {
    const cell = board[row][col];
    if (cell.isRevealed) return;
    cell.isRevealed = true;
    
    const cellElement = document.getElementById(`cell-${row}-${col}`);
    cellElement.classList.add('revealed');
  
    if (cell.isMine) {
      cellElement.classList.add('mine');
      cellElement.innerText = '💣';
    } else {
      // Display number of adjacent mines (implement this logic)
      // For simplicity, let's just display an 'X' for now
      cellElement.innerText = 'X';
    }
  }
  
  function handleCellClick(row, col) {
    revealCell(row, col);
    // Implement logic to handle revealing adjacent cells and game over conditions
  }
  
  function createBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.id = `cell-${i}-${j}`;
        cellElement.addEventListener('click', () => handleCellClick(i, j));
        boardElement.appendChild(cellElement);
      }
    }
  }
  
  initializeBoard();
  createBoard();
  