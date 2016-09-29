var React = require('react');
var ReactDOM = require('react-dom');

var TableRow = React.createClass({

});

var TableColumn = React.createClass({

});

var NumberContainer = React.createClass({
  render: function() {
     var props = this.props;

    return (
      <div>
        <table style={styles.table, {width: '100%'}}>
        <tbody>
          <tr>
          <td><button onClick={()=>props.onClearScreen()}>C</button></td>
          <td><button onClick={()=>props.buttonClick(1)}>=</button></td>
          <td><button onClick={()=>props.buttonClick(2)}>%</button></td>
          <td><button onClick={()=>props.buttonClick(3)}>/</button></td>
          <td></td>.
          </tr>
          <tr>
          <td><button onClick={()=>props.buttonClick(4)}>7</button></td>
          <td><button onClick={()=>props.buttonClick(5)}>8</button></td>
          <td><button onClick={()=>props.buttonClick(6)}>9</button></td>
          <td><button onClick={()=>props.buttonClick(7)}>*</button></td>
          </tr>
          <tr>
          <td><button onClick={()=>props.buttonClick(8)}>4</button></td>
          <td><button onClick={()=>props.buttonClick(9)}>5</button></td>
          <td><button onClick={()=>props.buttonClick(10)}>6</button></td>
          <td><button onClick={()=>props.buttonClick(11)}>-</button></td>
          </tr>
          <tr>
          <td><button onClick={()=>props.buttonClick(12)}>1</button></td>
          <td><button onClick={()=>props.buttonClick(13)}>2</button></td>
          <td><button onClick={()=>props.buttonClick(14)}>3</button></td>
          <td><button onClick={()=>props.buttonClick(15)}>+</button></td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  });

  var DisplayContainer =  React.createClass({
    getTextFromButton: function(index) {
      var value = document.getElementsByTagName("BUTTON")[index].textContent;
      var matches = value.match(/\d+/g);

      var tempStore = "";
      if(matches !== null) {
        tempStore = document.getElementById('screen').innerHTML+= value;
      }
      if(value.match(/[+-/*=]/i)) {
        switch(value) {
          case '+' :
          console.log("I am +");
          break;
          case '-' :
          console.log("Me -");
          break;
          default :
          this.handleClearScreen();
        }
      }
      // else {
      //   this.handleClearScreen();
      // }
    }

    handleClearScreen() {
      document.getElementById('screen').innerHTML = "";
    }
    render: function() {
      return (
        <div>
          <div style={styles.displayDiv}>
            <p id="screen"></p>
          </div>
          <NumberContainer buttonClick={this.getTextFromButton} onClearScreen={this.handleClearScreen}/>
        </div>
      )
    }
  });

  var App =  React.createClass({
    render: function() {
      return (
        <div className='calculator-body'>
        <DisplayContainer className='calculator-display'/>
        </div>
      );
    }
  });

  ReactDOM.render(<App />, document.getElementById("app"));
