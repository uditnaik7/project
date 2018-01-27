import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import {Container, Segment, Content,Tab,Tabs, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import TabOne from './TabOne';

export default class AppHeader extends Component<{}> {
  render() {
    return (


        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
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
