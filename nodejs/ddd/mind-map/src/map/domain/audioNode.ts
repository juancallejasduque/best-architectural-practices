import { Node } from "./node";

/**
 * AudioNode Entity representing an audio node in the mind map.
 */
export class AudioNode extends Node {
    private nodeId: string;
    private audioUrl: string;
    private duration: number;

    constructor(
        nodeId: string,
        content: string,
        position: { x: number; y: number },
        audioUrl: string,
        duration: number
    ) {
        super(nodeId, content, position);
        this.nodeId = nodeId;
        this.audioUrl = audioUrl;
        this.duration = duration;
    }
}
