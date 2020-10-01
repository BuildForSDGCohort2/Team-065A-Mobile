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
  Root,
  Drawer,
} from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { BottomNavigation } from "react-native-paper";
import Sidebar from "./Side";
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

  closeDrawer = () => {
    this.drawer._root.close();
    this.setState({ btnTopRight: false });
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  onOpenD = () => {
    this.setState({ btnTopRight: true });
    this.openDrawer();
  };
  onClose = () => {
    this.setState({ btnTopRight: false });
    this.closeDrawer();
  };
  render() {
    return (
      <Root>
        <Container>
          <Drawer
            ref={(ref) => {
              this.drawer = ref;
            }}
            content={<Sidebar navigation={this.props.navigation} />}
            onClose={() => this.closeDrawer()}
          >
            <Header
              iosBarStyle="light-content"
              androidStatusBarColor={"#09822E"}
              style={{ backgroundColor: "#fff" }}
            >
              {/* <Left>
            <Button transparent><Icon name="arrow-back" /></Button>
          </Left> */}
              <Body>
                <Title style={{ color: "#86bc42", fontSize: 25 }}>
                  Student
                </Title>
              </Body>
              <Right>
                {this.state.btnTopRight === false ? (
                  <Button onPress={this.onOpenD} transparent>
                    <MaterialIcons name="menu" color="#86bc42" size={25} />
                  </Button>
                ) : (
                  <Button onPress={this.onClose} transparent>
                    <MaterialCommunityIcons
                      name="menu-open"
                      color="#86bc42"
                      size={25}
                    />
                  </Button>
                )}
              </Right>
            </Header>

            {/* <Content /> */}
          </Drawer>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
});

// http://discuss.nativebase.io/t/where-to-get-the-list-of-icon-names-used-in-native-base/37/18
// icons native base
