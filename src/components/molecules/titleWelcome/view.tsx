import React from "react";
import Welcome from "../../atoms/welcome";
import UserName from "../../atoms/userName";
import {View} from "react-native";

export default function TitleWelcome(){
    return(
        <View>
            <Welcome text={'hello'}/>
            <UserName text={'hello'}/>
        </View>
    )
}
