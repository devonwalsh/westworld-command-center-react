import React from 'react'
import { Card } from 'semantic-ui-react';
import Host from './Host';

const HostList = props => {

  return(
    <Card.Group itemsPerRow={6}>
      {props.hosts.map((host, idx) => <Host key={idx} host={host} selectHost={props.selectHost} />)}
    </Card.Group>
  )
}

export default HostList
