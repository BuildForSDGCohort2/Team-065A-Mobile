import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { inject, observer } from "mobx-react";
import {
  Container,
  Header,
  Left,
  Button,
  Title,
  Body,
  Right,
  Footer,
  FooterTab,
  Content,
  Badge,
  Icon,
} from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { BottomNavigation } from "react-native-paper";
const { width, height } = Dimensions.get("window");

@inject("store")
@observer
export default class Student extends Component {
  state = { btnTopRight: false, bgActive: "", iconActive: "" };
  goToProfilepage = () => {
    this.setState({ bgActive: "#09822E", iconActive: "#fff" }, () => {
      console.log("done.");
      // do something here
    });
  };
  goToSubjectpage = () => {
    this.setState({ bgActive: "#09822E", iconActive: "#fff" }, () => {
      // do something here
    });
  };
  goToNotificationpage = () => {
    this.setState({ bgActive: "#09822E", iconActive: "#fff" }, () => {
      // do something here
    });
  };
  render() {
    return (
      <Container>
        <Header
          iosBarStyle="light-content"
          androidStatusBarColor={"#09822E"}
          style={{ backgroundColor: "#fff" }}
        >
          {/* <Left>
            <Button transparent><Icon name="arrow-back" /></Button>
          </Left> */}
          <Body>
            <Title style={{ color: "#86bc42", fontSize: 25 }}>Student</Title>
          </Body>
          <Right>
            {this.state.btnTopRight === false ? (
              <Button
                onPress={() => this.setState({ btnTopRight: true })}
                transparent
              >
                <MaterialIcons name="menu" color="#86bc42" size={25} />
              </Button>
            ) : (
              <Button
                onPress={() => this.setState({ btnTopRight: false })}
                transparent
              >
                <MaterialCommunityIcons
                  name="menu-open"
                  color="#86bc42"
                  size={25}
                />
              </Button>
            )}
          </Right>
        </Header>

        <Content />
        <Footer>
          <FooterTab style={{ backgroundColor: "#86bc42" }}>
            <Button onPress={this.goToProfilepage} vertical>
              <Icon name="person" style={{ color: this.state.iconActive }} />
              <Text>Profile</Text>
            </Button>
            <Button style={{ backgroundColor: this.state.bgActive }} vertical>
              <Icon
                style={{ color: this.state.iconActive }}
                name="ios-clipboard"
              />
              <Text>Subjects</Text>
            </Button>

            {/* <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button> */}

            <Button badge vertical>
              <Badge>
                <Text>{2}</Text>
              </Badge>
              <Icon
                style={{ color: this.state.iconActive }}
                name="ios-notifications"
              />
              <Text>Notification</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
});

// http://discuss.nativebase.io/t/where-to-get-the-list-of-icon-names-used-in-native-base/37/18
// icons native base
