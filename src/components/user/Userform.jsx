import React from 'react'





export default props =>


    <div className="form">
        <div className="row">
            <div className="col-6 col-md-2">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        autoComplete='off'
                        value={props.name}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Digite o nome...' />
                </div>
            </div>

            <div className="col-6 col-md-2">
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        autoComplete='off'
                        value={props.email}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Digite o e-mail..." />
                </div>
            </div>
            <div className="col-6 col-md-2">
                <div className="form-group">
                    <label>CPF</label>
                    <input type="text"
                        name="cpf"
                        id="cpf"
                        className="form-control"
                        autoComplete='off'
                        value={props.cpf}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="" />
                </div>
            </div>
            <div className="col-6 col-md-2">
                <div className="form-group">
                    <label>CEP</label>
                    <input type="text"
                        name="cep"
                        id="cep"
                        className="form-control"
                        autoComplete='off'
                        value={props.cpf}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="" />
                </div>
            </div>
        </div>

        <hr />

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-success" onClick={props.save}>
                    <i className="fa fa-save mr-1"></i> Salvar
                </button>
                <button className="btn btn-danger ml-2" onClick={props.clear}>
                    <i className="fa fa-remove mr-1"></i> Cancelar
                </button>
            </div>
        </div>

    </div>