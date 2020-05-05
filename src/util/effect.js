import React from 'react'
import PropTypes from 'prop-types'

const started = {
  root: {
    backgroundColor: '#EFF3F9'
  },
  div: {
    backgroundColor: '#fff'
  }
}
const ended = {
  root: {
    backgroundColor: '#fff'
  },
  div: {
    backgroundColor: '#EFF3F9'
  }
}
const Effect = ({start, curve}) => {
  const toClass = curve ? "flow-curve" : "flow-diag";
  return (
    <React.Fragment>
      {
        start ?
        (
          <div className={toClass} style={started.root}>)
            <div style={started.div}></div>
          </div>
        )
         :
        (
          <div className={toClass} style={ended.root}>
            <div style={ended.div}></div>
          </div>
        )
      }
    </React.Fragment>
  )
}

Effect.propTypes = {
  start: PropTypes.any
}

export default Effect
