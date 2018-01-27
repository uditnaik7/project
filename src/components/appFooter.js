import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import {Footer,Fab,Container,Header,Tab,Tabs,TabHeading, FooterTab, Right,Button,Badge, Icon } from 'native-base';
import TabOne from './TabOne';
export default class AppFooter extends Component<{}> {





  render() {
    return (

          <Footer>
            <FooterTab>
              <Button vertical>

                <Icon name="egg" />
                <Text>Feed</Text>

              </Button>
              <Button vertical>
              <Badge><Text>22</Text></Badge>
                <Icon name="chatbubbles" />
                <Text>Message</Text>
              </Button>
              <Button vertical>
                <Icon name="settings" />
                <Text>Settings</Text>
              </Button>
            </FooterTab>

          </Footer>

    );
  }
}
module.export =  AppFooter;
