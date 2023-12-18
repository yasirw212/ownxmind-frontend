import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveSessionData, updateSessionData } from "../../api";

export const retrieveData = createAsyncThunk("/order/retrieveData", async (arg, {rejectWithValue}) => {
    try {
        const {data} = await retrieveSessionData()
        return data.order
    } catch (error) {
        console.log(error)
    }
})



const options = {
    name: 'order',
    initialState: {
        items: [],
        cartQuantity: 0,
        total: 0,
        loadingData: false,
        failedToLoadData: false
    },
    reducers: {
        getTotal: (state, {payload}) => {
            let total = 0
            for(let item of state.items){
                total += item.price * item.quantityInCart
            }
            state.total = total
        },
        adjustItemQuantity: (state, {payload}) => {
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
            }
            state.items = [...itemsArr]
            updateSessionData(itemsArr)
        },
        updateCartQuantity: (state, {payload}) => {
            let numItems = 0
            console.log(state.cartQuantity)
            state.items.map(item => numItems += item.quantityInCart)
            state.cartQuantity = numItems                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        } 
    },
    extraReducers: {
        [retrieveData.pending]: (state, {payload}) => {
            state.loadingData = true,
            state.failedToLoadData = false
        },
        [retrieveData.fulfilled]: (state, {payload}) => {
            state.loadingData = false
            console.log(payload)
            state.items = [...payload]
            state.failedToLoadData = false
        },
        [retrieveData.rejected]: (state, {payload}) => {
            state.loadingData = false
            state.failedToLoadData = true
        }
    }
}

const orderSlice = createSlice(options)
export const {adjustItemQuantity, getTotal, updateCartQuantity} = orderSlice.actions
export const selectItems = state => state.order.items
export const selectTotal = state => state.order.total
export const selectCartQuantity = state => state.order.cartQuantity


export default orderSlice.reducer