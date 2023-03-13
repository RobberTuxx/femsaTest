import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import {widthResponsive} from "../../../utils/responsive";

interface ButtonProps {
    text: string
    onPress: () => void
    big?: boolean
}

export default function Button(props: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.container, props.big ? {
            width: widthResponsive(353)
        } : null]} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}
