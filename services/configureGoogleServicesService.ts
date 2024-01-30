import { ConfigureParams, GoogleSignin } from "@react-native-google-signin/google-signin";

interface IExtendedConfigureParams extends ConfigureParams {
    androidClientId?: string;
}

export default function configureGoogleServices(): void {
    const configParams: IExtendedConfigureParams = {
        androidClientId: '685781511219-rm7t2g7j6mka9a1cdt3bd2oivo5njqm1.apps.googleusercontent.com',
    };
    GoogleSignin.configure(configParams);
}