import axios from "axios";

const API = {
    getDining: function(park){
        return axios.get("https://touringplans.com/" + park + "/dining.json")
    }
};

export default API;