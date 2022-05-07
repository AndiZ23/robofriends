import React, { useEffect, useState } from "react";
import CardList from "./CardList";
// import { robots as constRobots } from './robots'; //bc robots.js does not export robots using 'default', we have to use {} to destructure
import SearchBox from "./SearchBox";
import './App.css';
import Scroll from "./Scroll";

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