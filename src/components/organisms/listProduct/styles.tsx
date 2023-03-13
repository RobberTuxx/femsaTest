import {StyleSheet} from "react-native";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export const styles = StyleSheet.create({
    container: {
        width: widthResponsive(353),
        height: heightResponsive(350)
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
