import React from 'react'

import PropTypes from 'prop-types'

const Announcement = (props) => {
  return (
    <>
      <div className={`announcement-announcement ${props.rootClassName} `}>
        <span className="announcement-title">{props.Title}</span>
        <div className="announcement-button">
          <span className="announcement-button-text">{props.Button}</span>
        </div>
      </div>
      <style jsx>
        {`
          .announcement-announcement {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            cursor: pointer;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 16px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
            background-color: #2563eb;
          }
          .announcement-announcement:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .announcement-title {
            color: #8aede8;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 21px;
          }
          .announcement-button {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            border-color: #8aede8;
            flex-direction: row;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .announcement-button-text {
            color: rgb(138, 237, 232);
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 21px;
          }
          .announcement-root-class-name {
            flex: 0 0 auto;
            width: 100%;
          }
          .announcement-root-class-name1 {
            flex: 0 0 auto;
            width: 100%;
          }
          @media (max-width: 479px) {
            .announcement-announcement {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Announcement.defaultProps = {
  Title: 'Join our Limited Beta Product',
  rootClassName: '',
  Button: 'See now ->',
}

Announcement.propTypes = {
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
}

export default Announcement
