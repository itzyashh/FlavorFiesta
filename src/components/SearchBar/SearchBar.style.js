import { StyleSheet } from "react-native";
import { moderateScale } from "../../../assets/style/scalling";

export const s = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
        flexDirection: "row",
    },
})