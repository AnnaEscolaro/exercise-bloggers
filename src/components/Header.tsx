import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <h2>Bloggers</h2>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
}
