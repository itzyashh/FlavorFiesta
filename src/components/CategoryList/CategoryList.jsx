import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Capsule from '../Capsule/Capsule'
import { moderateScale } from '../../../assets/style/scalling'

const CategoryList = ({
    getCategory
}) => {
    const categories = [
        {
            id:'1',
            name:'Healthy'
        },
        {
            id:'2',
            name:'Vegan'
        },
        {
            id:'3',
            name:'Vegetarian'
        },
        {
            id:'4',
            name:'Dessert'
        },
        {
            id:'5',
            name:'Snacks'
        },
        {
            id:'6',
            name:'Breakfast'
        },
        {
            id:'7',
            name:'Lunch'
        },
        {
            id:'8',
            name:'Dinner'
        },
    ]
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0].name)
  return (
    <View>
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return <Capsule title={item.name} selected={item.name === selectedCategory} onPress={() => {
                    getCategory(item.name)
                    setSelectedCategory(item.name)}} />
            }}
            ItemSeparatorComponent={() => {
                return <View style={{width:moderateScale(12)}} />

            }
            }
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default CategoryList