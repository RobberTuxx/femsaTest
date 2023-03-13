import {StyleSheet} from "react-native";
import {heightResponsive} from "../../../utils/responsive";
import {Colors} from "../../../styles/theme";

export const styles = StyleSheet.create({
    font:{
        fontWeight: "400",
        fontSize: heightResponsive(12),
        color: Colors.black,
        fontFamily: "Avenir"
    }
})
