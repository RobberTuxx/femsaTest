import React from "react";
import {Text} from "react-native";
import {styles} from "./styles";

interface PriceProductProps {
    text: string
}
export default function PriceProduct(props: PriceProductProps){

    return (
        <Text style={styles.font}> {props.text}</Text>
    )
}
