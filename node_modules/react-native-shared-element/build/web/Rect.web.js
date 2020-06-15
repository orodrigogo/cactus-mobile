export class Rect {
    constructor(source) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.width = source.width;
            this.height = source.height;
        }
    }
    equals(rect) {
        return (this.x === rect.x &&
            this.y === rect.y &&
            this.width === rect.width &&
            this.height === rect.height);
    }
}
Rect.empty = new Rect();
//# sourceMappingURL=Rect.web.js.map