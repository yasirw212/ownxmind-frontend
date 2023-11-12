import { ContactlessOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'order',
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        getTotal: (state, {payload}) => {
            let total = 0
            for(let item of state.items){
                total += item.price * item.quantityInCart
            }
            state.total = total
        },
        adjustQuantityInCart: (state, {payload}) => {
            let itemsArr = [...state.items]
            const {id, name, price, photos, stripe_code} = payload.product
            console.log(payload)
            const items = [...state.items]
            console.log(id)
            const itemIndex = itemsArr.findIndex(item => item.id == id)
            if(itemIndex !== -1){
                if(payload.method == '+') {
                    itemsArr[itemIndex].quantityInCart += payload.quantity
                } else if(payload.method == "-") {
                    if(payload.quantity !== 0) {
                        itemsArr[itemIndex].quantityInCart -= 1
                    }
                    if(itemsArr[itemIndex].quantityInCart == 0 || payload.quantity == 0) {
                        itemsArr.splice(itemIndex, 1)
                    }
                }
            } else {
                itemsArr.push({id: id, name: name, price: price, photos: photos, quantityInCart: 1, productCode: stripe_code})
                console.log(itemsArr)
            }
            console.log(itemsArr)
            state.items = [...itemsArr]
            console.log(state.items)
        }
    }
}

const orderSlice = createSlice(options)
export const {adjustQuantityInCart, getTotal} = orderSlice.actions
export const selectItems = state => state.order.items
export const selectTotal = state => state.order.total


export default orderSlice.reducer