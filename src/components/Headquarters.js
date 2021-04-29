import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';


class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage 
            hosts={this.props.hosts} 
            selectHost={this.props.selectHost} 
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details 
            areas={this.props.areas}
            selectedHost={this.props.selectedHost} 
            changeHostStatus={this.props.changeHostStatus} 
            moveHost={this.props.moveHost}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel 
            activateButton={this.props.activateButton} 
            activateAllHandler={this.props.activateAllHandler} 
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
