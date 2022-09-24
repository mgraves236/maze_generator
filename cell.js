class Cell {
    constructor(i, j) {
        // row and column numbers
        this.i = i; // column
        this.j = j; // row
        this.walls = [true, true, true, true]; // top, right, bottom, left
        this.visited = false;
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        _ctx.save();
        _ctx.lineWidth = '1';
        _ctx.strokeStyle = 'white';
        // top
        if (this.walls[0]) {
            _ctx.beginPath();
            _ctx.moveTo(x, y);
            _ctx.lineTo(x + w, y);
            _ctx.stroke();
            _ctx.closePath();
        }
        // right
        if (this.walls[1]) {
            _ctx.beginPath();
            _ctx.moveTo(x + w, y);
            _ctx.lineTo(x + w, y + w);
            _ctx.stroke();
            _ctx.closePath();
        }
        // bottom
        if (this.walls[2]) {
            _ctx.beginPath();
            _ctx.moveTo(x + w, y + w);
            _ctx.lineTo(x, y + w);
            _ctx.stroke();
            _ctx.closePath();
        }
        // left
        if (this.walls[3]) {
            _ctx.beginPath();
            _ctx.moveTo(x, y + w);
            _ctx.lineTo(x, y);
            _ctx.stroke();
            _ctx.closePath();
        }
        if (this.visited) {
            _ctx.fillStyle = '#721964';
            _ctx.fillRect(x, y, w, w);
        }
        _ctx.restore();
    }

    index(i, j) {
        return i + j * _cols;

    }

    checkNeighbors() {
        let neighbors = [];
        let top = grid[this.index(this.i, this.j-1)];
    }
}
