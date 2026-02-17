export interface LastFMInterface {
    artist: {
        "#text": string
    },
    image: {
        //"size":string,
        "#text":string,
    }[],
    album:{
        "#text":string
    },
    name: string,
    //question mark makes the data optional (e.g. not listening to something on spotify right now)
    "@attr"?: {
        "nowplaying": string | boolean,
    }
}

export interface LastFMTracks{
    recenttrack:{
        track: LastFMInterface[];
    };
}