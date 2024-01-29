import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { s } from './Mealtype.style'
import Edamam from '../../api/Edamam'
import Card from '../Card/Card'
import { moderateScale } from '../../../assets/style/scalling'


const MealType = () => {
  const [data, setData] = React.useState([])
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

  useEffect(() => {
    getMealTypeData()
  }, [])

  const getMealTypeData = async () => {
    try {
      const response = await Edamam.get('/', {
        params: {
          type: 'public',
          cuisineType: 'Indian',
          mealType: getMealType()
        },
      })

      setData(response.data.hits)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
      <Text
    style={s.HeaderTitle}
      >Explore {getMealType()} Recipes</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.recipe.url}
        renderItem={({ item }) => {
          return (
            <Card backgroundImage={item.recipe.images.REGULAR.url}
              label={item.recipe.label} badgeText={item.recipe.healthLabels[0]} />
          )
        }
        }
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        style={{marginTop: moderateScale(10)}}
      />
    </View>
  )
}

export default MealType