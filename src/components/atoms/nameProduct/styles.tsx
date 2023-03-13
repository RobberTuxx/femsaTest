import {StyleSheet} from "react-native";
import {heightResponsive} from "../../../utils/responsive";
import {Colors} from "../../../styles/theme";

export const styles = StyleSheet.create({
    font: {
        fontSize: heightResponsive(14),
        fontWeight: "800",
        color: Colors.black,
        fontFamily: "Avenir"
    }
})
