import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'

const BuscaCEP = () => {
    const [informacoes, setInformacoes] = useState()



    async function handleRequisicao(){
        const response = await fecth ('https://viacep.com.br/ws/01001000/json/')
        const json = await response.json()
        setInformacoes(json.results[0])
    }

  return (
    <form>
        <input type="number" value={cep} onChange={}/>
        <button onClick={handleRequisicao}>Buscar CEP</button>

    </form>

  )
}

export default BuscaCEP