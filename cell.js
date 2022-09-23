class Cell {
    constructor(i, j) {
        // row and column numbers
        this.i = i; // column
        this.j = j; // row
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        _ctx.save();
        _ctx.strokeStyle = "black";
        _ctx.strokeRect(x,y,w,w);
        _ctx.restore();
    }
}
