import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert, View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import UserInput from '../component/InputText'
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import background from '../images/wallpaper.png';
import logoImg from '../images/logo.png';
import { Login } from '../networking/API'

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    async DangNhap() {
        let params = { username: this.state.username, password: this.state.password };
        let json = await Login(params);
        setTimeout(() => {
            if (json.status == true) {
                Alert.alert(
                    'Thông báo',
                    'Đăng nhập thành công.',
                    [
                        {
                            text: 'OK', onPress: () => {
                                this.saveUsers(json.data);
                                this.props.navigation.navigate('Home');
                            }
                        },
                    ],
                    { cancelable: false },
                );
            }
            else alert("Đăng nhập thất bại.");
        }, 1 * 1000);
    }
    async saveUsers(params){
        {
            try {
                await AsyncStorage.setItem('roles', params.roles);
                await AsyncStorage.setItem('username', params.username);
                await AsyncStorage.setItem('password', params.password);
                await AsyncStorage.setItem('fullname', params.fullname);
                await AsyncStorage.setItem('phone', params.phone);
                await AsyncStorage.setItem('address', params.address);
            } catch (error) {
                console.log("Error saving data "+error);
            }
        };
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            },
            image: {
                marginTop: 20,
                width: 170,
                height: 100,
                flex: 1,
            },
            logo: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                backgroundColor: 'transparent',
                flex: 1,
            },
            text: {
                color: 'white',
                fontWeight: 'bold',
                fontSize: 17,
                backgroundColor: 'transparent',
            },
            button: {
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F035E0',
                height: 40,
                borderRadius: 20,
                width: Dimensions.get('window').width / 2,
                zIndex: 100,
            },
            register: {
                flex: 1,
                top: 40,
                width: Dimensions.get('window').width,
                flexDirection: 'row',
                justifyContent: 'space-around',
            },
            textReg: {
                color: 'white',
                backgroundColor: 'transparent',
            }
        });
        return (
            <View style={styles.container}>
                <ImageBackground source={background} style={styles.container}>
                    <Image source={logoImg} style={styles.image} />
                    <Text style={styles.logo}>SHIP ĐỒ ĂN</Text>
                    <UserInput
                        source={usernameImg}
                        placeholder="Tên tài khoản"
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        onChangeText={(text) => {
                            this.setState({
                                username: text
                            })
                        }}
                        autoCorrect={false}
                    />
                    <UserInput
                        source={passwordImg}
                        secureTextEntry={this.state.showPass}
                        placeholder="Mật khẩu"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                        secureTextEntry={true}
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.DangNhap()}
                        activeOpacity={0.7}>
                        <Text style={styles.text}>Đăng Nhập</Text>
                    </TouchableOpacity>
                    <View style={styles.register}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.textReg}>Đăng ký tài khoản</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textReg}>Quyên mật khẩu?</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}