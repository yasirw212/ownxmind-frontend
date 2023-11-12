import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts, getAllPhotos } from "../../api";

export const getProducts = createAsyncThunk('/products/getProducts', async (arg, {rejectWithValuee}) => {
    try {
        const {data} = await getAllProducts()
        
        if(data){
            const response = await getAllPhotos()
            const photos = response.data
            let obj = {hats: [], tops: [], bottoms: []}
            if(photos){
                data.map(item =>{
                    const itemPhotos = photos.filter(photo => photo.products_id == item.id)
                    item = {...item, photos: [...itemPhotos]}
                    if(item.category == 'hats'){
                        obj = {...obj, hats: [...obj.hats, item]}
                    } else if(item.category == 'bottoms'){
                        obj = {...obj, bottoms: [...obj.bottoms, item]}
                    } else if(item.category == 'tops'){
                        obj = {...obj, tops: [...obj.tops, item]}
                    }
                    
                })
                console.log(obj)
                return obj
            }
        }
    } catch (error) {
        console.log(error)
    }
})

const options = {
    name: 'products',
    initialState: {
        products: {
            hats: [],
            tops: [],
            bottoms: []
        },
        isLoadingProducts: false,
        failedToGetProducts: false
    },
    extraReducers: {
        [getProducts.pending]: (state, {payload}) => {
            state.isLoadingProducts = true
            state.failedToGetProducts = false
        },
        [getProducts.fulfilled]: (state, {payload}) => {
            state.isLoadingProducts = false
            state.products = {...payload}
            state.failedToGetProducts = false
        },
        [getProducts.rejected]: (state, {payload}) => {
            state.isLoadingProducts = false
            state.failedToGetProducts = truee
        }
    }
}

const productsSlice = createSlice(options)

export const selectProducts = state => state.products.products

export default productsSlice.reducer