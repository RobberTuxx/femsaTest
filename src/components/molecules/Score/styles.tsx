import {StyleSheet} from "react-native";
import {Colors} from "../../../styles/theme";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.blue,
        width: widthResponsive(286),
        height: heightResponsive(143),
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    points: {
        fontSize: heightResponsive(32),
        fontWeight: "900",
        fontFamily: "Avenir",
        color: Colors.white
    },
    month: {
        fontSize: heightResponsive(16),
        fontWeight: "900",
        fontFamily: "Avenir",
        color: Colors.white,
        marginLeft: widthResponsive(-180),
        marginTop: heightResponsive(-20)
    }
})
