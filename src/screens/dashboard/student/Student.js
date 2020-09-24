import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { inject, observer } from "mobx-react";
import { Header, Left, Button, Icon, Title, Body, Right } from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

@inject("store")
@observer
export default class Student extends Component {
  state = { btnTopRight: false };
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
});
