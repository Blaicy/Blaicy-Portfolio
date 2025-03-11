import '../Styles/Section.css'
import  Prototypes from '../Data/Prototypes.js'
import { useState } from 'react'

function Section(){
  let [count,setcount]= useState(Prototypes[6].img)
  return(
    <section className='caroption'>
      <div className='caroptiongrid'>
        {
          Prototypes.map(Prototype =>{
            return( <Card key={Prototype.img} img={Prototype.img} setcount={setcount}/>)
          })
        }
       
      </div>
      <div>
        <Cards img={count}/>
      </div>
    </section>
  )
}

function Card({img,  setcount}){
  return(
    <div className='cardcars' onClick={
    ()=>{
      setcount(img)
    }
    
    }>
      <img src={img} />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit facere vero error modi sed consequuntur! Officiis ipsum error.
      </div>
    </div>

  )
}

function Cards({img}){
  return(
    <div className='cardcars cl'>
      <img src={img}/>
      <div className='div'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit facere vero error modi sed consequuntur! Officiis ipsum error.
        <div className='button-holder'>
          <button>Buy</button>
          <button>Review</button>
        </div>
      </div>
    </div>
  )}



export default Section