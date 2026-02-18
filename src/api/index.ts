import {generateSVG} from "../render.ts";

//vercel runs this function, the handler
export default async function handler(req: Request) {
    const svg = generateSVG();


    return new Response(svg, {
        headers: {
            // Tells the browser (and GitHub):
            // "This content is an SVG image"
            "Content-Type": "image/svg+xml",

            /*
      Tells caches:
      Always check if there is a newer version.

      This helps your widget update when
      you skip a song on Spotify.
    */
            "Cache-Control": "public, max-age=0, must-revalidate"
        }
    });
}

