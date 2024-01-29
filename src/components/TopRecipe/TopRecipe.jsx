import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { s } from './TopRecipe.style'
import Card from '../Card/Card'

const TopRecipe = ({data}) => {

  return (
    <View>
        <Text
      style={s.title}
      >Top Recipes</Text>
      <FlatList
        data={data.slice(0, 5)}
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
        style={s.flatList}       
        />
    </View>
  )
}

export default TopRecipe