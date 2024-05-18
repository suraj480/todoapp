import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import Home from "../screens/home";
import CreateTask from "../screens/create-task";

const Stack = createNativeStackNavigator<RootStackParamList>()
const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CreateTask" component={CreateTask} />
        </Stack.Navigator>
    )
}

export default Navigation;