import { configureStore } from '@reduxjs/toolkit'
import Slices from './Slices';

const store = configureStore ({
    reducer:{
        SlicesReducer: Slices,
    }
})

export default store;

