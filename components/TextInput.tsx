import React, { Dispatch, SetStateAction } from 'react';
import {
    TextInput as RNTextInput,
    ViewStyle,
    StyleProp,
    ViewProps,
} from 'react-native';

interface ITextInputProps extends ViewProps {
    onChangeText?: Dispatch<SetStateAction<string>>,
    value?: string,
    placeholder?: string,
    style?: StyleProp<ViewStyle>
    name?: string
}

const TextInput: React.FC<ITextInputProps> = ({ onChangeText, value, placeholder, style, name }) => {
    return (
        <RNTextInput
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            style={[styles, style]}
            name={name}
        />
    )
}

const styles: ViewStyle = {
    borderWidth: 1,
    borderColor: '#E4EBE4',
    borderStyle: 'solid',
    borderRadius: 10,
    height: 40
}

export { TextInput, type ITextInputProps }