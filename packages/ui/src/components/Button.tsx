import { styled } from 'nativewind'
import { Text, TouchableOpacity } from 'react-native'

export const Button = () => {
    const StyledTouchable = styled(TouchableOpacity)

    return (
        <StyledTouchable className="h-12 items-center justify-center rounded-[10px] bg-brand w-[200px]">
            <Text>Boop</Text>
        </StyledTouchable>
    )
}
