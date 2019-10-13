import * as React from 'react';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: '',
            username: '',
            password: '',
            fullname: '',
            phoneNumber: '',
            address: '',
        }
        this.getUsers();
    }
    componentDidMount() {
    }
    async getUsers() {
        try {
            const username = await AsyncStorage.getItem('username');
            if (username == null) this.props.navigation.navigate('Login');
            const roles = await AsyncStorage.getItem('roles');
            const password = await AsyncStorage.getItem('password');
            const fullname = await AsyncStorage.getItem('fullname');
            const phone = await AsyncStorage.getItem('phone');
            const address = await AsyncStorage.getItem('address');
            this.setState({
                roles: roles,
                username: username,
                password: password,
                fullname: fullname,
                phoneNumber: phone,
                address: address,
            });
        } catch (error) {
            console.log("Error get users: " + error);
        }
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
                <Button
                    title="Go to Register"
                    onPress={() => alert(this.state.username)}
                />
            </View>
        );
    }
}