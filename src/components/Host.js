import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = props => {

  const toggleSelected = e => {
    if (document.querySelector(".selected")) {
      document.querySelector(".selected").classList.remove("selected")
    }
    e.target.parentNode.classList.add("selected")
  }

  const clickHandler = e => {
    props.selectHost(props.host)
    toggleSelected(e)
  }

  return(
    <Card
      className="host"
      image={props.host.imageUrl}
      onClick={e => clickHandler(e)}
      raised
    />
  )
}

export default Host
