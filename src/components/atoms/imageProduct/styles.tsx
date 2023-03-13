import {StyleSheet} from "react-native";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export const styles = StyleSheet.create({
    container:{
        width: heightResponsive(55),
        height: heightResponsive(55),
        borderRadius: 10,
    }
})
