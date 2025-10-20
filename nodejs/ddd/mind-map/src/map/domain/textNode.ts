import { Node } from "./node";

/** Represents a text node in a mind map with various text properties. */
export class TextNode extends Node {
    private nodeId: string;
    private textContent: string;
    private fontSize: number;
    private fontColor: string;
    private bold: boolean;
    private italic: boolean;
    private underline: boolean;

    constructor(
        nodeId: string,
        textContent: string,
        fontSize: number,
        fontColor: string,
        bold: boolean,
        italic: boolean,
        underline: boolean,
        position: { x: number; y: number }
    ) {
        super(nodeId, position);
        this.nodeId = nodeId;
        this.textContent = textContent;
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.bold = bold;
        this.italic = italic;
        this.underline = underline;
    }
}