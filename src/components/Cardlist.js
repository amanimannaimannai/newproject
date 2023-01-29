import React, { Component } from 'react';
import { FaTrash } from "react-icons/fa";
 const  Cardcontactlist = (props)=>{
    const {id,name, email}= props.data
    console.log(id);
    return(
        
          <div className='item'>
                <div className='content' key={id}>
                    <span>  {name}</span>
                    <span className='header'> {email}</span>
                    <span className='header'> {id}</span>
                   

                     <button onClick={()=>{props.fasakhni(id)}}><FaTrash /></button>


                </div>

            
            </div>
        
    )
 }
 export default Cardcontactlist
