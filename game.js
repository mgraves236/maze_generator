let _cols, _rows;
let w = 40;

let grid = [];
let current; // keep track of the current cell

function setUp() {
    _cols = Math.floor(_canvas.width / w);
    _rows = Math.floor(_canvas.height / w);

    // create cell objects
    for (let j = 0; j < _rows; j++) {
        for (let i = 0; i < _cols; i++) {
            let cell = new Cell(i,j);
            grid.push(cell);
        }
    }
    current = grid[0];
}

function draw() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    current.visited = true;
    current.checkNeighbors();
}



setUp();
window.requestAnimationFrame(animate);

let lastRenderTime = 0;
function animate(currentTime) {
    window.requestAnimationFrame(animate);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / animate) return;
    lastRenderTime = currentTime;
    draw();
}
