import React from 'react'
import {AiFillHtml5,AiFillGithub} from 'react-icons/ai'
import {DiNetmagazine,DiBootstrap,DiDocker,DiDotnet,DiMsqlServer,DiReact,DiResponsive,DiTrello,DiVisualstudio, DiDatabase} from 'react-icons/di'

import './module.css/skill.css'
export default function Skill() {
  return (
    <div className='pt-5'>
            <h2 className='title-skill'>Skills</h2>
          <section className='skill'>
              <div className='kid-skill'>
                  <div>
                      <DiVisualstudio className='icon-skill'></DiVisualstudio>
                      <span className='span-title'>Visual Studio</span>
                  </div>
                  
                  <div>
                      <DiNetmagazine className='icon-skill'></DiNetmagazine>
                      <span className='span-title'>.NET</span>
                  </div>
                  
              </div>
              <div className='kid-skill'>
                  <div>
                      <DiMsqlServer className='icon-skill'></DiMsqlServer>
                      <span className='span-title'>Sql Server</span>
                  </div>
                  <div>
                      <DiDocker className='icon-skill'></DiDocker>
                      <span className='span-title'>Docker</span>
                  </div>
                  <div>
                      <AiFillGithub className='icon-skill'></AiFillGithub>
                      <span className='span-title'>Github</span>
                  </div>
              </div>
              <div className='kid-skill'>
                  
                  <div>
                      <DiDatabase className='icon-skill'></DiDatabase>
                      <span className='span-title'>Database</span>
                  </div>
                  <div>
                      <DiDotnet className='icon-skill'></DiDotnet>
                      <span className='span-title'>Entity Framework</span>
                  </div>
              </div>
          </section>
          <hr />
          <section className='skill'>
              <div className='kid-skill'>
                  <div>
                      <AiFillHtml5 className='icon-skill'></AiFillHtml5>
                      <span className='span-title'>Html5</span>
                  </div>
                  <div>
                      <DiBootstrap className='icon-skill'></DiBootstrap>
                      <span className='span-title'>Bootstrap</span>
                  </div>
              </div>
              <div className='kid-skill'>
                  <div>
                      <DiReact className='icon-skill'></DiReact>
                      <span className='span-title'>React</span>
                  </div>
                  
              </div>
              <div className='kid-skill'>
                  <div>
                      <DiTrello className='icon-skill'></DiTrello>
                      <span className='span-title'>Trello</span>
                  </div>
                  <div>
                      <DiResponsive className='icon-skill'></DiResponsive>
                      <span className='span-title'>Responsive</span>
                  </div>
              </div>
          </section>
    </div>
  )
}
