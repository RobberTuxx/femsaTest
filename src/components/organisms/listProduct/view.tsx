import React from "react";
import {FlatList} from "react-native";
import Product from "../../molecules/product";
import {styles} from "./styles";

interface ListProductProps {
    products: []
}

export default function ListProduct(props: ListProductProps) {

    return (
        <FlatList style={styles.container}
                  contentContainerStyle={styles.content}
                  data={props.products}
                  renderItem={({item}) => <Product product={item}/>}
        />
    )
}
