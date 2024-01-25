import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstName } from '../../redux/reducers/User'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const onPress = () => {
      dispatch(setFirstName('John'))
  }
  return (
    <SafeAreaView>
      <SearchBar />
      <Text>{user.firstName}</Text>
      <Button title="Tap" onPress={onPress} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})