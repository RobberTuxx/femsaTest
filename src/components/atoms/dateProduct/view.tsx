import React from "react";
import {Text} from "react-native";
import {styles} from "./styles";
import moment from "moment";
moment.locale('es')

interface DateProductProps {
    text: string
}
export default function DateProduct(props: DateProductProps){

    return(
        <Text style={styles.font}>{moment(props.text).format('LL')}</Text>
    )
}
