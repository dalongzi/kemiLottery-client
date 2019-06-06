import React from 'react'
import './CommonTop.scss'
import {Link} from 'react-router-dom'

class CommonTop extends React.Component {
  goBack(){
    this.props.history.goBack();
  }

  render(){
    return (<div className="CommonTop">
      <h1>{this.props.title}</h1>
      <button onClick={e=>this.goBack(e)}>返回</button>
      <Link to='/'>{this.props.rightLink}</Link>
    </div>)
  }
}

export default CommonTop