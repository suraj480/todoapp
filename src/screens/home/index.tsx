import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Box, Text } from "../../utils/themes"
import useGlobalStore from '../../stores'

const Home = () => {

    const navigation = useNavigation()
    const { tasks, categories } = useGlobalStore()
    return (
        <View>

            <Text variant='text2Xl' color="red500" >
                Home
            </Text>
            {categories.map((cat) => (
                <Box p="4" bg='blu200' key={cat.id}>
                    <Text color='blu500'>{cat.name}</Text></Box>
            ))}
            <Pressable
                onPress={() => {
                    navigation.navigate("CreateTask")
                }}
            >
                <Text variant='textXl' color='pink500' >Navigate to create task</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    navigation.navigate("CreateCategory")
                }}
            >
                <Text variant='textXl' color='pink500' >Create category</Text>
            </Pressable>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({


})