import React, { Component } from 'react';
import Cardcontactlist from './Cardlist';


const Contactlist =(props)=>{
    const Contactts = props.contacts
    console.log(Contactts)
    const deletecontacthandeler = (id)=>{
        props.getidmilcontact(id)

    }
    const co = Contactts.map((el)=>{
        return(
          <Cardcontactlist data={el} fasakhni={deletecontacthandeler} />
        )
    })
    return(
        <div className='ui celled list'>
            {co}
            
         
        </div>
    )
}
export default Contactlist