import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand" />
               </Link> 
               <div className='colorWhiteText delivery'>
                <div>
                    <p>Deliver to user</p>
                </div>
                <div>
                <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Phagwara 144401</p>
                </div>
               </div>
               <div className='searchBox'>
                <ul>
                    <li>
                    <Link to="/bmi" className="bmi product">
                    Check BMI
                    </Link>
                    </li>
                    <li>Exercise</li>
                    <li>Recipes</li>
                    <li>
                    <Link to="/product" className="product">
                       Shop
                    </Link>
                    </li>
                </ul>
               </div>
               <div className='userAccount colorWhiteText'>
                <div>
                    <p>Hello, Bishwjeet</p>
                </div>
                <div>
                    <p>Account & Lists</p>
                </div>
               </div>
               <div className='returnOrder colorWhiteText'>
                <div>
                    <p>Returns</p>
                </div>
                <div>
                    <p>& Orders</p>
                </div>
               </div>
               {/* <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Home
                    </Link>
                 </li>
                 <li className="nav-item ml-5">
                    <Link to="/product" className="nav-link">
                       Product
                    </Link>
                 </li>
               </ul> */}
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus"></i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
