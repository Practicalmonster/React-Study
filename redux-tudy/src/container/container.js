import React from 'react'
import {connect} from 'react-redux'
class Container extends React.Component{
    render(){
        return(
            <div>
               <button onClick={()=>console.log(this)}>aaa</button>
               <button>inc 1</button>
               <button>inc 1</button>
               <button>inc 1</button>
            </div>
        );
    }
}




export default connect()(Container)