import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { Alert } from 'reactstrap'
import  FormComponent  from '../userManagment/FormComponent'

export default class UserListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:false,
            title:""
            
        };
        this.hide=this.hide.bind(this);
    }
    hide(){
        this.setState({visible:false})
    }
    getElementById(value){
        this.setState({
            user:value,
            visible:true,
            title:`Update User ${value.name}`
         }
        )
    }
    render() {
        return (
            <div className='container mt-5'>
                <button className='btn btn-primary' onClick={()=>this.setState(
                    {visible:true,
                     user:{}
                     ,title:"New User"})}>Add</button>
                {this.state.visible ?
                (<FormComponent 
                visible={this.state.visible} 
                 hide={this.hide}  
                 editUser={this.props.editUser}      
                 addUser={this.props.addUser}
                 title={this.state.title}
                  user={this.state.user}/>)
                  :null}
         
                {this.props.users.length>0? (<Table>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Username
                            </th>
                            <th>
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map((user)=>(
                            <tr key={user.id}>
                                <th scope='row'>{user.id}</th>
                                <th >{user.name}</th>
                                <th >{user.surname}</th>
                                <th >{user.username}</th>
                                <td>
                                <button className='btn btn-warning' onClick={()=>this.getElementById(user)}>EDİT</button>
                                &nbsp;
                                <button className='btn btn-danger' onClick={()=>this.props.deleteUser(user)}>DELETE</button>
                                </td>
                            </tr>

                    ))}
                  
                    </tbody>
                </Table>
                    ):( <Alert className='mt-5' color='warning'>There is no users</Alert> )
                    }
            </div>

        )
    }
}
