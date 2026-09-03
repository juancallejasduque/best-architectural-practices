
export class Node {
    private id: string;
    private position: { x: number; y: number };

    constructor(id: string, position: { x: number; y: number }) {
        this.id = id;
        this.position = position;
    }
}