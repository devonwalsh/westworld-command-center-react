import React from 'react';
import '../stylesheets/Area.css';
import HostList from './HostList';

const Area = ({areaData, hostData, selectHost}) => {

  const areaHosts = hostData.filter(host => host.area === areaData.name && host.active === true)

  let areaName = areaData.name.split("_")
  let areaNameCapitalized = areaName.map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(" ")

  return (<div className='area' id={areaData.name}>
    <h3 className='labels'>{areaNameCapitalized}</h3>

    <HostList 
      hosts={areaHosts} 
      selectHost={selectHost}
    />
  
  </div>)

}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hostData.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
