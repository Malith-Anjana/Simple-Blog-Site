import {MDBCol,MDBRow } from 'mdbreact'
import React from 'react'
import Post from '../post/Post'

export default function Posts() {
    return (
            <MDBRow className="mb-4">
               
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </MDBRow>

    )
}
