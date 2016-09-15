import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles';
// import DisplayContainer from './components/DisplayContainer';
import NumberContainer from './components/NumberContainer';

class App extends React.Component {
  render() {
    return (
      <div style={styles.body}>
        <DisplayContainer />
        <NumberContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
