import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar/SearchBar'
import { moderateScale } from '../../../assets/style/scalling'
import Edamam from '../../api/Edamam'

const Home = () => {
  const [searchText, setSearchText] = React.useState('')


  const searchApi = async () => {
    console.log('searchApi')
    try {
      const response = await Edamam.get('/',{
        params: {
          type: 'public',
          cuisineType: 'Indian',
        },
      })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    searchApi()
  }
  , [searchText])

  return (
    <SafeAreaView>
    <View
      style={{
        marginHorizontal: moderateScale(16),
      }}>
      <SearchBar onSubmit={setSearchText} />
    </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})