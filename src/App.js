import React,{Component} from 'react';
import AddUser  from "./components/AddUser";
import Users from './components/Users';

class App extends Component {
 
  constructor(props){
    super(props);
   
    this.state={
      users : [
        {
          id:1,
          name:"Lorem asda abs",
          email:"coasdsk@gmail.com"
        },
        {
          id:2,
          name:"abc Madad dadas",
          email:"asda@gmail.com"
        },
        {
          id:3,
          name:"sa Madaasdads dadasasdasd",
          email:"asddsfa@gmail.com"
        },
      ]
    }
    this.deleteUser=this.deleteUser.bind(this);
    this.AddUser=this.AddUser.bind(this);
  }
  AddUser(newUser){
    let updatedUsers =this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users:updatedUsers
    });
  }
  deleteUser(id){
    let updatedUsers=this.state.users;
    updatedUsers= updatedUsers.filter(user => user.id !== id);
    this.setState({
      users: updatedUsers
    })

  }
  render(){

    const title="User Applications";
    const IsAutorized =true;
  return (

<div className='container'> 
<h1> WELCOME TO MY WEB PAGE</h1> 
<hr/>
<h5>{title}</h5>
<AddUser AddUser={this.AddUser} />
<hr/>
<Users deleteUser={this.deleteUser} users={this.state.users}/>
{IsAutorized ? <p>Authorized</p> : <p>Not Authorized</p>}




<label htmlFor="name">Name</label>
<p className='lead'>This is sample text</p>

</div>
  );
}
}
export default App;
