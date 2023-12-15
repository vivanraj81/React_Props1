import { Component } from "react";
import "./App.css"
// import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  

  // code here
  render(){
    const i_data = this.props.imageData();
     console.log(i_data);
  return(
    <>
    <h2 className="header">Image Gallery</h2>
      <div className="container">
          {i_data.map((img)=>{
            return(
              <img src={img.img}/>
            )
          })}
      </div>
    </>
  )
  }
}
