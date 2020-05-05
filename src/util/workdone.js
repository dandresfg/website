import React from 'react'
import PropTypes from 'prop-types'

const Workdone = ({name, url, tags, alt}) => {
  return (
      <div className="card">

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

      </div>
  )
}

Workdone.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  alt: PropTypes.bool
}

export default Workdone;
