import { StyleSheet } from "react-native";
import { moderateScale } from "../../../assets/style/scalling";
import GLOBAL_COLORS from "../../../assets/style/colors";

export const s = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
        flexDirection: "row",
        borderWidth:1,
        borderColor:GLOBAL_COLORS.LightOrBeerusOrBeerus
    },
    input: {
        flex: 1,
        fontSize: moderateScale(16),
        marginLeft: moderateScale(12),
    },
})