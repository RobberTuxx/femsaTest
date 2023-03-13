import {StyleSheet} from "react-native";
import {heightResponsive} from "../../../utils/responsive";
import {Colors} from "../../../styles/theme";

export const styles = StyleSheet.create({
    font: {
        fontFamily: "Avenir",
        fontSize: heightResponsive(16),
        fontWeight: "400",
        color: Colors.semiBlack
    }
})
