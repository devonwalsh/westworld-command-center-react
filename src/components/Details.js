import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import * as Images from '../services/Images';
import HostInfo from './HostInfo';


const Details = props => {

  const renderSomething = () => {
    if (Object.keys(props.selectedHost).length > 0) {
      return <HostInfo 
        areas={props.areas}
        host={props.selectedHost} 
        changeHostStatus={props.changeHostStatus}
        moveHost={props.moveHost}
      />
    }
    else {
      return <Image size='medium' src={Images.westworldLogo}/>
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
