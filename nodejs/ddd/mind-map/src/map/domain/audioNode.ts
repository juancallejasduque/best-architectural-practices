import { Node } from "./node";

/**
 * AudioNode Entity representing an audio node in the mind map.
 */
export class AudioNode extends Node {
    private audioUrl: string;
    private duration: number;

    constructor(
        nodeId: string,
        position: { x: number; y: number },
        audioUrl: string,
        duration: number
    ) {
        super(nodeId, position);
        this.audioUrl = audioUrl;
        this.duration = duration;
    }
}
