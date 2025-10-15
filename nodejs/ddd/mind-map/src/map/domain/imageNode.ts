import { Node } from "./node";

/**
 * ImageNode Value Object representing an image node in the mind map.
 */
export class ImageNode extends Node {
    private nodeId: string;
    private imageUrl: string;
    private caption: string;
    private width: number;
    private height: number;

    constructor(
        nodeId: string,
        imageUrl: string,
        caption: string,
        width: number,
        height: number,
        position: { x: number; y: number }
    ) {
        super(nodeId, caption, position);
        this.nodeId = nodeId;
        this.imageUrl = imageUrl;
        this.caption = caption;
        this.width = width;
        this.height = height;
    }
}
