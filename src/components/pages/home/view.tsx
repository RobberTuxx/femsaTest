import React, {useEffect, useState} from "react";
import AxiosService from "../../../utils/axiosService";
import Points from "../../templates/points/view";
import {SafeAreaView} from "react-native";
import {Colors} from "../../../styles/theme";

export default function Home() {
    const [products, setProducts] = useState([])
    const [productsAux, setProductsAux] = useState([])
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const products = await AxiosService.get('products')
        setProducts(products)
        setProductsAux(products)
    }
    const filterWin = () => {
        setProductsAux(products.filter(value => !value.is_redemption))
    }
    const filterChange = () => {
        setProductsAux(products.filter(value => value.is_redemption))
    }
    const restore = () => {
        setProductsAux(products)
    }

    return (
        <SafeAreaView style={{flex: 1,
            backgroundColor: Colors.background}}>
            <Points products={productsAux}
                    welcome={'Bienvenido de vuelta!'}
                    username={'Ruben Rodriguez'}
                    win={filterWin}
                    change={filterChange}
                    restore={restore}
            />
        </SafeAreaView>

    )
}
