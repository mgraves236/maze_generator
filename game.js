let _cols, _rows;
let w = 40;

let grid = [];

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

}

function draw() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

setUp();
draw();
