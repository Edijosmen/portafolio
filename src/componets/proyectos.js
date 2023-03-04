import React from 'react'
import './module.css/proyecto.css'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'
import {IoMdEye} from 'react-icons/io'
export default function Proyectos() {
  return (
    <div className='proyecto'>
        <section>
            <div className='p-kid '>
                <img src='img/lets-eat.png'></img>
                <div className='btncl'>
                    <a href='#'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                    <strong>|</strong>
                    <a href='#'> <IoMdEye
                    className='pr-icons'></IoMdEye> Demo</a>
                </div>
            </div>
            <div className='p-kid'>
                <img src='img/proyectdog.png'></img>
                <div className='btncl'>
                    <a href='#'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                    <strong>|</strong>
                    <a href='#'> <IoMdEye
                    className='pr-icons'></IoMdEye> Demo</a>
                </div>
            </div>
            <div className='p-kid'>
                <img src='img/lets-eat.png'></img>
                <div className='btncl'>
                    <a href='#'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill></a>
                </div>
            </div>
            <div className='p-kid'>
                <img src='img/lets-eat.png'></img>
                <div className='btncl'>
                    <a href='#'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                </div>
            </div>
        </section>
    </div>
  )
}
