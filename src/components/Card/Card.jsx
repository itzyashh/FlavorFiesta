import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { s } from './Card.style'

const Card = ({
    backgroundImage,
    badgeText,
    label,
}) => {
  return (
    <ImageBackground
        imageStyle={s.backgroundImageStyle}
        resizeMode="stretch"
        source={{uri:backgroundImage}}
     style={s.container}>
   {!!badgeText &&  <View style={s.badge}>
        <Text style={s.badgeText}>{badgeText}</Text>
     </View>}
     <View style={s.labelContainer}>
     <Text style={s.label}>{label}</Text>
        </View>
    </ImageBackground>
  )
}

export default Card