import { Node } from "./node";

/**
 * ImageNode Value Object representing an image node in the mind map.
 */
export class ImageNode extends Node {
    private nodeId: string;
    private imageUrl: string;
    private title: string;
    private width: number;
    private height: number;

    constructor(
        nodeId: string,
        imageUrl: string,
        title: string,
        width: number,
        height: number,
        position: { x: number; y: number }
    ) {
        super(nodeId, position);
        this.nodeId = nodeId;
        this.imageUrl = imageUrl;
        this.title = title;
        this.width = width;
        this.height = height;
    }
}
