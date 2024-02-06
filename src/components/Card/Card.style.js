import { StyleSheet } from "react-native";
import { moderateScale } from "../../../assets/style/scalling";

export const s = StyleSheet.create({
    container: {
        width:moderateScale(240),
        height:moderateScale(160),
        borderRadius:moderateScale(15),
    },
    backgroundImageStyle:{
        borderRadius:moderateScale(15),
    },
    labelContainer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:moderateScale(50),
        backgroundColor:'rgba(0,0,0,0.3)',
        borderBottomLeftRadius:moderateScale(15),
        borderBottomRightRadius:moderateScale(15),
    },
    label:{
        position:'absolute',
        bottom:moderateScale(10),
        left:moderateScale(10),
        color:'white',
        fontSize:moderateScale(16),
        fontWeight:'bold',
        paddingRight:moderateScale(5),
    },
    badge:{
        position:'absolute',
        top:moderateScale(10),
        right:moderateScale(10),
        backgroundColor:'#75CE9F',
        borderRadius:moderateScale(100),
        paddingHorizontal:moderateScale(6),
        paddingVertical:moderateScale(2),
    },
    badgeText:{
        color:'white',
        fontSize:moderateScale(12),
        fontWeight:'bold',
    }
    
    
})