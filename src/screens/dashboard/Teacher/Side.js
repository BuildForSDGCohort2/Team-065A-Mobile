import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
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
  Drawer,
} from "native-base";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "react-native-vector-icons";
// import { Border_bg, Icons_bg, Header_bg, line_bg } from "../color";
const { width, height } = Dimensions.get("window");

export class Side extends Component {
  render() {
    let icon = 25;
    return (
      <Content style={{ backgroundColor: "#FFFFFF" }}>
        {/* first */}
        <View style={styles.profileView}>
          <View style={styles.userImage}>
            <Image
              source={require("../../../img/quaBg.jpg")}
              style={{ width: 95, height: 83, borderRadius: 28 }}
            />
          </View>
          <View style={styles.UserInfoView}>
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              Hello, Chukwu
            </Text>
            <Text
              style={{ color: "#fff", marginTop: 10 }}
              onPress={() => console.log("move to profile")}
            >
              View Profile
            </Text>
          </View>
        </View>
        {/* options btn */}
        <View style={{ marginLeft: 15, marginTop: 40, marginRight: 15 }}>
          {/* 1 */}
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("Add fund")}
          >
            <Entypo color={"#86bc42"} name="wallet" size={icon} />

            <Text style={styles.txtOption}>Profile</Text>
          </TouchableOpacity>
          <View style={styles.lineA}></View>
          {/* 2 */}
          {/* <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("Buy airtime")}
          >
            <Entypo color={"#86bc42"} name="phone" size={icon} />
            <Text style={styles.txtOption}></Text>
          </TouchableOpacity>

          <View style={styles.lineA}></View> */}
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("Pay TV")}
          >
            <Entypo color="#86bc42" name="tv" size={icon} />
            <Text style={styles.txtOption}>Job 4 You</Text>
          </TouchableOpacity>
          {/* 4 */}
          <View style={styles.lineA}></View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("Buy data")}
          >
            <Entypo color={"#86bc42"} name="globe" size={icon} />
            <Text style={styles.txtOption}>Orgnizations/Training</Text>
          </TouchableOpacity>
          {/* 6 */}
          <View style={styles.lineA}></View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("send money")}
          >
            <FontAwesome color={"#86bc42"} name="money" size={icon} />
            <Text style={styles.txtOption}>Notifications</Text>
          </TouchableOpacity>
          {/* 7 */}
          <View style={styles.lineA}></View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("Pay Electric")}
          >
            <Entypo color={"#86bc42"} name="power-plug" size={icon} />
            <Text style={styles.txtOption}>Library</Text>
          </TouchableOpacity>
          {/* ===========================cut fom here =================================================*/}
          {/* 10 */}
          <View style={styles.lineA}></View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("Share with friends")}
          >
            <FontAwesome color={"#86bc42"} name="share" size={icon} />
            <Text style={styles.txtOption}>Share with friends</Text>
          </TouchableOpacity>
          <View style={styles.lineA}></View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => console.log("logout")}
          >
            <Entypo color={"#86bc42"} name="log-out" size={icon} />
            <Text style={styles.txtOption}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}

export default Side;

const styles = StyleSheet.create({
  profileView: {
    height: width / 2 - 70,
    backgroundColor: "#86bc42",
    flexDirection: "row",
  },
  userImage: {
    backgroundColor: "#fff",
    height: "80%",
    width: "35%",
    borderRadius: 30,
    marginTop: 11,
    marginBottom: 11,
    marginLeft: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  UserInfoView: {
    // backgroundColor: "#fff",
    height: "80%",
    width: "50%",
    // borderRadius: 30,
    marginTop: 25,
    marginLeft: 11,
    // padding: 15,
    // justifyContent: "center",
    // alignItems: "center",
  },
  txtOption: { color: "#86bc42", marginHorizontal: 10, fontSize: 18 },
  lineA: {
    borderWidth: 1,
    borderColor: "#86bc42",
    marginTop: 10,
    marginBottom: 10,
  },
});
