import * as lastfmts from "./last.fm.ts"
import {data} from "./last.fm.ts";
import type {LastFMInterface} from "./LastFMInterface.ts";

import {getArtist} from "./utils.ts"
import {getAlbum} from "./utils.ts"
import {getImage} from "./utils.ts"
import {getSongName} from "./utils.ts"
import {getNowPlaying} from "./utils.ts"

export function generateSVG(): string {
    const song: string = getSongName();
    const album: string = getAlbum();
    const artist: string = getArtist();
    const isPlaying: boolean = getNowPlaying();
    const image: string = getImage();



    //THIS IS A GENERATED SVG BY AI FOR TESTING
    return `
    <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="120" rx="15" fill="#121212" />
      
      <clipPath id="roundCorners">
        <rect x="20" y="20" width="80" height="80" rx="8" />
      </clipPath>
      <image 
        href=${image}
        x="20" y="20" 
        width="80" height="80" 
        clip-path="url(#roundCorners)"
      />

      <text x="115" y="45" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">
        ${song}
      </text>

      <text x="115" y="70" font-family="Segoe UI, Arial, sans-serif" font-size="14" fill="#B3B3B3">
        ${artist}
      </text>

      <text x="115" y="90" font-family="Segoe UI, Arial, sans-serif" font-size="12" fill="#777777">
        ${album}
      </text>

      ${isPlaying ? `
        <circle cx="370" cy="25" r="5" fill="#1DB954">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
      ` : ''}
    </svg>
    `;
}


//? => is the value there?
//?? => basically an else
