import React from 'react'
import './menu-item.styles.scss'
import withRouter from '../withRouter/withRouter'
import{useNavigate,useParams,/*other hooks */  } from 'react-router-dom'
const MenuItem=({title,imageUrl,size,linkUrl,location})=>{
    const navigate=useNavigate()

    return(
      <div  className={`${size} menu-item`} onClick={()=>{navigate(`${location.pathname}${linkUrl}`)}} >
        <div className='background-image' style={{
                backgroundImage:`url(${imageUrl})`
            }}>

        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    )
}

export default withRouter(MenuItem)