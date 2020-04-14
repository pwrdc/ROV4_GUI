import React from 'react';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img:
        <h2 style={{
          zIndex: 1,
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          textAlign: 'center',
          cursor: 'pointer'
        }}>Kliknij tutaj aby połączyć z socketem</h2>
    }
  }

  getRandomRGBValue(min=0, max=255) {
    return Math.floor(Math.random() * max) + min;
  }
  getRandomRGBImgArray(width, height) {
    let rgbdata = [];
    for(let i = 0; i < width; i++){
      let row = [];
      for(let j = 0; j < height; j++){
        row.push([
          this.getRandomRGBValue(0,255),
          this.getRandomRGBValue(0,255),
          this.getRandomRGBValue(0,255)
        ]);
      }
      rgbdata.push(row);
    }
    return rgbdata;
  }
  renderRandomRGBImg(rgbarray) {
    // paint rgbadata array on a canvas
    const canvas = this.refs.canvas;
    let ctx = canvas.getContext('2d');
    for(let i = 0; i < rgbarray.length; i++){
      for(let j = 0; j < rgbarray[0].length; j++){	
        ctx.fillStyle = 'rgba('+
          rgbarray[i][j][0]+','+
          rgbarray[i][j][1]+','+
          rgbarray[i][j][2]+', 1)'; 
        ctx.fillRect(i,j,1,1);
      }
    }
  }

  animateRandomRGBImg() {
    setInterval(() => {
      this.renderRandomRGBImg(
        this.getRandomRGBImgArray(
          this.refs.canvas.width,
          this.refs.canvas.height
        )
      );
    }, 500);
  }

  renderImg(data) {
    let src = 'data:image/jpg;base64, '+data;
    this.setState({
      // set image state which will render it
      img: <img src={src} alt="ROV camera output"/>
    });
  }

  fetchImgTxtBase64(url) {
    fetch('b64.txt')
    .then(response => response.text())
    .then(data => {
      this.renderImg(
        data
      );
    });
  }

  handleClick() {
    this.props.io.emit('get_frame', 'dej mi te klatki')
  
    let i = 0;
    let prev_second = null;
    let prev_second_i = null;
    
    this.props.io.on('frame', (data) => {
      // calculate framerate 
      let date = new Date();
      let second = date.getSeconds();
      if(second !== prev_second) {
        console.log('Framerate: '+(i-prev_second_i));
        prev_second_i = i;
      }
      prev_second = second;

      // render received frame
      console.log('Frame received: '+i);
      this.renderImg(
        data.FRAME
      );
      i++
    });
  }

  componentDidMount() {
    // generate random animation under the img
    this.animateRandomRGBImg();

    // fetch image converted to base64 from file
    // this.fetchImgTxtBase64('b64.txt');
  }


  render() {
    return (
      <div className="Camera" onClick={() => this.handleClick()}>
        {this.state.img}
        <canvas style={{cursor: 'pointer'}} ref="canvas" width="4" height="3"></canvas>
      </div>
    );
  }
}
