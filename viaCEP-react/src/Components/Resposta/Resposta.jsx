import React from "react";
import S from "./Resposta.module.css";

const Resposta = ({ cepInput }) => {
  const { cep, logradouro, complemento, bairro, localidade, uf } = cepInput;
  return (
    <div>
      <h2>Resposta</h2>
      <div className={S.resposta}>
        <h3>CEP: {cep}</h3>
        <p>Endereço: {logradouro}</p>
        <p>Complemento: {complemento}</p>
        <p>Bairro: {bairro}</p>
        <p>Cidade: {localidade}</p>
        <p>UF: {uf}</p>
      </div>
    </div>
  );
};

export default Resposta;
