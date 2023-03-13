import {StyleSheet} from "react-native";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";
import {Colors} from "../../../styles/theme";

export const styles = StyleSheet.create({
    font: {
        fontSize: heightResponsive(24),
        fontWeight: "800",
        color: Colors.black,
        fontFamily: "Avenir",
    }
})
