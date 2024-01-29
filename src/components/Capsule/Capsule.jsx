import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { s } from './Capsule.style'

const Capsule = ({title,selected,onPress}) => {
  return (
    <Pressable
        onPress={onPress}
     style={[s.container,selected && s.selectedContainer]}>
      <Text>{title}</Text>
    </Pressable>
  )
}

export default Capsule