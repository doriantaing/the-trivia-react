import React from 'react';
import { Link } from 'react-router-dom';
import sushiGemu from './../sushiGemu.png';

const HomeMobile = () => {
    return(
        <div>
        <h1>寿司ゲーム</h1>

        <img src={sushiGemu} alt="sushi gemu"/>
        
        <Link to="/categories">Start Trivia</Link>
        </div>
    )
}

export default HomeMobile;