import React, { Component } from 'react';
class Addtocontact extends React.Component{
    state ={
        name:"",
        email:"",
        id:Math.floor(Math.random() * 100)
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name==='' || this.state.email === ''){
             alert(' all the fields are mandatory');
             return
        }
        this.props.addcontacthandeler(this.state)
        this.setState({name:"", email:"", id:this.id })



    }
    render(){
        return(
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name :</label> 
                        <input type='text' placeholder='enter your Name '
                        value={this.state.value}
                        onChange={(e)=>{
                            this.setState({name:e.target.value})
                            

                        }}/>
                    </div>
                    <div className='field'>
                        <label>Email:</label> 
                        <input type='email' placeholder='enter your Email'
                        value={this.state.value}
                        onChange={(e)=>{
                            this.setState({email:e.target.value})
                            

                        }} />
                    </div>
                    <button className='ui button blue'>Add </button>

                </form>


            </div>
        )
            
        
    }

}


export default Addtocontact