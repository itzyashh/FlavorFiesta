import { View, Text, FlatList } from 'react-native'
import React from 'react'

const DrinkList = ({data}) => {
    const filteredData = data.filter((item) => item.category === item.recipe.dishType == 'cocktail' || item.recipe.dishType == 'alcohol' || item.recipe.dishType == 'beverage' || item.recipe.dishType == 'drink' || item.recipe.dishType == 'liquor' || item.recipe.dishType == 'wine' || item.recipe.dishType == 'beer' || item.recipe.dishType == 'sangria' || item.recipe.dishType == 'punch' || item.recipe.dishType == 'soda' || item.recipe.dishType == 'smoothie' || item.recipe.dishType == 'shake' || item.recipe.dishType == 'juice' || item.recipe.dishType == 'coffee' || item.recipe.dishType == 'tea' || item.recipe.dishType == 'cocoa' || item.recipe.dishType == 'milk' || item.recipe.dishType == 'lemonade')
    console.log('filteredData',filteredData)
  return <Text>DrinkList</Text>
}

export default DrinkList