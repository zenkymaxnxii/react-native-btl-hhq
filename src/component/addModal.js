import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox'
class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            address: '',
            sl: 0,
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    async DatHang(){
        const url = 'http://shipdoan.000webhostapp.com/app/dathang.php?name=' + this.state.name + '&sdt=' + this.state.phoneNumber + '&diaChi=' + this.state.address + '&soluong=' + this.state.sl+'&idHang='+this.props.item.id;
        let res = await fetch(url);
        let resJson = await res.json();
        setTimeout(() => {
            if (resJson.status) {
                this.refs.myModal.close();
                alert("Đặt hàng thành công.");
            } else alert("Đặt hàng thất bại.");
        }, 1000);
    }
    render() {
        return (
            <Modal style={{ justifyContent: 'center', marginTop:50, borderRadius: 4, width: Dimensions.get('window').width - 80, height: 350 }}
                ref={"myModal"}
                position='center'
                backdrop={true}
                onClosed={() => {
                    //alert("Modal close");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 30,
                }}>Thông tin mua hàng.</Text>
                <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 10, borderBottomWidth: 1 }} onChangeText={(text) => {
                    this.setState({
                        name:text,
                    });
                }} placeholder="Họ tên" />
                <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 10, borderBottomWidth: 1 }} onChangeText={(text) => {
                    this.setState({
                        phoneNumber: text,
                    });
                }} placeholder="Số điện thoại" />
                <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 10, borderBottomWidth: 1 }} onChangeText={(text) => {
                    this.setState({
                        address: text,
                    });
                }} placeholder="Địa chỉ" />
                <TextInput style={{ height: 40, borderBottomColor: 'gray', marginLeft: 30, marginRight: 30, marginTop: 10, marginBottom: 10, borderBottomWidth: 1 }} onChangeText={(text) => {
                    this.setState({
                        sl: text,
                    });
                }} placeholder="Số lượng" />
                <View style={{ height: 40,flexDirection: 'row',marginBottom:20 }}>
                    <Text style={{ flex: 1 }}></Text>
                    <TouchableOpacity onPress={() => { this.DatHang() }} style={{ borderRadius: 4, backgroundColor: 'red', flex: 1 }}>
                        <Text style={{ flex: 1, textAlign: 'center', height: 40, top: 10,color:'white' }}>Đặt hàng</Text>
                    </TouchableOpacity>
                    <Text style={{ flex: 1 }}></Text>
                </View>
            </Modal>
        );
    }
}
export default AddModal;