import React from 'react';

class Terminal extends React.Component {
  render() {
    return (
      <div className="box Terminal">
        <h3 className="box__title Terminal__title">{this.props.title}</h3>
      </div>
    );
  }
}

export default Terminal;