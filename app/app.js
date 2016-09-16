import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles';
import DisplayContainer from './components/DisplayContainer';

class App extends React.Component {
  render() {
    return (
      <div style={styles.body}>
        <DisplayContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
