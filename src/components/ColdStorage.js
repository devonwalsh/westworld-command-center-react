import React from 'react';
import { Segment } from 'semantic-ui-react';
import HostList from './HostList';

const ColdStorage = props => {

  const coldStorageHosts = props.hosts.filter(host => host.active === false)

  return(<Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      <HostList hosts={coldStorageHosts} selectHost={props.selectHost} />
    </Segment>
  </Segment.Group>)
}

export default ColdStorage
