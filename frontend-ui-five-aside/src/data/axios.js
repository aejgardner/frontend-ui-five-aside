import axios from "axios";

export default axios.create({
    baseURL: "https://agile-brushlands-32184.herokuapp.com/api",
    // use baseURL: "http://homestead.test/api" if running locally
    headers: {
        Accept: "application/json",
    },
});