import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// class ShoppingList extends React.Component{
//     render(){
//         return(
//             <div>
//                 <ul>
//                     <li>1</li>
//                 </ul>
//             </div>
//         );
//     }
// }

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default ShoppingList;