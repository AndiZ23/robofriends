import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
// import { robots as constRobots } from './robots'; //bc robots.js does not export robots using 'default', we have to use {} to destructure
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => setSearchField(event.target.value);

    const filteredRobots = robots.filter(robot => 
        robot.name.toLowerCase().includes(searchField.toLowerCase())
    )

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json() )
            .then(users => setRobots(users));
    }, []) 
    // To prevent useEffect constantly firing, passing the [] as a second param. 
    //  The useEffect only runs when it sees a diff on the 2nd param. 

    if (robots.length === 0) {
        return <h1 className="tc">Loading...</h1>
    }
    
    return (
        <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox onChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
}

export default App;