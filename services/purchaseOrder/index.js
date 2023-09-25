import {http} from '../config'

export default {
    CreatePurchaseOrder: async (data) => {
        return await http.post(`/purchaseOrder`,data);
    }
}