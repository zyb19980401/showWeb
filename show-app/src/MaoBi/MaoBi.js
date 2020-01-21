import React from 'react'
import Navigation from "../Navigation/Navigation"
import ShowBox1 from './ShowBox1';
import ShowBox2 from './ShowBox2';
import ShowBox3 from './ShowBox3';
import ShowBox4 from './ShowBox4';
export default function MaoBi() {
    return (
        <div>
            <Navigation></Navigation>
            <ShowBox1></ShowBox1>
            <ShowBox2></ShowBox2>
            <ShowBox3></ShowBox3>
            <ShowBox4></ShowBox4>
        </div>
    )
}