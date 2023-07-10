import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte'/>
      <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-fastFood flex__center'>
        <p className='app__specialMenu-menu_heading'>Fast Food</p>
        <div className='app__specialMenu-menu_items'>
          {data.fastfood.map((x, index) => (
            <MenuItem key={x.title + index} title={x.title} price={x.price} tags={x.tags}/>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.sprite} alt="menu img" />
      </div>
    
      <div className='app__specialMenu-colddrinks flex__center'>
        <p className='app__specialMenu-menu_heading'>Cold Drinks</p>
        <div className='app__specialMenu-menu_items'>
          {data.colddrinks.map((colddrink, index) => (
            <MenuItem key={colddrink.title + index} title={colddrink.title} price={colddrink.price} tags={colddrink.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>

  </div>
);

export default SpecialMenu;
