import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

const Home = () => {

    const navigation = useNavigation()

    return (
        <View>
            <Text>
                Home
            </Text>
            <Pressable
                onPress={() => {
                    navigation.navigate("CreateTask")
                }}
            >
                <Text>Navigate to create task</Text>
            </Pressable>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({})