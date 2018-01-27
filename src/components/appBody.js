import React, { Component } from 'react';
import {Fab,  Image, Text, StyleSheet} from 'react-native';
import {Content, Spinner, Card, Right, Button, CardItem, Thumbnail, Left, Body, Icon,} from 'native-base';

export default class AppBody extends Component<{}> {
  render() {
    return (

      <Content>

               <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={{uri: 'https://scontent-ort2-1.cdninstagram.com/t51.2885-19/s150x150/14547692_742782292541278_877802435249176576_n.jpg'}} />
                   <Body>
                     <Text>UditNaik</Text>
                     <Text note>@UdNaik</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image source={{uri: 'data:image/jpeg;base64,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'}} style={{height: 200, width: null, flex: 1}}/>
               </CardItem>
               <CardItem>
                 <Left>
                   <Button transparent>
                     <Icon active name="thumbs-up" />
                     <Text>112 Likes</Text>
                   </Button>
                 </Left>
                 <Body>
                   <Button transparent>
                     <Icon active name="chatbubbles" />
                     <Text>1k Comments</Text>
                   </Button>
                 </Body>
                 <Right>
                   <Text>1day ago</Text>
                 </Right>
               </CardItem>

              </Card>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://scontent-ort2-1.cdninstagram.com/t51.2885-19/s150x150/14547692_742782292541278_877802435249176576_n.jpg'}} />
                  <Body>
                    <Text>UditNaik</Text>
                    <Text note>@UdNaik</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzujfQcU0HdktzrTQ00l8qiYdVZuuLAgK5v8vija76LUgd9xl4rA'}} style={{height: 200, width: null, flex: 2}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>1k Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>20 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>9h ago</Text>
                </Right>
              </CardItem>
             </Card>


             <Card>
               <CardItem>
                 <Left>
                   <Thumbnail source={{uri: 'https://scontent-ort2-1.cdninstagram.com/t51.2885-19/s150x150/14547692_742782292541278_877802435249176576_n.jpg'}} />
                   <Body>
                     <Text>UditNaik</Text>
                     <Text note>@UdNaik</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image source={{uri: 'https://scontent-sea1-1.cdninstagram.com/vp/c5f48a5335ae199f72f8eba165b3fa2a/5ADC888D/t51.2885-15/s480x480/e35/11377824_897339850333925_184296753_n.jpg?ig_cache_key=MTAyMzIzNDc2Njc2ODU1MjM1Mw%3D%3D.2'}} style={{height: 180, width: null, flex: 2}}/>
               </CardItem>
               <CardItem>
                 <Left>
                   <Button transparent>
                     <Icon active name="thumbs-up" />
                     <Text>20k Likes</Text>
                   </Button>
                 </Left>
                 <Body>
                   <Button transparent>
                     <Icon active name="chatbubbles" />
                     <Text>20 Comments</Text>
                   </Button>
                 </Body>
                 <Right>
                   <Text>9h ago</Text>
                 </Right>



               </CardItem>
              </Card>



 <Spinner color='blue' />

         </Content>
    );
  }
}


module.export =  AppBody;
