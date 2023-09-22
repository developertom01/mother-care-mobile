import * as React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import { FontSize, Color, Border, FontFamily, Padding } from "./styles";
import icons from "../../../constants/Icons";
import images from "../../../constants/Images";
import { Link } from "expo-router";

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        // Implement your login logic here using email and password
        console.log('Login button pressed!');
    };

    return (
        <View style={styles.login}>
            <View style={[styles.logInParent, styles.parentPosition]}>
                <Text style={styles.logIn}>Create Account</Text>
                <Text style={[styles.connectWithExpert, styles.eMailTypo]}>
                    Join our community of expecting moms
                </Text>
            </View>
            <View style={[styles.frameParent, styles.parentPosition]}>
                <View>
                    <View>
                        <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
                        <View style={[styles.frameWrapperBorder, styles.inputWrapper]}>
                            <Image
                                style={styles.vuesaxlinearsmsIcon}
                                resizeMode="cover"
                                source={icons.sms}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your email"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                    </View>
                    <View style={styles.passwordParent}>
                        <Text style={[styles.eMail, styles.eMailTypo]}>Password</Text>
                        <View style={[styles.frameWrapperBorder, styles.inputWrapper]}>
                            <Image
                                style={styles.vuesaxlinearsmsIcon}
                                resizeMode="cover"
                                source={icons.unlock}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your password"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={[styles.logInWrapper, styles.logInWrapperFlexBox]} onPress={handleLogin}>
                    <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.logInWithParent, styles.logInWithParentPosition]}>
                <Text style={[styles.eMail, styles.eMailTypo]}>Log in with</Text>
                <View style={styles.logosgoogleIconParent}>
                    <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={icons.google}
                    />
                    <Image
                        style={[styles.logosfacebookIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={icons.facebook}
                    />
                    <Image
                        style={[styles.logosfacebookIcon, styles.iconLayout]}
                        resizeMode="cover"
                        source={icons.apple}
                    />
                </View>
            </View>
            <Text style={[styles.dontHaveAnContainer, styles.logInWithParentPosition]}>
                <Text style={styles.dontHaveAnClr}>{`Already have an account? `}</Text>
                    <Link href={"/auth/login/"} style={[styles.signUp, styles.logIn1Typo]}>Log in</Link>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    parentPosition: {
        left: 20,
        position: "absolute",
    },
    eMailTypo: {
        fontSize: FontSize.size_base,
        textAlign: "left",
    },
    frameWrapperBorder: {
        marginTop: 10,
        width: 353,
        borderWidth: 1.5,
        borderColor: Color.colorWhitesmoke,
        borderStyle: "solid",
        borderRadius: Border.br_7xs,
        alignItems: "center",
        flexDirection: "row",
    },
    emeraldquashie14gmailcomTypo: {
        fontSize: FontSize.size_sm,
        textAlign: "left",
    },
    vuesaxlineareyeLayout: {
        minHeight: 18,
        flexDirection: "row",
    },
    dontHaveAnClr: {
        color: Color.colorGray_100,
        fontFamily: FontFamily.poppinsRegular,
    },
    logInWrapperFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    logIn1Typo: {
        fontFamily: FontFamily.poppinsSemiBold,
        fontWeight: "600",
    },
    logInWithParentPosition: {
        left: "50%",
        position: "absolute",
    },
    iconLayout: {
        height: 39,
        width: 39,
        overflow: "hidden",
    },
    logIn: {
        fontSize: 24,
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
    connectWithExpert: {
        color: "#757575",
        width: 258,
        marginTop: 13,
        fontFamily: FontFamily.poppinsRegular,
    },
    logInParent: {
        top: 89,
    },
    eMail: {
        color: Color.colorBlack,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_base,
    },
    vuesaxlinearsmsIcon: {
        height: 18,
        width: 18,
    },
    vuesaxlinearsms: {
        minWidth: 18,
        width: 18,
        flexDirection: "row",
    },
    emeraldquashie14gmailcom: {
        color: "#adadad",
        marginLeft: 15,
        fontFamily: FontFamily.poppinsRegular,
    },
    vuesaxlinearsmsParent: {
        paddingLeft: Padding.p_4xs,
        paddingTop: Padding.p_smi,
        paddingRight: 83,
        paddingBottom: Padding.p_smi,
    },
    vuesaxlinearunlock: {
        width: 24,
        height: 24,
        minWidth: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    emeraldquashie14gmailcom1: {
        opacity: 0,
        marginLeft: 33,
        fontSize: FontSize.size_sm,
        textAlign: "left",
    },
    vuesaxlineareye: {
        marginLeft: 33,
        minWidth: 18,
    },
    vuesaxlinearunlockParent: {
        transform: [
            {
                rotate: "0.46deg",
            },
        ],
        alignItems: "center",
        flexDirection: "row",
    },
    frameWrapper: {
        paddingHorizontal: Padding.p_4xs,
        paddingVertical: Padding.p_smi,
    },
    passwordParent: {
        marginTop: 22,
    },
    logIn1: {
        color: Color.colorWhite,
        fontSize: FontSize.size_base,
        textAlign: "left",
    },
    logInWrapper: {
        borderRadius: 32,
        backgroundColor: Color.colorSeagreen,
        paddingHorizontal: 156,
        paddingVertical: 20,
        marginTop: 35,
    },
    frameParent: {
        top: 220,
    },
    logosfacebookIcon: {
        marginLeft: 44,
    },
    logosgoogleIconParent: {
        marginTop: 26,
        flexDirection: "row",
    },
    logInWithParent: {
        marginLeft: -103,
        top: 540,
        alignItems: "center",
    },
    signUp: {
        color: Color.colorSeagreen,
    },
    dontHaveAnContainer: {
        marginLeft: -115,
        top: 795,
        fontSize: FontSize.size_sm,
        textAlign: "left",
    },
    login: {
        backgroundColor: Color.colorWhite,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 5,
        paddingLeft: 5,
    },
    input: {
        flex: 1,
        marginLeft: 15,
        fontSize: FontSize.size_base,
        color: Color.colorBlack,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
    },
});

export default Register;
