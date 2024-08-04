import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../userManagment/UserListComponent";
import Counter from "../userManagment/Counter";
import { ToastContainer, toast } from "react-toastify";
const { v4: uuidv4 } = require("uuid");

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: uuidv4(),
          name: "Halil",
          surname: "G",
          username: "halilG",
        },
        {
          id: uuidv4(),
          name: "Mehmet",
          surname: "G",
          username: "mehmetG",
        },
        {
          id: uuidv4(),
          name: "Kerem",
          surname: "GI",
          username: "KeremGI",
        },
        {
          id: uuidv4(),
          name: "Mustafa",
          surname: "G",
          username: "mustafaG",
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  deleteUser = (user_object) => {
    if (user_object) {
      const users = this.state.users.filter((user) => {
        return user.id !== user_object.id;
      });

      this.setState({ users });
      toast(`"${user_object.name}" adlı kullanıcısı silindi`);
    }
  };
  addUser = (name, surname, username) => {
    if ((name, surname, username)) {
      const users = [...this.state.users];
      users.push({
        id: uuidv4(),
        name: name,
        surname: surname,
        username: username,
      });
      this.setState({ users });
      toast(`"${name}" kullanıcısı eklendi`);
    } else {
      toast(`"${name}"Please fill all fields.`);
    }
  };
  editUser = (id, name, surname, username) => {
    if ((id, name, surname, username)) {
      const users = [...this.state.users];
      let updatedUsers = users.map((user) => {
        if (user.id === id) {
          user = {
            id: id,
            name: name,
            username: username,
            surname: surname,
          };
        }
        return user;
      });
      this.setState({ users: updatedUsers });
      toast(`"${name}" kullanıcısı güncellendi`);
    } else {
      toast(`"${name}"Please fill all fields.`);
    }
  };
  render() {
    return (
      <div>
        <Navbar className="my-2" color="dark" dark>
          <NavbarBrand href="/">React - Intro</NavbarBrand>
        </Navbar>
        <Counter />
        <UserListComponent
          users={this.state.users}
          addUser={this.addUser}
          deleteUser={this.deleteUser}
          editUser={this.editUser}
        />
        <ToastContainer />
      </div>
    );
  }
}
