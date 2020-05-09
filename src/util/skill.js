import React from 'react'
import PropTypes from 'prop-types'

const Skill = ({label, amount, alt}) => {
  const classes = alt ? "bg-danger" : ''
  return (
    <div className="row">
      <div className="col-12 labels">
        <span>{label}</span>
        <div className="progress my-3">
          <div className={`progress-bar progress-bar-striped ${classes}`} role="progressbar" style={{width: `${amount}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  )
}

Skill.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  alt: PropTypes.any
}

export default Skill;
