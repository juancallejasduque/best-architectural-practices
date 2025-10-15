import { Author } from "./author";
import { MapId } from "./mapId";
import { MapTitle } from "./mapTitle";

/**
 * Map Entity representing a mind map.
 */
export class MapEntity {
    private readonly id: MapId;
    private title: MapTitle;
    private author: Author;

    constructor(id: string, title: string, author: Author) {
        this.id = new MapId(id);
        this.title = new MapTitle(title);
        this.author = author;
    }
}