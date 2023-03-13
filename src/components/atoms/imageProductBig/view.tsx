import React from "react";
import {Image, View} from "react-native";
import {styles} from "./styles";

interface ImageProductBigProps {
    url: string
}
export default function ImageProductBig(props: ImageProductBigProps){
    return(
        <View style={styles.shadow}>
            <Image source={{uri: props.url }} style={styles.container} />
        </View>
    )
}
