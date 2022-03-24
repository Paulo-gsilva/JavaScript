import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css'

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1 //estado para realizar edição. !== -1 está editando
    }

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if (!tarefas) return;

        this.setState({ tarefas });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if (tarefas === prevState.tarefas) return;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,

        });
    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index, //muda o -1
            novaTarefa: tarefas[index],
        })
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novastarefas = [...tarefas];

        novastarefas.splice(index, 1);

        this.setState({
            tarefas: [...novastarefas],
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); //elimina espaços após a última palavra

        if (tarefas.indexOf(novaTarefa) !== -1) return; //caso a NOVATAREFA ja exista no array de TAREFAS (-1) acontece um return
        if (novaTarefa === '') return;
        //tarefas.push(novaTarefa);

        const novasTarefas = [...tarefas];

        if (index === -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa], //adiciona na const novastarefas o valor da novatarefa
                novaTarefa: '',
            });
        } else {
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas], //adiciona na const novastarefas o valor da novatarefa
                index: -1,
                novaTarefa: '',
            });
        }
    }

    render() {
        const { novaTarefa, tarefas } = this.state;

        return (
            <div className='main'>
                <h1>Lista de Tarefas</h1>
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />
                <Tarefas
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    tarefas={tarefas}
                />
            </div>
        );
    }
}