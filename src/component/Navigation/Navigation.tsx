import LoginNavigation from './LoginNavigation';
import BottomTab from '../BottomNavigation/BottomNavigator';
import React from 'react';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const isLogin = useSelector((state: any) => state.SlicesReducer.isLogin);

    return isLogin ? <BottomTab /> : <LoginNavigation />;
};

export default Navigation;
