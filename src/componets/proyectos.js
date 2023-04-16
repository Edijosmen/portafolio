import React from 'react'
import './module.css/proyecto.css'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'
import {IoMdEye} from 'react-icons/io'
export default function Proyectos() {
  return (
    <div className='proyecto' id='proyecto'>
        <h5 className='p-title'>Proyectos</h5>
        <section>
            <div className='p-kid '>
                <img src='img/lets-eat.png'></img>
                <div className='btncl'>
                    <a href='https://github.com/Edijosmen/Back-end_lets-eat'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                    <strong>|</strong>
                    <a href='https://lets-eat-jade.vercel.app/'> <IoMdEye
                    className='pr-icons'></IoMdEye> Demo</a>
                </div>
            </div>
            <div className='p-kid'>
                <img src='img/proyectdog.png'></img>
                <div className='btncl'>
                    <a href='https://github.com/No-Country/s6-01-t-csharp'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                    <strong>|</strong>
                    <a href='https://cohortes6.azurewebsites.net/'> <IoMdEye
                    className='pr-icons'></IoMdEye> Demo</a>
                </div>
            </div>
            
        </section>
        <hr/>
    </div>
  )
}
