import React from "react";
import {Image} from "react-native";
import {styles} from "./styles";

interface ImageProductProps {
    url: string
}
export default function ImageProduct(props: ImageProductProps){
    return(
        <Image source={{uri: props.url }} style={styles.container} />
    )
}
