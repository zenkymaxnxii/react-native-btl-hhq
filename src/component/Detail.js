import React from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import AddModal from "./addModal";
class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam('item', [])
        }
        this.mua = this.mua.bind(this);
    }
    mua() {
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Image style={{ flex: 1 }} source={{ uri: 'http://shipdoan.000webhostapp.com/' + this.state.item.anh }} style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").width }} />
                    <View style={{ flex: 1,marginTop:5 }}>
                        <Text style={{ marginLeft: 5,fontSize:17 }}>Tên: {this.state.item.ten}</Text>
                        <Text style={{ marginLeft: 5 }}>Mô tả: {this.state.item.moTa}</Text>
                        <Text style={{ marginLeft: 5,color:'red',fontSize:17 }}>Giá: {this.state.item.gia} VNĐ</Text>
                    </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={{ flex: 1 }}></Text>
                    <TouchableOpacity onPress={() => { this.mua() }} style={{ borderRadius: 4, backgroundColor: 'red', flex: 1 }}>
                        <Text style={{ flex: 1, textAlign: 'center', height: 40, top: 10,color:'white' }}>Đặt hàng</Text>
                    </TouchableOpacity>
                    <Text style={{ flex: 1 }}></Text>
                </View>

                <AddModal ref={'addModal'} item={this.state.item}>

                </AddModal>
            </ScrollView>
        );
    }
}
export default DetailsScreen;