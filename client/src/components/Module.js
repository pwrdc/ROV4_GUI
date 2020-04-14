import React from 'react';

export default class Module extends React.Component {
  handleClick() {
    this.props.io.emit('get_ahrs', 'dej mi te ahrsy')

    this.props.io.on('ahrs', (data) => {
      // render ahrs
      console.log(data);
    });
  }

  render() {
    return (
      <div className="box Module" onClick={() => this.handleClick()}>
        <h3 className="box__title Module__title">{this.props.title}</h3>
        <div className="Module__content">{this.props.content}</div>
      </div>
    );
  }
}