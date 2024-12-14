import { createSlice } from "@reduxjs/toolkit";

 const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // addToCart(state,action){
        //     const{id, quantity}=action.payload;
        //     // const index=(state.items).findIndex((i)=>i.id===id);
        //     const indexId=state.items.findIndex(item=>item.id===id)                
            
        //      if(indexId>=0){
        //         state.items[indexId].quantity += quantity;
        //      }
        //     else{
        //         state.items.push({id, quantity});
        //     }
        //     console.log(indexId);
            
        // }
        addToCart(state, action) {
            const { id, quantity,src,title,price,category} = action.payload;
            const indexId = state.items.findIndex(item => item.id === id);

            if (indexId >= 0) {
                state.items[indexId].quantity += quantity;
            } else {
                state.items.push({ id, quantity,src,title,price,category });
            }
            console.log(state.items.quantity);
            
           },
           changeQuantity(state,action){
            const { id, quantity} = action.payload;
            const indexId = state.items.findIndex(item => item.id === id);
            // console.log(quantity);
            
            if(quantity>0)
            {
                state.items[indexId].quantity=quantity;
            }
          
           },
           deleteCart(state,action){
                const {id}=action.payload;
                state.items = state.items.filter(item => item.id !== id);
                console.log(`Deleted item with id: ${id}`);
                
           }


    }
});
export const {addToCart,changeQuantity,deleteCart}=cartSlice.actions;
export default cartSlice.reducer;