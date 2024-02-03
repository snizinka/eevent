import React, { Dispatch, SetStateAction } from 'react';
import {
    ViewStyle,
    StyleProp,
    ViewProps,
} from 'react-native';
import styled from "styled-components/native";

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
            style={ style}
            name={name}
        />
    )
}

const RNTextInput = styled.TextInput({
    borderWidth: 1,
    borderColor: '#E4EBE4',
    borderStyle: 'solid',
    borderRadius: 10,
    height: 40,
    padding: 10,
})

export { TextInput, type ITextInputProps }
