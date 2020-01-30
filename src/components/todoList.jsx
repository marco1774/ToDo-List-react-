import React, { Component } from "react";
import Todo from "./todo";

class TodoList extends Component {
  render() {
    console.log(this.props.coseDaFareArray);
    let lista = this.props.coseDaFareArray.map(elemento => (
      <Todo
        testo={elemento.testo}
        Id={elemento.Id}
        checked={elemento.checked}
        cancellaDallaLista={this.props.cancellaDallaLista}
        fatto={this.props.fatto}
      />
    ));

    return (
      <div className="container">
        <ul className="list-group">{lista}</ul>
      </div>
    );
  }
}

export default TodoList;
