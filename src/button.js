import React from 'react'

class Button extends React.Component{
  componentDidCatch=()=>{
    console.log('eee')
  }
  render(){
   return  (
    <button onClick={this.props.onClick}>
        {this.props.text}
    </button>
  )
 }
}
export default Button