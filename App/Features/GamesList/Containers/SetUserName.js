import React, { PureComponent } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./Styles/SetUserNameStyle";
import { Colors } from "../../../Themes/index";
import PlayersActions from "../../../Redux/PlayersRedux";
import { connect } from "react-redux";
import LaunchScreen from "./LaunchScreen";

class SetUserName extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>What is your username?</Text>
          <Text style={styles.headerSubtext}>(min. 5 characters)</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Username ..."
          placeholderTextColor={Colors.white}
          autoCapitalize="none"
          onChangeText={userName => this.setState({ userName })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.setUserName({ userName: this.state.userName });
          }}
          disabled={this.state.userName.length < 5}
        >
          <Text style={styles.buttonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    players: state.players.payload
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUserName: data => {
      dispatch(PlayersActions.setUserNameRequest(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetUserName);
