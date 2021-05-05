import React from 'react';
import '../stylesheets/Area.css';
import HostList from './HostList';

const Area = ({areaData, hostData, selectHost, formatAreaName}) => {

  const activeHosts = hostData.filter(host => host.active === true)

  let areaNameCapitalized = formatAreaName(areaData.name)

  return (<div className='area' id={areaData.name}>
    <h3 className='labels'>{areaNameCapitalized}</h3>

    <HostList 
      hosts={activeHosts} 
      selectHost={selectHost}
    />
  
  </div>)

}

export default Area;
