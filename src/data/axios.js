import axios from "axios";

export default axios.create({
    baseURL: "https://afternoon-gorge-82119.herokuapp.com/api",
    // use baseURL: "http://homestead.test/api" if running locally
    headers: {
        Accept: "application/json",
    },
});