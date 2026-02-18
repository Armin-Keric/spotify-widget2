const sharedSecret: string = process.env.SHARED_SECRET != null ? process.env.SHARED_SECRET : throwMissingEnvError("SHARED_SECRET");
const apikey: string = process.env.API_KEY != null ? process.env.API_KEY : throwMissingEnvError("API_KEY");
const userName: string = process.env.USER_NAME != null ? process.env.USER_NAME : throwMissingEnvError("USER_NAME");
const url: string = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + `${userName}` + "&api_key=" + `${apikey}` + "&format=json&page=1&limit=1";
//asynchronous functions return a Promise (Promises are placeholders)
//with async the function pauses/waits for a network response. It is used to not freeze websites
async function getLastFmData(url: string) {
    try {
        // 'await' pauses execution until fetch() finishes
        const response = await fetch(url);

        // Check if the HTTP request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        //returns a json object
        return await response.json();
    } catch (e) {
        console.error("Error with fetch:", e);
    }

}

function throwMissingEnvError(env: string): string {
    throw new Error(`Undefined environmental variable: ${env}`);

}

export const data = await getLastFmData(url);

//testing
console.log(JSON.stringify(data, null, 2));
console.log(data.recenttracks);