import React from 'react';
import styles from '../styles'


//get the number clicked from the buttons
//pass it to the display component
//it should be a string appending to each other
//For the calculation, once a sign is clicked it clears the display and saves it in a temp var
//

function getTextFromButton(index) {
  var getText = document.getElementsByTagName("BUTTON")[index].textContent);
}
class NumberContainer extends React.Component {

  render() {
    return (
      <div>
        <table style={styles.table, {width: '100%'}}>
          <tbody>
            <tr>
              <td><button onClick={()=>getTextFromButton(0)}>C</button></td>
              <td><button onClick={()=>getTextFromButton(1)}>+/-</button></td>
              <td><button onClick={()=>getTextFromButton(2)}>%</button></td>
              <td></td>
            </tr>
            <tr>
              <td><button onClick={()=>getTextFromButton(3)}>7</button></td>
              <td><button onClick={()=>getTextFromButton(4)}>8</button></td>
              <td><button onClick={()=>getTextFromButton(5)}>9</button></td>
              <td><button onClick={()=>getTextFromButton(6)}>*</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>getTextFromButton(7)}>4</button></td>
              <td><button onClick={()=>getTextFromButton(8)}>5</button></td>
              <td><button onClick={()=>getTextFromButton(9)}>6</button></td>
              <td><button onClick={()=>getTextFromButton(10)}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={()=>getTextFromButton(11)}>1</button></td>
              <td><button onClick={()=>getTextFromButton(12)}>2</button></td>
              <td><button onClick={()=>getTextFromButton(13)}>3</button></td>
              <td><button onClick={()=>getTextFromButton(14)}>+</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = NumberContainer;
