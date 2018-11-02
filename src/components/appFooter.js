import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import {Footer,View,Fab,Container,Header,Tab,Tabs,TabHeading, FooterTab, Right,Button,Badge, Icon } from 'native-base';
import TabOne from './TabOne';
export default class AppFooter extends Component<{}> {


  constructor(props) {
   super(props);
   this.state = {
     active:'true'
   };
 }



  render() {
    return (

      <Footer>
      <FooterTab>

        <Button vertical active>

          <Icon name="logo-twitter" />
          <Text>Feed</Text>

        </Button>
        <Button badge vertical >
        <Badge><Text>99+</Text></Badge>
          <Icon name="chatbubbles" />
          <Text>Message</Text>
        </Button>
        <Button vertical>

        </Button>
      </FooterTab>

          <Fab
          active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
             onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>

      </Footer>
    );
  }
}
module.export =  AppFooter;
