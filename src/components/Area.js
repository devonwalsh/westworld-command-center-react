import React from 'react';
import '../stylesheets/Area.css';
import HostList from './HostList';

const Area = ({areaData, hostData, selectHost}) => {

  const activeHosts = hostData.filter(host => host.active === true)

  let areaName = areaData.name.split("_")
  let areaNameCapitalized = areaName.map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ")

  return (<div className='area' id={areaData.name}>
    <h3 className='labels'>{areaNameCapitalized}</h3>

    <HostList 
      hosts={activeHosts} 
      selectHost={selectHost}
    />
  
  </div>)

}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hostData.length > props.areaData.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.areaData.name}. The limit for that area is ${props.areaData.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
