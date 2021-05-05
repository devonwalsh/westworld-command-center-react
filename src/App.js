import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';
import {Log} from './services/Log';


class App extends Component {
  state = {
    areas: [],
    hosts: [],
    selectedHost: {},
    activateButton: true,
    logs: []
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

  changeHostStatus = selectedHost => {
    selectedHost.active = !selectedHost.active
    let action = selectedHost.active ? "Activated" : "Decommissioned"

    let updatedHosts = this.state.hosts.map(host => {
      if (host.id === selectedHost.id) {
        return selectedHost
      }
      else return host
    })

    this.setState({
      ...this.state, 
      hosts: updatedHosts,
      logs: [Log.notify(`${action} ${selectedHost.firstName}`), ...this.state.logs]
    })
  } 

  formatAreaName = area => {
    let areaName = area.split("_")
    let areaNameCapitalized = areaName.map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ")
    return areaNameCapitalized
  }

  moveHost = (selectedHost, newArea) => {
    let areaHostCount = this.state.hosts.filter(host => host.area === newArea).length
    let areaLimit = this.state.areas.find(area => area.name === newArea).limit

    let areaNameCapitalized = this.formatAreaName(newArea)
    
    if (areaHostCount === areaLimit) {
      this.setState({
        ...this.state, 
        logs: [Log.error(`Too many hosts. Cannot add ${selectedHost.firstName} to ${areaNameCapitalized}`), ...this.state.logs]
      })
    }
    else {
      selectedHost.area = newArea

      let updatedHosts = this.state.hosts.map(host => {
        if (host.id === selectedHost.id) {
          return selectedHost
        }
        else return host
      })

      this.setState({
        ...this.state, 
        hosts: updatedHosts, 
        logs: [Log.notify(`${selectedHost.firstName} set in area ${areaNameCapitalized}`), ...this.state.logs]
      })
    }
  }

  activateAllHandler = () => {
    let updatedHosts;
    let action = this.state.activateButton ? Log.warn("Activating all hosts!") : Log.notify("Decommissiong all hosts.")

    if (this.state.activateButton === true) {
      updatedHosts = this.state.hosts.map(host => {
        host.active = true
        return host
      })
    }
    else {
      updatedHosts = this.state.hosts.map(host => {
        host.active = false
        return host
      })
    }

    this.setState({
      ...this.state, 
      hosts: updatedHosts, 
      activateButton: !this.state.activateButton,
      logs: [action, ...this.state.logs]
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap 
          areas={this.state.areas} 
          hosts={this.state.hosts} 
          selectHost={this.selectHost}
          selectedHost={this.state.selectedHost}
          formatAreaName={this.formatAreaName}
        />
        <Headquarters 
          areas={this.state.areas}
          hosts={this.state.hosts} 
          selectHost={this.selectHost} 
          selectedHost={this.state.selectedHost} 
          changeHostStatus={this.changeHostStatus}
          moveHost={this.moveHost}
          logs={this.state.logs}
          activateButton={this.state.activateButton}
          activateAllHandler={this.activateAllHandler}
        />
      </Segment>
    )
  }
}

export default App;
