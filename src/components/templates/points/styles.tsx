import {StyleSheet} from "react-native";
import {Colors} from "../../../styles/theme";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor: Colors.background
    },
    header: {
        flex: 1,
        width: widthResponsive(353),
        marginTop: heightResponsive(12)
    }
})
