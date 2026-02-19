import type {LastFMInterface} from "../types/LastFMInterface.ts";
import {data} from "../api/last.fm.ts";

const musicData: LastFMInterface = data.recenttracks.track[0];

//dont forget the notlistening case...
export function getAlbum(): string {
    const albumName: string = musicData.album?.["#text"] ?? "null";
    return albumName;
}

export function getArtist(): string {
    const artistName: string = musicData.artist?.["#text"] ?? "null";
    return artistName;
}

export function getNowPlaying(): boolean {
    const isPlaying = musicData["@attr"]?.nowplaying === "true"
    return isPlaying.valueOf();
}

export function getImage(): string {
    const imageURL: string = musicData.image[3]?.["#text"] ?? "https://via.placeholder.com/300"
    return imageURL;
}

export function getSongName(): string {
    return musicData?.name ?? "null"
}