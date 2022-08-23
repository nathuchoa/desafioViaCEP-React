import React from "react";
import { useState } from "react";
import Historico from "../Historico/Historico";
import Resposta from "../Resposta/Resposta";
import S from "./BuscaCEP.module.css"

const BuscaCEP = () => {
  const [historico, setHistorico] = useState([]);
  const [cepInput, setCepInput] = useState();
  const [cep, setCep] = useState("");
  const [erro, setErro] = useState(false);

  async function requisicao() {
    try {
      const url = `https://viacep.com.br/ws/${cep}/json/`;

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const response = await fetch(url, { headers });
      const json = await response.json();

      if (json.erro) throw new Error("CEP inválido");
      else {
        const resposta = {
          cep: json.cep,
          logradouro: json.logradouro,
          complemento: json.complemento,
          bairro: json.bairro,
          localidade: json.localidade,
          uf: json.uf,
        };

        setCepInput(resposta);
        setHistorico([...historico, resposta]);
        setCep("");
        setErro(false);
      }
    } catch (err) {
      console.log(err);
      setCepInput();
      setErro(true);
    }
  }

  return (
    <div>
      <h1>Busque o CEP</h1>
      <div className={S.container}>
        <main className={S.main}>
          <input
            type="text"
            placeholder="Ex.:01001-000"
            value={cep}
            onChange={({ target }) => setCep(target.value)}
          />
          <button onClick={requisicao}>Buscar CEP</button>
        </main>

        <section>
          {erro ? (
            <p>CEP incorreto ou formato inválido, favor tentar novamente.</p>
          ) : (
            !!cepInput && <Resposta cepInput={cepInput} />
          )}
        </section>
      </div>

      <section>
        <h2>Histórico</h2>
        <ul className={S.historico}>
          {historico.map((cep, index) => {
            return <Historico cepInput={cep} key={index} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default BuscaCEP;
