import { MapId } from "./mapId";
import { MapTitle } from "./mapTitle";

class MapEntity {
    private readonly id: MapId;
    private title: MapTitle;
    private author: string;

    constructor(id: string, title: string, author: string) {
        this.id = new MapId(id);
        this.title = new MapTitle(title);
        this.author = author;
    }
}