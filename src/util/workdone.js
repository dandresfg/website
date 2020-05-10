import React from 'react'
import PropTypes from 'prop-types'

const Workdone = ({name, url, tags, alt, to}) => {
  return (
      <a href={to} target="blank" className="card">

        <img src={url} className={alt === true ? 'card-img-top img2':'card-img-top'} alt="..."/>

        <div className="box d-none d-md-block">
          <div>
            <h5>{name.toUpperCase()}</h5>
            <small>
            {
              tags.map(( tag, _ ) =>
                <span key={_}>
                {tag}
                { _ === (tags.length-1) ? null : ', '}
                </span>
              )
            }
          </small>
          </div>
        </div>

        <div className="card-body d-md-none text-center">
          <span>{name.toUpperCase()}</span>
        </div>

      </a>
  )
}

Workdone.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  to: PropTypes.string.isRequired,
  alt: PropTypes.bool
}

export default Workdone;
