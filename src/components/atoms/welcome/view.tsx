import React from "react";
import {Text} from "react-native";
import {styles} from "./styles";

interface WelcomeProps {
    text: string
}
export default function Welcome(props: WelcomeProps){

    return (
        <Text style={styles.font}>{props.text}</Text>
    )
}
