import React from 'react'
import Education from '../componets/education'
import Intro from '../componets/intro'
import NavBar from '../componets/navbar'
import Perfil from '../componets/perfil'
import Skill from '../componets/skill'
import './module.css'
export default function Porfolio() {
  return (
    <div className='body'>
     <NavBar/>
     <Intro/>
     <Perfil/>
     <Skill/>
     <Education/>
    </div>
  )
}
