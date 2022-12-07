import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './components/SideBar';
import Header from './components/Header';
import { Content } from './components/Content';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    </Router>
  );
}

