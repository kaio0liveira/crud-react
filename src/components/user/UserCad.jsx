import React from 'react'
import Main from '../template/Main'

import ApiCep from '../service/ApiCep';

import { NotificationContainer, NotificationManager } from 'react-notifications'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: {
        name: '',
        email: '',
        cpf: '',
        cep: ''
    },
    list: []
}

export default class UserCad extends React.Component {

    constructor() {
        super();
    
        this.state = {
            rua: 'Rua...'
          , bairro: 'Bairro...'
          , cidade: 'Cidade...'
          , estado: 'Estado'
        }
      }
    
      handleDados(e) {
        // Pegando o CEP
        const cep = e.target.value;
        // Consultando a API
        ApiCep.SearchCep(cep).then((res) => {
          let rua       = res.data.logradouro;
          let bairro    = res.data.bairro;
          let cidade    = res.data.localidade;
          let estado    = res.data.uf;
          // Mudando o estado
          this.setState({
            rua: rua
          , bairro: bairro
          , cidade: cidade
          , estado: estado
          })
        })
      }
    
      render() {
        return(
        <Main {...headerProps}>
          <div  className="form">
              <form className="container box is-3">
                  <label className="label">Cep</label>
                  <p className="control">
                    <input type="text" className="input is-6" onBlur={ this.handleDados.bind(this) } required="true" placeholder="Cep..." />
                  </p>
    
                  <label className="label">Endereço</label>
                  <p className="control">
                    <input type="text" className="input is-6" value={ this.state.rua} disabled/>
                  </p>
    
                  <label className="label">Número</label>
                  <p className="control">
                    <input type="number" className="input is-6" />
                  </p>
    
                  <label className="label">Bairro</label>
                  <p className="control">
                    <input type="text" className="input is-6" value={ this.state.bairro} disabled/>
                  </p>
    
                  <label className="label">Cidade</label>
                  <p className="control">
                    <input type="text" className="input is-6" value={ this.state.cidade} disabled/>
                  </p>
    
                  <label className="label">UF</label>
                  <p className="control">
                    <input type="text" className="input is-6" value={ this.state.estado} disabled/>
                  </p>
              </form>
              
          </div>
        </Main>
          
          
        );
      }
    }