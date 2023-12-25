import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigation from './LoginNavigation';
import BottomTab from '../BottomNavigation/BottomNavigator';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const isLogin = useSelector((state: any) => state.SlicesReducer.isLogin);

    return isLogin ? <BottomTab /> : <LoginNavigation />;
};

export default Navigation;
