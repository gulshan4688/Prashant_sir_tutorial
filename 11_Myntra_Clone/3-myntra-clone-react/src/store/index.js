import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice";






const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
    }
})

export default myntraStore;