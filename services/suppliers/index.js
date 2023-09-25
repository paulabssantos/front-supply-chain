import {http} from '../config'

export default {
    ListSuppliers: async () => {
        return await http.get(`/supplier`)
    }
}