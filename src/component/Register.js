import * as React from 'react';
import { Alert, View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import UserInput from '../component/InputText'
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import phoneImg from '../images/phone.png';
import fullnameImg from '../images/fullname.png';
import addressImg from '../images/address.png';
import background from '../images/wallpaper.png';
import logoImg from '../images/logo.png';
import {Register} from '../networking/API'
export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fullname: '',
            phoneNumber: '',
            address: '',
        }
    }
    async DangKy(){
        let kt = await Register(this.state);
        setTimeout(() => {
            if (kt==true) {
                Alert.alert(
                    'Thông báo',
                    'Bạn đã đăng ký thành công.',
                    [
                        { text: 'Đăng nhập', onPress: () => {
                            this.props.navigation.navigate('Login');
                        } },
                    ],
                    { cancelable: false },
                );
            }
            else alert("Đăng ký thất bại.");
        }, 1*1000);
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
                top: 20,
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
                    <UserInput
                        source={fullnameImg}
                        placeholder="Họ và tên"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        onChangeText={(text) => {
                            this.setState({
                                fullname: text
                            })
                        }}
                        autoCorrect={false}
                    />
                    <UserInput
                        source={phoneImg}
                        placeholder="Số điện thoại"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        onChangeText={(text) => {
                            this.setState({
                                phoneNumber: text
                            })
                        }}
                        autoCorrect={false}
                    />
                    <UserInput
                        source={addressImg}
                        placeholder="Địa chỉ"
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        onChangeText={(text) => {
                            this.setState({
                                address: text
                            })
                        }}
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.DangKy()}
                        activeOpacity={0.7}>
                        <Text style={styles.text}>Đăng Ký</Text>
                    </TouchableOpacity>
                    <View style={styles.register}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.textReg}>Đăng nhập</Text>
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