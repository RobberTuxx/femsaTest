import {StyleSheet} from "react-native";
import {heightResponsive} from "../../../utils/responsive";
import {Colors} from "../../../styles/theme";

export const styles = StyleSheet.create({
    font: {
        fontFamily: "Avenir",
        fontWeight: "900",
        fontSize: heightResponsive(14),
        color: Colors.gray,
        marginTop: heightResponsive(18),
        marginBottom: heightResponsive(20)
    }
})
