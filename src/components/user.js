import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import {Container, Segment, Content, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class user extends Component<{}> {

  constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <Container>
          <Header />
          <Content padder>
            <Button
              onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Testing ActionSheet"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )}
            >
              <Text>Actionsheet</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }







module.export =  User;
