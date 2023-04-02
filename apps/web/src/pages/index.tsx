import { Button as RNButton } from 'react-native'
import { Button } from 'ui'

export default function Web() {
    return (
        <div className="bg-teal-300 p-4">
            <h1>Web</h1>
            <Button />
            <RNButton title="React native button" onPress={() => alert('react native, yaah')} />
        </div>
    )
}
