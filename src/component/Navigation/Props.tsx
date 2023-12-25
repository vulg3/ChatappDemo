import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"
import { RootStackParamListMessage, RootStackScreenEnumMessage } from "../Root/RootStackMessager";
import { RootStackParamListCall, RootStackScreenEnumCall } from "../Root/RootStackCall";
import { RootStackParamListSetting, RootStackScreenEnumSetting } from "../Root/RootStackSetting";
import { RootStackParamListContacts, RootStackScreenEnumContacts } from "../Root/RootStackContacts";

export type PropsMessager = {
    navigation?: StackNavigationProp<RootStackParamListMessage, RootStackScreenEnumMessage>
}
export type PropsCall = {
    navigation?: StackNavigationProp<RootStackParamListCall, RootStackScreenEnumCall>
}
export type PropsContacts = {
    navigation?: StackNavigationProp<RootStackParamListContacts, RootStackScreenEnumContacts>
}
export type PropsSetting = {
    navigation?: StackNavigationProp<RootStackParamListSetting, RootStackScreenEnumSetting>
}


export const Stack = createNativeStackNavigator();
