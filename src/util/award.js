import React from 'react'
import PropTypes from 'prop-types'

const Award = ({label, content, bg}) => {
  return (
    <div className="card my-3 my-lg-0">
      <div className="justify-content-center">
        <div className="round" style={bg}>
          <div className="roundin">
            <span style={{fontSize: 28}}>&Delta;</span>
          </div>
        </div>
      </div>
      <div className="card-body px-3 px-md-0">
        <h5 className="card-title">{label}</h5>
        <p className="card-text px-5 px-md-3">{content}</p>
      </div>
    </div>
  )
}

Award.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bg: PropTypes.object.isRequired
}

export default Award;
