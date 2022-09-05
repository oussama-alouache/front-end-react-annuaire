import React, { Component } from 'react'
import'./assets/logout-style.css'

export class 
Logout extends Component {
  render() {
    return (
      <div className='logout'>
        <h5> are you sur ?</h5>
        <div className='btn-log'> < button className='btn-log-y'> yes</button>
        < button className='btn-log-n'> non</button>
</div>
        

      </div>
    )
  }
}

export default Logout