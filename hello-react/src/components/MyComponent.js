import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../index.css';

class MyComponent extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     number:0
        // }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
   }

   state={
       number:0,
       message:'',
       names:['Angular','React','Vue','Ember']
   }

    // handleChange(e){
        handleChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
    });
   }

//   handleClick(){
        handleClick = () => {
    //    alert(this.state.message);
        this.setState({
            names:this.state.names.concat(this.state.message),
            message:''
    });
   }

   handleKeyPress= (e) => {
   // if (e.key=== 'Enter') {
       if(e.keyCode === 13){
    this.handleClick();
    }
    }

    handleRemove = (index) => {
        const {names} = this.state;
        // this.setState({
        //     names:[
        //         ...names.slice(0,index),
        //         ...names.slice(index+1, names.length)
        //     ]
        // });
        this.setState({
            names:names.filter((name, idx) => (idx !== index))
        });
    }

    render() {
        const {name,value} = this.props;

        const {number, message, names} = this.state;
        const {handleChange, handleClick, handleKeyPress, handleRemove}=this;
   //     const names =['Angular','React','Vue','Ember'];

        const nameList = names.map((name, idx) => 
        (<li key={idx} onDoubleClick={() => handleRemove(idx)}>
        
            {name}
        </li>));

        return (
            <div>
                <h1>child component {name} {value}</h1>
                <ul>
                    {nameList}
                </ul>

                <h3>상태변수 {this.state.number}</h3>
                <button onClick={() => {
                    this.setState({
                    number: number +1
                    });
                    this.msgInput.focus();
    }}>
                    증가
                    </button><br></br>
                    <span>{message}</span><br></br>
                    <input name="message" type="text" value={message} 
                    onChange={this.handleChange}
                    onKeyDown={handleKeyPress}
                    // onKeyPress={handleKeyPress}
                    ref={(arg) => this.msgInput = arg}
                    
                    />
                    <button onClick={handleClick}>확인</button>
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name:'디폴트 리액트',
    number:10
    
};
 MyComponent.propTypes = {
     name: PropTypes.string,
     number:PropTypes.number.isRequired
 };
export default MyComponent;