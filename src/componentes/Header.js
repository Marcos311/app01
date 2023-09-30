import React from 'react'

export default function Header(){

    const elemento1=()=>{
        return('Jogadores')
    }
    
    const elemento2=()=>{
        return('Squad Criador')
    }
    
    const elemento3=()=>{
        return('SBCs')
    }
    
    const elemento4=()=>{
        return('Draft')
    }
      
    const elemento5=()=>{
        return('Elencos')
    }
    
    const elemento6=()=>{
        return('Mercado')
    }
    
    const elemento7=()=>{
        return('Evolutions')
    }
    
    const elemento8=()=>{
        return('****')
    }
    
    const elemento9=()=>{
        return('Sign In')
    }

    return(

        <header>
            <img src='/img/logo.png'/>
            <ul>
                <li>{elemento1()}</li>
                <li>{elemento2()}</li>
                <li>{elemento3()}</li>
                <li>{elemento4()}</li>
                <li>{elemento5()}</li>
                <li>{elemento6()}</li>
                <li>{elemento7()}</li>
                <li>{elemento8()}</li>
                <li>{elemento9()}</li>
            </ul>
        </header>

    )
}