import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import { Link } from 'react-router-dom';
class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
<div className="border-left">
<img src="https://i0.wp.com/prolap.vn/wp-content/uploads/Logo-Prolap-1200x627.jpg?resize=1020%2C533&ssl=1" width="300px" height="170px"  alt="" />
      <img src="https://stcv4.hnammobile.com/downloads/f/mua-laptop-o-dau-tot-nhat-thanh-pho-ho-chi-minh-01634019409.jpg"   width="1050px" height= "170px" alt="" />

      <div className="border-bottom">

      <div className="float-left">
        <div className="align-bottom">
          <ul className="menu">
          <li className="menu"><Link to='/admin/Home'>Home</Link></li>
            <li className="menu"><Link to='/admin/category'>Category</Link></li>
            <li className="menu"><Link to='/admin/product'>Product</Link></li>
            <li className="menu"><Link to='/admin/order'>Order</Link></li>
            <li className="menu"><Link to='/admin/customer'>Customer</Link></li>
          </ul>
          </div>
          
        </div>
        <div className="float-right">
          Hello <b>{this.context.username}</b> | <Link to='/admin/home' onClick={() => this.lnkLogoutClick()}>Logout</Link>
        </div>
        <div className="float-clear" />
      </div>
      </div>
      
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setUsername('');
  }
}
export default Menu;