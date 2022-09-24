let _cols, _rows;
let w = 40;

let grid = [];
let current; // keep track of the current cell

let stack = [];

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
    current.highlight();
    // get random unvisited neighbor
    let next = current.checkNeighbors();
    if (next) {
        next.visited = true;

        stack.push(current);

        removeWalls(current, next);

        current = next;
    } else if (stack.length > 0) { // stuck
        current = stack.pop();
    }
}



setUp();
window.requestAnimationFrame(animate);

let lastRenderTime = 0;
function animate(currentTime) {
    window.requestAnimationFrame(animate);
    const secondsSinceLastRender = (currentTime - lastRenderTime);
    if (secondsSinceLastRender < 50) return;
    lastRenderTime = currentTime;
    draw();
}

function removeWalls(a,b) {
    let x = a.i - b.i; // difference between a and b cell in rows
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}
