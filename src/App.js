import React, { Component } from 'react';
import Clarifai from 'clarifai'; 
import Navigation from './Components/Navigation/Navigation'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import './App.css';

const metadata = new grpc.Metadata();
metadata.set("authorization", "5257a71457af45d783688d67923f4b4f");

class App extends Component {
  constructor () {
    super (); 
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value); 
  }

  onButtonSubmit = () => {
    console.log('click'); 

    app.models.predict(Clarifai.COLOR_MODEL,"https://samples.clarifai.com/face-det.jpg")
  }
  function (response){
    console.log(response)
  }
  function(err) {

  }
  render() {
    return( 
      <div className="App">
        <Navigation/>
         <Logo/>
         <Rank/>
        <ImageLinkForm onInputChange = {this.onInputChange}onButtonSubmit={this.onButtonSubmit}/>

        <FaceRecognition/> 

      </div>
    );
  }
}



export default App;