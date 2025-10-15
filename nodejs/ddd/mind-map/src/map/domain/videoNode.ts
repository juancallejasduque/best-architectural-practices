import { Node } from "./node";

/**
 * VideoNode Entity representing a video node in the mind map.
 */
export class VideoNode extends Node {
    private nodeId: string;
    private videoUrl: string;
    private caption: string;
    private width: number;
    private height: number;
    private duration: number;

    constructor(
        nodeId: string,
        videoUrl: string,
        caption: string,
        width: number,
        height: number,
        duration: number,
        content: string,
        position: { x: number; y: number }
    ) {
        super(nodeId, content, position);
        this.nodeId = nodeId;
        this.videoUrl = videoUrl;
        this.caption = caption;
        this.width = width;
        this.height = height;
        this.duration = duration;
    }
}
