import React from 'react';
import { Link } from 'react-router-dom';
import SelectFont from './SelectFont';

import '../styles/Navbar.css';
import ButtonInput from './ButtonInput';

export default function Navbar () {  

  return <nav className="cs-header">

    <div className="w-25 d-flex">
      <Link to="/" className="btn btn-success mr-3">
        <i className="fas fa-shapes"></i> Kody
      </Link>

      <Link to="/" className="btn btn-primary mr-3">
        <i className="fas fa-home" data-toggle="tooltip"
          data-placement="top" title="Back Home"></i>
      </Link>
    </div>


    <div className="w-75 d-flex justify-content-end">
      <SelectFont />

      <ButtonInput />

      <a className="btn btn-primary" href="https://github.com/haikelfazzani/kody-web-editor">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </nav>;
}