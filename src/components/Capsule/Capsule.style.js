import { StyleSheet } from "react-native";
import { moderateScale } from "../../../assets/style/scalling";

export const s = StyleSheet.create({
    container: {
        paddingHorizontal:moderateScale(12),
        paddingVertical:moderateScale(6),
        borderWidth:1,
        borderColor:'#E8E8E8',
        borderRadius:moderateScale(100),
        alignSelf:'flex-start',
    },
    selectedContainer:{
        backgroundColor:'#E8E8E8'
    }
})