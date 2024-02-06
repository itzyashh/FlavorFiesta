import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar/SearchBar'
import { moderateScale } from '../../../assets/style/scalling'
import Edamam from '../../api/Edamam'
import Capsule from '../../components/Capsule/Capsule'
import CategoryList from '../../components/CategoryList/CategoryList'
import { s } from './Home.style'
import DrinkList from '../../components/DrinkList/DrinkList'
import Card from '../../components/Card/Card'
import TopRecipe from '../../components/TopRecipe/TopRecipe'
import HomeCategory from '../../components/MealType/MealType'
import MealType from '../../components/MealType/MealType'

const Home = () => {
  const [searchText, setSearchText] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('Healthy')
  const [data, setData] = React.useState([])
  const setSelectedCategoryHandler = (category) => {
    setSelectedCategory(category)
  }

  const searchApi = async (text) => {
    console.log('searchApi')
    try {
      const response = await Edamam.get('/', {
        params: {
          type: 'public',
          cuisineType: 'Indian',
          q: text
        },
      })
      console.log('q',text)
      setData(response.data.hits)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    if (selectedCategory === null) {
    searchApi(searchText)
    }
    else {
      searchApi(selectedCategory)
    }


  }
    , [searchText, selectedCategory])

  return (
    <SafeAreaView>
      <View
        style={s.searchContainer}>
        <SearchBar onSubmit={
          (text) => {
            setSelectedCategory(null)
            setSearchText(text)
            searchApi(text)
          }
        } />
      </View>
      <View style={s.categoryContainer}>
        <CategoryList getCategory={setSelectedCategoryHandler} initialCategory={selectedCategory} />
      </View>
      <View style={s.topRecipeContainer}>
        <TopRecipe data={data} />
      </View>
      <View style={s.MealTypeContainer}>
        <MealType />
      </View>

    
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})