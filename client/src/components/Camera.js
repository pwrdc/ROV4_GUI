import React from 'react';
import openSocket from 'socket.io-client';

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null
    }
  }

  // getRandomRGBValue(min=0, max=255) {
  //   return Math.floor(Math.random() * max) + min;
  // }

  // getRandomRGBImgArray(width, height) {
  //   let rgbdata = [];

  //   for(let i = 0; i < width; i++){
  //     let row = [];
  //     for(let j = 0; j < height; j++){
  //       row.push([
  //         this.getRandomRGBValue(0,255),
  //         this.getRandomRGBValue(0,255),
  //         this.getRandomRGBValue(0,255)
  //       ]);
  //     }
  //     rgbdata.push(row);
  //   }

  //   return rgbdata;
  // }

  // renderRandomRGBImg(rgbarray) {
  //   // paint rgbadata array on a canvas
  //   const canvas = this.refs.canvas;
  //   let ctx = canvas.getContext('2d');

  //   for(let i = 0; i < rgbarray.length; i++){
  //     for(let j = 0; j < rgbarray[0].length; j++){	
  //       ctx.fillStyle = 'rgba('+
  //         rgbarray[i][j][0]+','+
  //         rgbarray[i][j][1]+','+
  //         rgbarray[i][j][2]+', 1)'; 
  //       ctx.fillRect(i,j,1,1);
  //     }
  //   }
  // }

  renderImg(data) {
    let src = 'data:image/jpg;base64, '+data;
    this.setState({
      img: src // set image state which will render it
    });
  }

  componentDidMount() {
    const io = openSocket('http://localhost:5000');
    io.on('frame', data => {
      this.renderImg(
        data
      );
    });

    // // get rgbdata from server
    // fetch('b64.txt')
    // .then(response => response.text())
    // .then(data => {
    //   this.renderImg(
    //     data
    //   );
    //   // setInterval(() => {
    //   //   this.renderRandomRGBImg(
    //   //     this.getRandomRGBImgArray(
    //   //       this.refs.canvas.width,
    //   //       this.refs.canvas.height
    //   //     )
    //   //   );
    //   // }, 500);
    // });
  }

  render() {
    return (
      <div className="Camera">
        {/* <img src={ this.state.img } alt="ROV camera output"/> */}
        <canvas ref="canvas" width="640" height="480"></canvas>
      </div>
    );
  }
}

export default Camera;