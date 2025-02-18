import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Card() {
  
  const {allUser} = useContext(UserContext);
  return (
    
    
    <div className='row'>
      <h1>Card</h1>
      {
       allUser.map((value,index) => {
          return (
            <div key={index} className="card m-6" style={{width:300}}>
            <img src={value.avatar_url} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{value.login}</h5>
              <p className="card-text"></p>
              <a href={value.url} className="btn btn-primary">About Us</a>
            </div>
          </div>
          
          )
        })
      }
    
    </div>
  )
}

export default Card