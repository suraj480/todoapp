import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Text } from "../../utils/themes"

const Home = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text variant='text2Xl' color="red500" >
                Home
            </Text>
            <Pressable
                onPress={() => {
                    navigation.navigate("CreateTask")
                }}
            >
                <Text variant='textXl' color='pink500' >Navigate to create task</Text>
            </Pressable>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({


})