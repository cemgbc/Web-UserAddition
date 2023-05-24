import React, { Component } from 'react'

 class AddUser extends Component {
  state ={
    name:"",
    email:""
  };
  onNameChange(e){
    "name"
this.setState({
  [e.target.name] : e.target.value
})
  }
  onEmailChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onAddSubmit(e){
    const{AddUser} =this.props;
    const{name,email} =this.state;
const newUser ={
  id : Math.random(),
  name: name,
  email : email
}
AddUser(newUser);
   
    e.preventDefault();
  }
  render() {
    const{name,email} =this.state;
    return (
      <div className="card">
        <h4 className="card-header">Add New User</h4>
        <div className="card-body">
        <form onSubmit={this.onAddSubmit.bind(this)} >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            className="form-control"
            value={name}
            onChange={this.onNameChange.bind(this)}

            />
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter e-Mail"
            className="form-control"
            value={email}
            onChange={this.onEmailChange.bind(this)}
            />
          </div>
          </div>
          <button type="submit" className="btn btn-danger btn-block">Add new User</button>  
        </form>
        </div>
        
        <h5>Form</h5>
        </div>
    )
  }
}
export default AddUser;