import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../HomeScreen'

const Stack = createNativeStackNavigator()

export function AppRoute() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}
