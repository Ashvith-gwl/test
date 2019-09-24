import React,{Component} from 'react';
import './App.css';
import Flexi from './component/Flexi'

class App extends Component {

  state ={
    items:[
      {
        name : "person_name",
        label : "Person name",
        type:"TextField",
      },
      {
        name : "person_names",
        label : "email",
        type:"TextField",
      },
      {
        name : "sssss",
        label : "email",
        type:"TextField",
      },
      {
        name : "contry",
        label : "Person states",
        type:"Dropdown",
        values:[
          "India",
          "US"
        ]
      },
      {
        name : "states",
        label : "Person states",
        type:"Dropdown",
        values:[
          "Maharastra",
          "Kerala",
          "Tamil Nadu"
        ]
      },
      {
        name : "stcityates",
        label : "city",
        type:"Dropdown",
        values:[
          "asd",
          "asd",
          "asdasdas"
        ]
      }
    ]
  };


  onFlexiSubmit = (data) => {
    console.log(data);
  }


  render(){
    
    return (
      <div className="App">

       <Flexi config={this.state.items} onFlexiSubmit={this.onFlexiSubmit} />
  
      </div>
    );
  }
 
}

export default App;
