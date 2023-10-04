let h, w, bomb;
let data = [];
 
// 爆弾を設置
function putBomb() {
  for (let i = 0; i < bomb; i++) {
    while (true) {
      const y = Math.floor(Math.random() * h);
      const x = Math.floor(Math.random() * w);
      if (data[y][x] === 0) {
        data[y][x] = 1;
        break;
      }
    }
  }
}

function open(y, x) {
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (i >= 0 && i < h && j >= 0 && j < w) {
        let bombs = countBomb(i, j);
        if (
          board.rows[i].cells[j].className === "open" ||
          board.rows[i].cells[j].className === "flag"
        ) {
          continue;
        }
        if (bombs === 0) {
          board.rows[i].cells[j].classList.add("open");
          open(i, j);
        } else {
          board.rows[i].cells[j].textContent = bombs;
          board.rows[i].cells[j].classList.add("open");
        }
      }
    }
  }
}
