import {StyleSheet} from "react-native";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";
import {Colors} from "../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width:widthResponsive(330),
        marginVertical:heightResponsive(8)
    },
    containerText: {
        width: widthResponsive(190),
        marginLeft: widthResponsive(10)
    },
    positive: {
        fontSize: heightResponsive(16),
        color: Colors.green
    },
    negative: {
        fontSize: heightResponsive(16),
        color: Colors.red
    }
})
