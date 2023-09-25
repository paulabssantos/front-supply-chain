import {http} from '../config'

export default {
    CreateValueAnalysis: async (data) => {
        return await http.post(`/valueAnalysis`, data)
    }
}