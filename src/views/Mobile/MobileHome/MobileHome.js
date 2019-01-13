import React from 'react';
import sushiGemu from './../../img/sushiGemu.png';
import {HomeMobileContainer , HomeMobileButton , HomeMobileTitle , HomeMobileImg} from '../style/MobileStyle';

const HomeMobile = ({eventClick}) => {
    return(
        <HomeMobileContainer>

        <HomeMobileImg src={sushiGemu} alt="sushi gemu"/>
        <HomeMobileTitle>寿司ゲーム</HomeMobileTitle>
        
        <HomeMobileButton onClick={eventClick}>Commencer</HomeMobileButton>
        </HomeMobileContainer>
    )
}

export default HomeMobile;