import '../stylesheets/HostInfo.css';
import React, { Component } from 'react';
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react';

class HostInfo extends Component {

  state = {
    options: []
  }

  componentDidMount() {
    this.getAreaOptions()
  }
  
  getAreaOptions = () => {
    let areaObject = this.props.areas.map(area => {
      let areaName = area.name.split("_")
      let areaNameCapitalized = areaName.map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ")

      let areaData = {
        key: area.name,
        text: areaNameCapitalized,
        value: area.name
      }
      
      return(areaData)
    })

    let areaDataSorted = areaObject.sort((a,b) => {
      if (a.text > b.text) { return 1 }
      else if (a.text < b.text) { return -1 }
      else { return 0 }
    })

    this.setState({...this.state, options: areaDataSorted})
  }

  render(){
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.host.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.host.firstName} | { this.props.host.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={() => this.props.changeHostStatus(this.props.host)}
                  label={this.props.host.active ? "Active" : "Decommissioned"}
                  checked={this.props.host.active ? true : false }
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={(e, data) => 
                  this.props.moveHost(this.props.host, data.value)
                }
                value={this.props.host.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
