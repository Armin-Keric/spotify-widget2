import {generateSVG} from "./render.ts";
import {getAlbum, getArtist, getImage, getNowPlaying, getSongName} from "./utils.ts";

console.log(getAlbum());
console.log(getSongName());
console.log(getArtist());
console.log(getNowPlaying());
console.log(getImage());
console.log(generateSVG())
