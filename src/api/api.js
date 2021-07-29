import axios from "axios";

export default {
    fetchAgenda(date){
        return axios.get(`https://goulartf.com/api/test.php?date=${date.getDate()}-${date.getMonth() + 1}`)
    },
}