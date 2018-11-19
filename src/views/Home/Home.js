import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Loader from 'react-loaders';


//  All styles on this page

const HomeContent = styled.div`
  position: relative;
  height: 100%;
`

const HomeTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  font-size: 34px;
  color: #575757;
  opacity: 0.5;
`

const Home = ({categories}) => (
  <div>
    <HomeContent>
      <HomeTitle>Selectionner vôtre categorie</HomeTitle>
    </HomeContent>

    {/* Loader Home  */}
    {!categories && (<Loader type="pacman" active/>)}
  </div>
)

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, title: PropTypes.title}))
};

export default Home;