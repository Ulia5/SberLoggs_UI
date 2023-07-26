import axios from 'axios'


const INSTRUCTOR ='api'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/${INSTRUCTOR}`

class LoggDataService {

    retrieveAllLoggs(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/loggs`);
    }

    uploadsFile(pattern,fileListLoggs){
        return axios.post(`${INSTRUCTOR_API_URL}/upload`,{
            pattern,
            fileListLoggs
        });
    }
    transmittingValue(valueHeader){
        return axios.post(`${INSTRUCTOR_API_URL}/sort`,{
            valueHeader
        });
    }
    Filter(valueFilter,filter){
        return axios.post(`${INSTRUCTOR_API_URL}/${filter}`,{
            valueFilter
        });
    }

    deleteData(){
        return axios.delete(`${INSTRUCTOR_API_URL}/deleteData`);
    }
    // FilterLevel(valueFilter){
    //     return axios.post(`${INSTRUCTOR_API_URL}/`,{
    //         valueFilter
    //     });
    //}
}

export default new LoggDataService()