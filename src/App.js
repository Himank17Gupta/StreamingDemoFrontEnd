import React from 'react';
import logo from './logo.svg';
import Album from './components/album';
import SignIn from './components/signin';
import Player from './components/player';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';


export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  return(
  <BrowserRouter>
  <Container  maxWidth="xl"> 
  <Route path="/" exact component={SignIn} />
  <Route path="/DashBoard" component={Album} />
  <Route path="/playVideo" component={Player} />
  </Container>
  </BrowserRouter>
  )
}
}