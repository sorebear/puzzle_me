import React, { Component } from 'react';
import DummyData from './puzzle_dummy_data';
import PlayMenuModal from '../play_menu_modal';
import PageTitle from './page_title';
import Axios from 'axios';
import cityscape from './imgs/cityscape.jpg'

class Rankings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalInfo : null,
            showModal : "noModal",
            data: null
        }
        this.BASE_URL = 'http://localhost:4000/users';
        this.QUERY_KEY = 'retrieve';
        this.QUERY_VAL = 'recent10';
        this.updateData = this.updateData.bind(this);
    }

    callModal(info) {
        this.setState({
            modalInfo : info,
            showModal : "showModal"
        })  
    }

    close() {
        this.setState({
            showModal: "noModal"
        })
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        Axios.get(this.BASE_URL + '?' + this.QUERY_KEY + '=' + this.QUERY_VAL).then(this.updateData).catch(err => {
            console.log("Error getting 10 most recent puzzles: ", err);
        });
    }

    updateData(response){
        const receivedData = response.data.data
        this.setState({
            data: receivedData
        })
    }

    render() {
        const { data } = this.state
        if (data === null) {
            return <h1>Loading...</h1>
        } else {
            console.log(this.state);
            const list = data.map((item, index) => {
                return (
                    <tr key={index} onClick={() => {this.callModal(item)}}>
                        <td>{index}</td>
                        <td>{item.username}</td>
                        <td>{item.solver_ranking}</td>
                        <td>{item.creator_ranking}</td>
                        <td>{item.gladiator_ranking}</td>
                    </tr>
                )
            })
            return (
                <div>
                    <PageTitle img={cityscape} color="white" text="RANKINGS" subText="choose a game below"/>
                    <table className="table table-inverse table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>User</th>
                                <th>Solver Ranking</th>
                                <th>Creator Ranking</th>
                                <th>Gladiator Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default Rankings