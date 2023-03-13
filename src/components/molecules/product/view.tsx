import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import ImageProduct from "../../atoms/imageProduct";
import NameProduct from "../../atoms/nameProduct";
import DateProduct from "../../atoms/dateProduct";
import PriceProduct from "../../atoms/priceProduct";
import {useNavigation} from "@react-navigation/native";

interface ProductProps {
    product: {
        product: string
        points: number
        image: string
        is_redemption: boolean
        id: string
        createdAt: string
    }
}

export default function Product(props: ProductProps) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container}
                          onPress={() => navigation.navigate('Details', {product: props.product})}>
            <ImageProduct url={props.product.image}/>
            <View style={styles.containerText}>
                <NameProduct text={props.product.product}/>
                <DateProduct text={props.product.createdAt}/>
            </View>
            {
                props.product.is_redemption ?
                    <Text style={styles.negative}>-</Text>
                    :
                    <Text style={styles.positive}>+</Text>
            }
            <PriceProduct text={props.product.points}/>
            <Text style={{fontWeight: '800'}}>></Text>
        </TouchableOpacity>
    )
}
