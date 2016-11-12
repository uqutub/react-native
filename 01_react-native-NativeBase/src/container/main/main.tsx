import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
const SideMenu = require('react-native-side-menu');
import SideNavContainer from '../sidenav/sidenav';
console.log('SideNavContainer: ', SideNavContainer);
interface IState {
    isOpen: boolean;
    selectedItem: string;
}

export default class MainContainer extends Component<null, IState> {

    constructor() {
        super();

        this.state = {
            isOpen: false,
            selectedItem: 'About'
        }
    }

    menu = <SideNavContainer onItemSelected={this.onMenuItemSelected} selectedItem="{this.state.selectedItem}" isOpen="{this.state.isOpen}">
    </SideNavContainer>

    onMenuItemSelected(item: string) {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }

    toggle() {
        console.log('toggle')
        this.setState(Object.assign({}, this.state, { isOpen: !this.state.isOpen }));
    }

    updateMenuState(isOpen: string) {
        this.setState(Object.assign({}, this.state, { isOpen }));
    }

    render() {
        return (
            <SideMenu menu={this.menu} isOpen={this.state.isOpen} onChange={(isOpen: any) => this.updateMenuState(isOpen)}>
                <Container style={styles.container}>
                    <Header>
                        <Button transparent onPress={() => this.toggle()}>
                            <Icon name='ios-menu' />
                        </Button>
                        <Title>Header</Title>
                    </Header>
                    <Content>
                            <Text> Hello World with Side Nav </Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button transparent>
                                <Icon name='ios-call' />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </SideMenu>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as React.ViewStyle
});