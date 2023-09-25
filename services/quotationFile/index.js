import { http } from '../config'

export default {
    CreateQuotationFile: async (formData) => {
        return await http.post(`/quotationFile/1`, formData, { headers:  {'Content-Type': 'multipart/form-data'}});
    }
}