import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { KeyboardAvoidingView } from 'ui'

import { AppRoute } from './routes'

export default function App() {
    return (
        <NavigationContainer>
            <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <AppRoute />
            </KeyboardAvoidingView>
        </NavigationContainer>
    )
}
