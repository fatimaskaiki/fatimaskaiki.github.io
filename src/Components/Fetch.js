import axios from "axios";

const apiKey = "AIzaSyDkfqaTnArpMe76VO0BWNIWdDbut1A4-XM";

export const GET = async (search, callback) => {
    try {
        const data = await axios
            .get(
                "https://www.googleapis.com/books/v1/volumes?q=inauthor:" +
                search +
                "&maxResults=40" +
                "&orderBy=newest" +
                // '&filter=free-ebooks'+
                "&key=" +
                apiKey
            );
        return callback(data.data.items);
    } catch (err) {
        return console.log(err);
    }
}