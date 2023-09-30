import React from 'react'
import Campo from './imgs/campo.jpg'
import ST from './imgs/posicaoST.png'

export default function Corpo(){

    const modo=()=>{
        return('Squad Builder')
      }
    
      const funcao=()=>{
        return('Create UT Squads')
      }
    
      const menu=()=>{
        return('HomeBuilder >> UT squads >> Squad')
      }

    return(
        <section>
            <div>
                <p>{'Utimate Team : ' + modo()}</p>
                <p>{funcao()}</p>
                <p>{menu()}</p>
                <img src={Campo}/>
                <img src={ST}/>
            </div>
        </section>
    )
}