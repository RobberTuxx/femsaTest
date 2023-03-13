import {StyleSheet} from "react-native";
import {Colors} from "../../../styles/theme";
import {heightResponsive, widthResponsive} from "../../../utils/responsive";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.purple,
        flex: 2,
    },
    container:{
        flex:4,
        marginLeft:20,
    },
    containerTitle:{
        marginTop: heightResponsive(55),
        marginLeft: widthResponsive(20)
    }
})
