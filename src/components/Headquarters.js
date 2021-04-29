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

        {/* Something goes here.... */}
        <ColdStorage hosts={this.props.hosts} selectHost={this.props.selectHost} />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details selectedHost={this.props.selectedHost} manageHost={this.props.manageHost} />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
