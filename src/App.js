import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';


class App extends Component {
  state = {
    areas: [],
    hosts: [],
    selectedHost: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/areas')
    .then(res => res.json())
    .then(data => this.setState({...this.state, areas:data}))
    .catch(error => console.log(error))

    fetch('http://localhost:3000/hosts')
    .then(res => res.json())
    .then(data => this.setState({...this.state, hosts:data}))
    .catch(error => console.log(error))
  }

  selectHost = host => {
    this.setState({...this.state, selectedHost: host })
  }

  manageHost = () => {
    this.setState({...this.state, selectedHost: {...this.state.selectedHost, active: !this.state.selectedHost.active}})
  } 

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap 
          areas={this.state.areas} 
          hosts={this.state.hosts} 
          selectHost={this.selectHost}
        />
        <Headquarters 
          hosts={this.state.hosts} 
          selectHost={this.selectHost} 
          selectedHost={this.state.selectedHost} 
          manageHost={this.manageHost}
        />
      </Segment>
    )
  }
}

export default App;
