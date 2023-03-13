import React from "react";
import {Text} from "react-native";
import {styles} from "./styles";

interface UserNameProps {
    text: string
}
export default function UserName(props: UserNameProps){

    return (
        <Text style={styles.font}>{props.text}</Text>
    )
}
