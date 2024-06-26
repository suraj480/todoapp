import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import Home from "../screens/home";
import CreateTask from "../screens/create-task";
import CreateCategory from "../screens/create-category";
import EditTask from "../screens/edit-task";

const Stack = createNativeStackNavigator<RootStackParamList>()
const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CreateTask" component={CreateTask} />
            <Stack.Screen name="EditTask" component={EditTask} />
            <Stack.Screen name="CreateCategory" component={CreateCategory} />
        </Stack.Navigator>
    )
}

export default Navigation;