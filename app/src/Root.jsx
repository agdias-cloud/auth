import React  from "react";
import Header from './components/Header'
import Content from './components/Content'

const Root = () => {
  return (
    
    <div className="app">
      <Header />
      <div className="content">
        <Content />
      </div>
      
      
    </div>
    
   
   
  )
}

export default Root;