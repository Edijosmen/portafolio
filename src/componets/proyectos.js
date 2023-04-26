import React,{useState} from 'react'
import './module.css/proyecto.css'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'
import {IoMdEye} from 'react-icons/io'
import AlertDismissible from './alertInfo'
export default function Proyectos() {
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState();
    const [front, setFront] = useState();
    const [back, setBack] = useState();
    const [nProyecto, setNProyecto] = useState();
    const [title,setTitle] =  useState();
    const handleProyecto1 =() => {
       
        setShow(true);
        setDescription("Desarrollo de un Sitio web de gastronomía para el público en general, el cual le permita al usuario consumidor identificar los diferentes negocios registrados en el sitio web y poder navegar en los distintos menús o platos que ofrece dicho restaurante o negocio. Permite cambiar el rol de usuario para poder publicar la descripción de un nuevo negocio y en consecuencia un menú. Entre otras funcionalidades.");
        setFront("https://github.com/Edijosmen/Frontend-lets-eat");
        setBack("https://github.com/Edijosmen/Back-end_lets-eat");
        setNProyecto("uno");
        setTitle("let's Eat!")
    };
    const handleProyecto2 =() => {
       
        setShow(true);
        setDescription("Todos amamos a nuestras mascotas. Pero a veces, no podemos dedicarles todo el tiempo que quisieramos y sentimos que ellos se aburren. Por eso, recurrimos a un paseador. ¿Pero cómo saber si es de confianza?. Walking Dog vendría a soluciona ese inconveniente con paseadores independientes y regionales bajo un marco de seguridad tanto para el paseador, como para el cliente ");
        setFront("https://github.com/No-Country/s6-01-t-csharp/tree/master/ClientApp");
        setBack("https://github.com/No-Country/s6-01-t-csharp");
        setNProyecto("dos");
        setTitle("Walking Dog");
    };
    const handleProyecto3 =() => {
       
        setShow(true);
        setDescription("Es una aplicación para una inmobiliaria que le permite manejar inmuebles en estado de venta o arriendo a nivel nacional, donde además tendrá su propio acceso para administrar su inmueble, como publicar uno nuevo, cambiar el estado de disponibilidad y publicación, donde el cliente podrás ver su inmueble y en caso de que le interese uno podrá solicitar información con la referencia del producto. también podrás contactar a la inmobiliaria para servicios de asesoría. tendrás la opción de filtrar los inmuebles por diferentes parámetros. entre otras funcionalidades. ");
        setFront("https://github.com/Edijosmen/Bonplan-react");
        setBack("https://github.com/Edijosmen/ApiBonplan");
        setNProyecto("tres");
        setTitle("Bonplan");
    };
    function changestateAlert() {
        setShow(false);

    }
  return (
    <div className='proyecto' id='proyecto'>
        <h5 className='p-title'>Proyectos</h5>
        <div className='alert-proj'>
        <AlertDismissible title={title} state={show} front={front} back={back} description={description} nP={nProyecto} changestateAlert={changestateAlert}></AlertDismissible>
        </div>
        <section>
        
            <div className='p-kid ' onClick={handleProyecto1}>
                <img src='img/lets-eat.png'></img>
                <div className='btncl'>
                    <a href='https://github.com/Edijosmen/Back-end_lets-eat'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                    <strong>|</strong>
                    <a href='https://lets-eat-jade.vercel.app/'> <IoMdEye
                    className='pr-icons'></IoMdEye> Demo</a>
                </div>
            </div>
            <div className='p-kid' onClick={handleProyecto2}>
                <img src='img/proyectdog.png'></img>
                <div className='btncl'>
                    <a href='https://github.com/No-Country/s6-01-t-csharp'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                    <strong>|</strong>
                    <a href='https://cohortes6.azurewebsites.net/'> <IoMdEye
                    className='pr-icons'></IoMdEye> Demo</a>
                </div>
            </div>
            <div className='p-kid' onClick={handleProyecto3}>
                <img src='img/bonplan.png'></img>
                <div className='btncl'>
                    <a href='https://github.com/Edijosmen/ApiBonplan'> <BsFileEarmarkCodeFill
                    className='pr-icons'></BsFileEarmarkCodeFill> Code</a>
                    <strong>|</strong>
                    <a href='https://bonplan.vercel.app/'> <IoMdEye
                    className='pr-icons'></IoMdEye> Demo</a>
                </div>
            </div>
           
        </section>
        <hr/>
    </div>
  )
}
