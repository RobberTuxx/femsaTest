import {StyleSheet} from "react-native";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export const styles = StyleSheet.create({
    container:{
        width: heightResponsive(350),
        height: heightResponsive(350),
        borderRadius: 10,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
