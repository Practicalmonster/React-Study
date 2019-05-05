import React from 'react';
import {connect} from 'react-redux'
class App extends React.Component {
  render(){
    return (
      <div>
        <button onClick={this.props.inc}>{this.props.ctr}</button>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  console.log(state)
  return{
      ctr:state.counter
  }
}

const mapDispatchToProps = dispatch=>{
  return{
      inc: ()=> dispatch({type:'INC_COUNTER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
