import {StyleSheet} from "react-native";
import {Colors} from "../../../styles/theme";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blue,
        borderRadius: 10,
        height: heightResponsive(50),
        width: widthResponsive(170),
        marginHorizontal: widthResponsive(6)
    },
    text: {
        fontFamily: "Avenir",
        fontSize: heightResponsive(14),
        fontWeight: "800",
        color: Colors.white
    }
})
