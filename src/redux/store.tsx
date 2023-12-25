import { configureStore } from '@reduxjs/toolkit'
import PropTypes from 'prop-types'
import React from 'react'
import Slices from './Slices';

const store = configureStore ({
    reducer:{
        SlicesReducer: Slices,
    }
})

export default store;

