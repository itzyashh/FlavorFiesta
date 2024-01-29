import { View, Text } from 'react-native'
import React from 'react'
import { s } from './Mealtype.style'


const MealType = () => {
  const date = new Date()
  const getMealType = () => {
    const hour = date.getHours()
    if (hour < 12) {
      return 'Breakfast'
    } else if (hour < 18) {
      return 'Lunch'
    } else {
      return 'Dinner'
    }
  }

  const listHeader = () => {
    return (
      <Text
        style={s.HeaderTitle}
      >Explore {getMealType()} Recipes</Text>
    )
  }

  return (
    <View>
      <Text
    style={s.HeaderTitle}
      >Explore {getMealType()} Recipes</Text>

    </View>
  )
}

export default MealType