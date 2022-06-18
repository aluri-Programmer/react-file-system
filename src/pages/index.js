import React, { Component } from 'react';
import styled from 'styled-components';
import { Routes, Route, useParams } from "react-router-dom";

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';

class ViewFiles extends Component {
  render() {
    return (
      <Container>
        <TopBar>
          <Navigation />
          <SearchBar />
        </TopBar>
        <Grid />
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 41px;
  margin-left: 320px;
  transition: margin-left 250ms ease-in;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding: 55px 15px 15px 15px;
  }
`;

const TopBar = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default ViewFiles