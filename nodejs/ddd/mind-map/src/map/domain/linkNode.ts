import { Node } from "./node";

/**
 * LinkNode Value Object representing a link node in the mind map.
 */
export class LinkNode extends Node {
    private nodeId: string;
    private linkUrl: string;
    private description: string;

    constructor(
        nodeId: string, 
        linkUrl: string, 
        description: string, 
        position: { x: number; y: number }) {
        super(nodeId, linkUrl, position);
        this.nodeId = nodeId;
        this.linkUrl = linkUrl;
        this.description = description;
    }
}
