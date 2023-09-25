import {http} from '../config'

export default {
    ListQuotation: async (id) => {
        return await http.get(`/quotation/${id}`);
    }
}