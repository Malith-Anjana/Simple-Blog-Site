import React from 'react'
import Sidebar from '../../componenet/sidebar/Sidebar'
import SinglePost from '../../componenet/singlePost/SinglePost'

export default function Single() {
    return (
        <div>
            <div class="container-fluid">
  <div class="row">
    <div class= "main col-lg-9">
         <div class="well"><SinglePost/></div>   
    </div> 
    <div class="sidebar col-lg-3">
         <div class="well"><Sidebar/></div>
   </div>
  </div>
</div>
        
        </div>
    )
}
