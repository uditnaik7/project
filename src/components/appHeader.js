import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import {Container,Item,Input, Segment,Thumbnail, Content,Tab,Tabs, Header, Left, Body, Right, Button, Icon, Title,Drawer} from 'native-base';
import TabOne from './TabOne';
import User from './user';
export default class AppHeader extends Component<{}> {
  render() {
    closeDrawer = (props) => {
      this.drawer._root.close()
    };
    openDrawer = (props) => {
     this.drawer._root.open()
   };
    return (


        <Header >
          <Left>
            <Button transparent>

       <Thumbnail small source={{uri: 'https://scontent-ort2-1.cdninstagram.com/t51.2885-19/s150x150/14547692_742782292541278_877802435249176576_n.jpg'}} />
       </Button>
          </Left>
          <Body>
            <Text>Twitter-app</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>


</Header>
    );
  }
}
module.export =  AppHeader;
