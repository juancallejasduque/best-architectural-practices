import { Node } from "./node";

/**
 * Edge Entity representing a connection between two nodes in a mind map.
 */
export class Edge {
    private fromNodeId: Node;
    private toNodeId: Node;
    private label: string;

    constructor(fromNodeId: Node, toNodeId: Node, label: string) {
        this.fromNodeId = fromNodeId;
        this.toNodeId = toNodeId;
        this.label = label;
    }
}