import React from "react";
import {SafeAreaView, View} from "react-native";
import ProductNameBig from "../../atoms/productNameBig";
import ImageProductBig from "../../atoms/imageProductBig";
import Header from "../../atoms/header";
import NameProduct from "../../atoms/nameProduct";
import Button from "../../molecules/button";
import {useNavigation, useRoute} from "@react-navigation/native";
import moment from "moment/moment";
import {styles} from "./styles";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export default function Details(){
    const navigation = useNavigation()
    const params = useRoute().params
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
                <View style={styles.containerTitle}>
                    <ProductNameBig text={params.product.product}/>
                </View>
            </View>
            <View style={{alignItems: 'center', marginTop:20, flex: 7}}>
                <ImageProductBig url={params.product.image}/>
            </View>
            <View style={styles.container}>
                <Header text={'Detalles del producto:'}/>
                <NameProduct text={moment(params.product.createdAt).format('LL')}/>
                <Header text={'Con esta compra acumulaste:'}/>
                <ProductNameBig text={params.product.points + ' puntos'}/>

            </View>
            <View style={{flex: 1.2, alignItems: 'center'}}>
                <Button big text={'Aceptar'} onPress={()=> navigation.goBack()}/>
            </View>
        </SafeAreaView>
    )
}
