import React from 'react';

class Module extends React.Component {
  render() {
    return (
      <div className="box Module">
        <h3 className="box__title Module__title">{this.props.title}</h3>
        <div className="Module__content">{this.props.content}</div>
      </div>
    );
  }
}

export default Module;