import PropTypes from "prop-types";
import React from "react";
import { AppState } from "react-native";

const noop = () => null;

class AppStateListener extends React.PureComponent {
  static propTypes = {
    onActive: PropTypes.func.isRequired,
    onBackground: PropTypes.func.isRequired,
    onInactive: PropTypes.func.isRequired
  };

  static defaultProps = {
    onActive: noop,
    onBackground: noop,
    onInactive: noop
  };

  componentDidMount() {
    const { onActive } = this.props;

    onActive();
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  componentWillUnmount() {
    const { onBackground } = this.props;

    onBackground();
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange = newState => {
    const { onActive, onBackground, onInactive } = this.props;
    const callbacks = {
      active: onActive,
      background: onBackground,
      inactive: onInactive
    };
    const callback = callbacks[newState] || noop;

    callback();
  };

  render() {
    return null;
  }
}

export default AppStateListener;
