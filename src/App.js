import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: ""
  };

  onChangeHandler = e => {
    this.setState({
      item: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item
    };

    const updateItem = [...this.state.items, newItem];

    this.setState({
      items: updateItem,
      item: "",
      id: uuid()
    });

    console.log(this.state);
  };

  handleDelete = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItems
    });
  };

  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filterItems,
      item: selectedItem.item,
      id: id
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo input</h3>{" "}
              <TodoInput
                item={this.state.item}
                handleChange={this.onChangeHandler}
                handleSubmit={this.onSubmitHandler}
              />
              <TodoList
                items={this.state.items}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                clearList={this.clearList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
