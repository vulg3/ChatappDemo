import { Stack } from './Props';
import { configStack } from '../Root/RootStack';
import * as React from 'react';
import { RootStackScreenCall } from '../Root/RootStackCall';

const CallNavigation = () => {
    return <Stack.Navigator initialRouteName='CallHistoryScreen' screenOptions={({ route }) => configStack(route)}>
        {RootStackScreenCall().map((item: any) => {
            return <Stack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </Stack.Navigator>
}


export default CallNavigation
