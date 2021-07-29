import axios from "axios";


export default {
    fetchAgenda(date){
        return axios.get(`https://goulartf.com/api/test.php?date=${date.getDate()}-${date.getMonth() + 1}`)
        // return require('./agendaApi.json');
    },
    fetchMedalTable(){
        return axios.get(`https://goulartf.com/api/testmedalTable.php`)
        // return require('./medalTable.json');
    },
    fetchNews(){
        return axios.get('https://falkor-cda.bastian.globo.com/tenants/ge/instances/bc4d10b9-ed92-49c4-accb-ca14e4a1dd3e/posts/page/1')
        // return require('./newsApi.json');
    },
}
