import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import Loading from "../Waiting/Components/Loading";

// Styles
import styles from "./Styles/SettingsScreenStyle";
import LeaderboardActions from "../../Redux/LeaderboardRedux";

class SettingsScreen extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
    // return this.props.leaderboard.payload !== null ? (

    // ) : (
    //   <Loading />
    // );
  }
}

const mapStateToProps = state => {
  return {
    // leaderboard: state.leaderboard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getLeaderboard: () => dispatch(LeaderboardActions.leaderboardRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
