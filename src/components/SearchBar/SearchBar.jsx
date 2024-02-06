import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { s } from './SearchBar.style'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import GLOBAL_COLORS from '../../../assets/style/colors'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName } from '../../redux/reducers/User'
import { Button } from 'react-native-paper'

const SearchBar = ({
  onSubmit
}) => {
  const [searchText, setSearchText] = React.useState('')
  return (
    <View style={s.container}>
        <EvilIcons name="search" size={24} color={GLOBAL_COLORS.LightOrTrunks} />
        <TextInput
            style={s.input}
            placeholder="Search recipes"
            placeholderTextColor={GLOBAL_COLORS.LightOrTrunks}
            autoCorrect={false}
            onChangeText={setSearchText}
            onSubmitEditing={() => onSubmit(searchText)}
            />
    </View>
  )
}

export default SearchBar