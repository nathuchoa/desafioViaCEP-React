import React from "react";
import S from "./Historico.module.css"

const Historico = ({cepInput}) => {
  const {cep, logradouro, complemento, bairro, localidade, uf} = cepInput
  return(
      <div className={S.historico}>
        <h3>CEP: {cep}</h3>
        <p>Endereço: {logradouro}</p>
        <p>Complemento: {complemento}</p>
        <p>Bairro: {bairro}</p>
        <p>Cidade: {localidade}</p>
        <p>UF: {uf}</p>
      </div>
    )
  }

export default Historico;
