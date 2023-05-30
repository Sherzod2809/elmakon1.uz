import React, { Component } from 'react'
import HomepageHeader from './homepageHeader'
import HomepageMain from './homepageMain'
import HomepageFooter from './homepageFooter'
export default class homepagebasic extends Component {
  render() {
    return (
      <div>
         <HomepageHeader/>
         <HomepageMain/>
         <HomepageFooter/>
      </div>
    )
  }
}
