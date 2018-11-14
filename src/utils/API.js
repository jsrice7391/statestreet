import axios from "axios";


export default {
    getData: function(){
       return axios.get("https://s3.amazonaws.com/stuff-for-sites/data.json");
    }
}