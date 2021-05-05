import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

const LogPanel = props => {

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {props.logs.map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      
      <Button
        fluid
        color={props.activateButton ? "red" : "green"}
        content={props.activateButton ? "ACTIVATE ALL" : "DECOMMISSION ALL"}
        onClick={props.activateAllHandler}
      />
    </Segment>
  )
}

export default LogPanel
