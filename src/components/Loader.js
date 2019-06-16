import React from 'react';
import Anim from '@haiku/vicorch-loader/react';
import styled from 'styled-components';


const Loader = () => {
    return(
       <LoaderContainer>
            <LoaderLogo>
                <Anim className='loader' loop={true}/>
            </LoaderLogo>
            <LoaderText>Loading ...</LoaderText>
       </LoaderContainer>
    )
}

const LoaderContainer = styled.div `
  background: #f9aa33;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const LoaderText = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: 30px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LoaderLogo = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg{
    width: 105px;
  }
`

export default Loader;