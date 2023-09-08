import React from 'react'
import "./skills.css"
import UiDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Dedicated and Adaptive resource with over 1.5+ yrs of experience. Looking for a challenging position in a Product and Service based Domain.</span>
        <div className='skillBar'>
            <img src={UiDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Ui/Ux Design</h2>
                <p>This is demo you can write your own contact</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Web Design</h2>
                <p>This is demo you can write your own contact</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>This is demo you can write your own contact</p>
            </div>
        </div>
    </section>
  )
}

export default Skills