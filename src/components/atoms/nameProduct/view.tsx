import React from "react";
import {Text} from "react-native";
import {styles} from "./styles";

interface NameProductProps {
    text: string
}
export default function NameProduct(props: NameProductProps){

    return(
        <Text style={styles.font}>{props.text}</Text>
    )
}
