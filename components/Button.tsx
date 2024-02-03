import React, { ReactNode } from 'react';
import {
    ViewStyle,
    TextStyle,
    StyleProp,
} from 'react-native';
import styled from "styled-components/native";

interface IStyle {
    containerStyles?: StyleProp<ViewStyle>;
    contentStyles?: StyleProp<TextStyle>;
}

interface IButtonProps {
    onPress: () => void;
    disabled?: boolean
    style?: IStyle
    children?: ReactNode
}

const Button: React.FC<IButtonProps> = ({ onPress, style, disabled, children }) => {
    return (
        <Pressable disabled={disabled} style={ style?.containerStyles} onPress={onPress}>
            <Text style={style?.contentStyles}>{children}</Text>
        </Pressable>
    )
}

const Pressable = styled.Pressable({
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
})

const Text = styled.Text({
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
})


export { Button, type IStyle }
