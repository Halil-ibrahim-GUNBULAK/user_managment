import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form,FormGroup,Label,Input } from 'reactstrap';
export default class FormComponent extends Component {
  constructor(props){
    super(props);
    this.state={
          id:null,
          name:"",
          surname:"",
          username:""
        }

      }
      onSubmit(){
        this.props.addUser(this.state.name,this.state.surname,this.state.username);
        this.props.hide()
      }
      onUpdate(){
        this.props.editUser(this.state.id,this.state.name,this.state.surname,this.state.username);
        this.props.hide()
      }
      componentDidMount(){
        this.setState({
          id:this.props.user.id,
          name:this.props.user.name,
          surname:this.props.user.surname,
          username:this.props.user.username
        
        })
      }
      render() {
        return (
            <Modal isOpen={false} isOpen={this.props.visible} >
              
            <ModalHeader >{this.props.title}</ModalHeader>
            <ModalBody>
              <Form>
              <FormGroup>
                    <Label for="name">
                      Name
                    </Label>
                    <Input
                    onChange={(e)=>this.setState({name:e.target.value})}
                      id="name"
                      value={this.state.name}
                      name="name"
                      placeholder="enter name"
                      type="name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="surname">
                      Surname
                    </Label>
                    <Input
                       value={this.state.surname}
                      onChange={(e)=> this.setState({surname:e.target.value})}
                      id="surname"
                      name="surname"
                      placeholder="enter a surname"
                      type="surname"
                    />
                  </FormGroup>
                 
                  <FormGroup>
                    <Label for="username">
                      user name
                    </Label>
                    <Input
                       value={this.state.username}
                      onChange={(e)=>this.setState({
                        username:e.target.value
                      })}
                      id="username"
                      name="username"
                      placeholder="enter a username"
                      type="username"
                    />
                  </FormGroup>
               </Form>
 
        </ModalBody>
        <ModalFooter>
          {!this.props.user.id? <Button color="btn btn-success" onClick={()=>this.onSubmit()} >
           Add
          </Button>: <Button color="btn btn-success" onClick={()=>this.onUpdate()} >
           Update
          </Button>}
          {' '}
          <Button color="btn btn-danger" onClick={()=>this.props.hide()} >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
