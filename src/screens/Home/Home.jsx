import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
  return (
    <SafeAreaView>
      <SearchBar />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})