import React, {useEffect, useState} from "react";
import {View} from "react-native";
import Welcome from "../../atoms/welcome";
import UserName from "../../atoms/userName";
import Header from "../../atoms/header";
import ListProduct from "../../organisms/listProduct";
import {styles} from "./styles";
import Score from "../../molecules/Score";
import Button from "../../molecules/button";

interface PointsProps {
    welcome: string
    username: string
    products: []
    win: () => void
    change: () => void
    restore: () => void
}

export default function Points(props: PointsProps) {
    const [points, setPoints] = useState(0)
    const [allProduct, setAllProduct] = useState(true)
    useEffect(() => {
        let sum = 0
        props.products.forEach(value => {
            if (!value.is_redemption) {
                sum += value.points
            }
        })
        if (!sum) {
            sum = points
        }
        setPoints(sum)
    }, [props.products])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Welcome text={props.welcome}/>
                <UserName text={props.username}/>
                <Header text={'TUS PUNTOS'}/>
            </View>
            <View style={{flex: 1.4}}>
                <Score points={points}/>
            </View>
            <View style={{flex: 4}}>
                <Header text={'TUS MOVIMIENTOS'}/>
                <ListProduct products={props.products}/>
            </View>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                {allProduct ? (
                    <><Button text={'Ganados'} onPress={() => {
                        setAllProduct(false);
                        props.win();
                    }}/>
                        <Button text={'Canjeados'} onPress={() => {
                        setAllProduct(false);
                        props.change();
                    }}/></>
                    ):(
                        <Button big text={'Todos'} onPress={() => {
                    setAllProduct(true);
                    props.restore();
                }}/>)}
            </View>
        </View>
    )
}
