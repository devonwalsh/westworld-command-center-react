import React from 'react';
import '../stylesheets/Area.css';
import HostList from './HostList';

const Area = ({areaData, hostData}) => {

  const areaHosts = hostData.filter(host => host.area === areaData.name)

  return (<div className='area' id={areaData.name}>
    <h3 className='labels'>{areaData.name}</h3>

    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    <HostList hosts={areaHosts} />
  
  </div>)

}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
