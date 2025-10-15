
export class Node {
    private id: string;
    private content: string;
    private position: { x: number; y: number };

    constructor(id: string, content: string, position: { x: number; y: number }) {
        this.id = id;
        this.content = content;
        this.position = position;
    }
}