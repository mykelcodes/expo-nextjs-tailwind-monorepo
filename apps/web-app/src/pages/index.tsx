import { useLogin } from 'api-client'
import { Button as RNButton } from 'react-native'
import { Button } from 'ui'

export default function Web() {
    const { mutate } = useLogin()

    return (
        <div className="bg-teal-300 p-4">
            <h1>Web</h1>
            <Button />
            <RNButton title="React native button" onPress={() => mutate()} />
        </div>
    )
}
