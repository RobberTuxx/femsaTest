import {StyleSheet} from "react-native";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";
import {Colors} from "../../../styles/theme";

export const styles = StyleSheet.create({
    font: {
        fontFamily: "Avenir",
        fontSize: heightResponsive(16),
        fontWeight: "800",
        color: Colors.black,
        width: widthResponsive(65)

    }
})
