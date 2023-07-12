import React from 'react'
import App from '../components/App'

const Apps = ({props}) => {
  return (
    <div>
        {
            props.map((x)=> <App key={x._id} app={x}/>)
        }
    </div>
  )
}

export default Apps