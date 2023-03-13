import React from "react";
import {Text} from "react-native";
import {styles} from "./styles";

interface HeaderProps {
    text: string
}
export default function Header(props: HeaderProps){
    return(
        <Text style={styles.font}>{props.text}</Text>
    )
}
