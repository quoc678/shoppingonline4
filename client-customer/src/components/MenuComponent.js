import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
      
      
    };
  }
  render() {
    const cates = this.state.categories.map((item) => {
      <li key={item._id} className="menu"><Link to=''>{item.name}</Link></li>

      return (
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}>{item.name}</Link></li>
       
        
      );
    });
    return (
      <div className='border-left'>
      <img src="https://i0.wp.com/prolap.vn/wp-content/uploads/Logo-Prolap-1200x627.jpg?resize=1020%2C533&ssl=1" width="300px" height="170px"  alt="" />
      <img src="https://stcv4.hnammobile.com/downloads/f/mua-laptop-o-dau-tot-nhat-thanh-pho-ho-chi-minh-01634019409.jpg"   width="847px" height= "170px" alt="" />
      <div className="border-bottom">
     
        <div className="float-left">
          
          <ul className="menu">
            
          <li className="menu"><Link to='/'>Home</Link></li>
          
          
            {cates}
          </ul>
        </div>
        
        <div className="float-right">
        <form className="search">
        <input type="search" placeholder="Enter keyword" className="keyword" value={this.state.txtKeyword} onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }} />
        <input type="submit" value="SEARCH" onClick={(e) => this.btnSearchClick(e)} />
      </form>
      

        </div>
        <div className="float-clear" />
        
      </div>
      </div>
    );
  }
  componentDidMount() {
    this.apiGetCategories();
  }
    // event-handlers
    btnSearchClick(e) {
      e.preventDefault();
      this.props.navigate('/product/search/' + this.state.txtKeyword);
    }
  // apis
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}
export default withRouter(Menu);
