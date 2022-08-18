import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button'

const BuscaCEP = () => {
    const [informacoes, setInformacoes] = useState()
    const [cep, setCep] = useState('')

function handleCep(e){
  setCep(e.target.value)
}

    async function handleRequisicao(){
        const response = await fecth ('https://viacep.com.br/ws/01001000/json/')
        const json = await response.json()
        setInformacoes(json.results[0])
        console.log('requisição funciona')
    }

  return (
    <div>
    <form>
        <input type="text" value={cep} onChange={handleCep}/>
        <Button texto='Buscar CEP' onClick={handleRequisicao}/>
    </form>

    <h1>{informacoes ? informacoes.cep : ''}</h1>
    <h1>{informacoes ? informacoes.logradouro : ''}</h1>
    <h1>{informacoes ? informacoes.complemento : ''}</h1>
    <h1>{informacoes ? informacoes.bairro : ''}</h1>
    <h1>{informacoes ? informacoes.localidade : ''}</h1>
    <h1>{informacoes ? informacoes.uf : ''}</h1>

    </div>
  )
}

export default BuscaCEP