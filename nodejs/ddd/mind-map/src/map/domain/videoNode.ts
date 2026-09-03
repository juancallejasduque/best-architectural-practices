import { Node } from "./node";

/**
 * VideoNode Entity representing a video node in the mind map.
 */
export class VideoNode extends Node {
    private nodeId: string;
    private videoUrl: string;
    private title: string;
    private width: number;
    private height: number;
    private duration: number;

    constructor(
        nodeId: string,
        videoUrl: string,
        title: string,
        width: number,
        height: number,
        duration: number,
        position: { x: number; y: number }
    ) {
        super(nodeId, position);
        this.nodeId = nodeId;
        this.videoUrl = videoUrl;
        this.title = title;
        this.width = width;
        this.height = height;
        this.duration = duration;
    }
}
