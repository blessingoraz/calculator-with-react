import React from 'react';
import styles from '../styles'


//get the number clicked from the buttons
//pass it to the display component
//it should be a string appending to each other
//For the calculation, once a sign is clicked it clears the display and saves it in a temp var


class NumberContainer extends React.Component {

  render() {
    const {buttonClick, onClearScreen} = this.props;
    // const buttonClick  = this.props.buttonClick

    return (
      <div>
        <table style={styles.table, {width: '100%'}}>
          <tbody>
            <tr>
              <td><button onClick={()=>onClearScreen()}>C</button></td>
              <td><button onClick={()=>buttonClick(1)}>=</button></td>
              <td><button onClick={()=>buttonClick(2)}>%</button></td>
              <td><button onClick={()=>buttonClick(3)}>/</button></td>
              <td></td>
            </tr>
            <tr>
              <td><button onClick={()=>buttonClick(4)}>7</button></td>
              <td><button onClick={()=>buttonClick(5)}>8</button></td>
              <td><button onClick={()=>buttonClick(6)}>9</button></td>
              <td><button onClick={()=>buttonClick(7)}>*</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>buttonClick(8)}>4</button></td>
              <td><button onClick={()=>buttonClick(9)}>5</button></td>
              <td><button onClick={()=>buttonClick(10)}>6</button></td>
              <td><button onClick={()=>buttonClick(11)}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>buttonClick(12)}>1</button></td>
              <td><button onClick={()=>buttonClick(13)}>2</button></td>
              <td><button onClick={()=>buttonClick(14)}>3</button></td>
              <td><button onClick={()=>buttonClick(15)}>+</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = NumberContainer;
