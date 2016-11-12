import React, { Component } from "react";
import {
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
} from "react-native";

const window = Dimensions.get('window');

interface IProps {
    onItemSelected: any;
    selectedItem: string;
    isOpen: string;
}


export default class SideNavContainer extends Component<IProps, null> {
    uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

    constructor() {
        super();

        console.log(this.props, 'this.props')
        
    }

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>

                <View style={styles.avatarContainer}>
                    <Text style={styles.name}>Your name</Text>
                </View>

                <Text>
                    Selected Item: {this.props.selectedItem}- {this.props.isOpen}
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('About')}
                    style={styles.item}>
                    About
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('Contacts')}
                    style={styles.item}>
                    Contacts
                </Text>

            </ScrollView>
        );
    } // render
}



const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'lightgrey',
        padding: 20,
    } as React.ViewStyle,
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    } as React.ViewStyle,
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    } as React.ViewStyle,
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    } as React.ViewStyle,
    item: {
        fontSize: 14,
        fontWeight: '300',
        paddingTop: 5,
    } as React.ViewStyle,
});