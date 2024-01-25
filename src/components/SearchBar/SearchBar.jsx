import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { s } from './SearchBar.style'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import GLOBAL_COLORS from '../../../assets/style/colors'

const SearchBar = () => {
  return (
    <View style={s.container}>
        <EvilIcons name="search" size={24} color={GLOBAL_COLORS.LightOrTrunks} />
        <TextInput
            placeholder="Search"
            placeholderTextColor={GLOBAL_COLORS.LightOrTrunks}
            />
    </View>
  )
}

export default SearchBar