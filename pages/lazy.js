import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
import MyComponent from '../components/melons';
import PlaceholderComponent from '../components/melons/placeholder';

export default class Placeholder extends React.Component {
  constructor() {
    super();

    this.state = {
      arr: Array.apply(null, Array(20))
    };
  }

  render() {
    return (
      <div className="list">
        {
          this.state.arr.map((el, index) => {
            return (
              <LazyLoad key={index} height={200} offset={[-200, 0]}
                placeholder={<PlaceholderComponent />} debounce={500}>
                <MyComponent />
              </LazyLoad>
            ) 
          })
        }
      </div>
    );
  }
}