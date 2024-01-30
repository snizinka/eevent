import { StyleSheet, ViewStyle } from "react-native"
import { IStyle } from "../components/Button"
import { Colors } from "react-native/Libraries/NewAppScreen"

export const mainContainerStyles = (isDarkMode: boolean): ViewStyle => {
    return {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
    }
}

export const logoStyles = StyleSheet.create({
    wrapper: {
        marginTop: 100
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '700',
        color: 'black'
    },
    error: {
        color: 'red'
    }
})

export const singInStyles = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: 'column', rowGap: 10, marginBottom: 10 }
})

export const googleSingInStyles: IStyle = {
    containerStyles: {
        borderColor: 'transparent',
        backgroundColor: '#5583EC',
    },
    contentStyles: {
        color: 'white',
        fontSize: 16
    }
}

export const usernameOrEmailInputStyles: ViewStyle = {
    borderWidth: 1,
    borderColor: '#E4EBE4',
    borderStyle: 'solid',
    borderRadius: 10,
    height: 40
}

export const continueWithEmailStyles: IStyle = {
    containerStyles: {
        borderColor: 'transparent',
        backgroundColor: '#4EA52F',
    },
    contentStyles: {
        color: 'white',
        fontSize: 15
    }
}