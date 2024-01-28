import React, { ReactNode } from 'react';
import {
    StyleSheet,
    Text,
    Pressable,
    ViewStyle,
    TextStyle,
    StyleProp,
} from 'react-native';

interface IStyle {
    containerStyles?: StyleProp<ViewStyle>;
    contentStyles?: StyleProp<TextStyle>;
}

interface ISignInButtonProps {
    onPress: () => void;
    disabled?: boolean
    style?: IStyle
    children?: ReactNode
}

const SignInButton: React.FC<ISignInButtonProps> = ({ onPress, style, disabled, children }) => {
    return (
        <Pressable disabled={disabled} style={[styles.container, style?.containerStyles]} onPress={onPress}>
            <Text style={[styles.content, style?.contentStyles]}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black'
    },
    content: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }
});

export { SignInButton, type IStyle }