import * as React from 'react';
import { Button, View, Text,ScrollView,Dimensions,FlatList,TouchableOpacity,Image } from 'react-native';

class FlatListItem extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, marginBottom: 2,borderColor: '#bce3e0', borderWidth: 1, borderRadius: 4,}}>
                <Image source={{ uri: 'http://192.168.64.2/' + this.props.item.anh }} style={{ width: Dimensions.get("window").width / 2, height: Dimensions.get("window").width / 2 }} />
                <Text style={{ flex: 1, backgroundColor:'#ffe208', color: 'red',fontWeight:'bold', textAlign: 'center', padding: 2 }}>{this.props.item.ten}</Text>
            </View>
        );
    }
}

class MonAnScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        this.getData(this.props.id);
    }
    async getData(params) {
        const url = 'http://shipdoan.000webhostapp.com/app/get.php?id=' + params;
        let res = await fetch(url);
        let resJson = await res.json();
        this.setState({
            data: resJson.data,
        })
    }
    render() {
        return (
            <FlatList numColumns={2} style={{ flex: 1, flexDirection: 'column' }} data={this.state.data} renderItem={({ item, index }) => {
                return (<TouchableOpacity onPress={() => this.props.pro.navigation.navigate("Detail", {
                    item: item,
                })}><FlatListItem item={item} index={index} /></TouchableOpacity>)
            }} />
        );
    }
}

export default class HomeScreen extends React.Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
            pagingEnabled={true}
            horizontal={true}
            >
                <View style={{
                    backgroundColor: 'white',
                    flex:1,
                    width:screenWidth,
                    justifyContent:'center',
                    alignContent: 'center'
                }}>
                    <Text style={{padding:10,textAlign:'center',fontSize:20,backgroundColor:'tomato',borderBottomRightRadius:4,borderBottomLeftRadius:4,marginBottom:3}}>Đồ ăn</Text>
                    <MonAnScreen id={1} pro={this.props}/>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    flex: 1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <Text style={{ padding: 10, textAlign: 'center', fontSize: 20, backgroundColor: 'tomato', borderBottomRightRadius: 4, borderBottomLeftRadius: 4, marginBottom: 3 }}>Đồ uống</Text>
                    <MonAnScreen id={2} pro={this.props}/>
                </View>
            </ScrollView>
        );
    }
}