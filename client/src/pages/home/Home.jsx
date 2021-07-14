import React from 'react'
import Header from '../../componenet/header/Header'
import Posts from '../../componenet/posts/Posts'
import Sidebar from '../../componenet/sidebar/Sidebar'

export default function Home() {
    return (
        <>
            <Header/>

            <div class="container-fluid">
  <div class="row">
    <div class= "main col-lg-9">
         <div class="well"><Posts/></div>   
    </div> 
    <div class="sidebar col-lg-3">
         <div class="well"><Sidebar/></div>
   </div>
  </div>
</div>
        


        </>
    )
}
