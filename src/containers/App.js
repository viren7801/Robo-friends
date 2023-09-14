import React, { Component } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/scroll"
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }))
}

onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
}


    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (


            <div className="tc">

                <h1 className="header">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>

            </div>
        )
    }
}


export default App