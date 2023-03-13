import React from "react";
import {Text} from "react-native";
import {styles} from "./styles";

interface ProductNameBigProps {
    text: string
}
export default function ProductNameBig(props: ProductNameBigProps){

    return(
        <Text style={styles.font}>{props.text}</Text>
    )
}
