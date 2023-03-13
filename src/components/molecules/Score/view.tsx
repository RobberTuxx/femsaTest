import React from "react";
import {Text, View} from "react-native";
import {styles} from "./styles";

interface ScoreProps {
    points: number
}

export default function Score(props: ScoreProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.month}>Diciembre</Text>
            <Text style={styles.points}>{props.points?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} pts</Text>
        </View>
    )
}
