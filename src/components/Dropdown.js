import React, { Component } from 'react';
//import Greeting from './Greeting.js';
import XDropdown from './x-dropdown.js';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    this.dropdownRef.current.title = this.props.title;

    if (this.props.onShow) {
      this.dropdownRef.current.addEventListener('show', e =>
        this.props.onShow(e)
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.dropdownRef.current.title = this.props.title;
    }

    if (this.props.show !== prevProps.show) {
      this.dropdownRef.current.show = this.props.show;
    }
  }

  render() {
    //return <greeting-component ref={this.dropdownRef}>{this.props.children}</greeting-component>;
    return (
      <x-dropdown
        ref={this.dropdownRef}
        flavor={this.props.flavor}
      >
        {this.props.children}
      </x-dropdown>
    )
  }
}