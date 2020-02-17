import React, { Component } from 'react';
import './GradientPicker.css';
import random from '../../images/random.png';
import hide from '../../images/hide.png';
import save from '../../images/save.png';
import html2canvas from 'html2canvas';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const RedSlider = withStyles({
  root: {
    color: '#fff',
    height: 8
  },
  thumb: {
    color: ' #bb0000'
  }
})(Slider);

const GreenSlider = withStyles({
  root: {
    color: '#fff',
    height: 8
  },
  thumb: {
    color: ' #00bb00'
  }
})(Slider);

const BlueSlider = withStyles({
  root: {
    color: '#fff',
    height: 8
  },
  thumb: {
    color: ' #0000bb'
  }
})(Slider);

class GradientPicker extends Component {
  state = {
    colors: [
      { r: 0, g: 0, b: 0 },
      { r: 0, g: 0, b: 0 }
    ],
    initColors: [
      { r: 0, g: 0, b: 0 },
      { r: 0, g: 0, b: 0 }
    ],
    copiedOpacity: 0,
    rotation: 120,
    uiOpacity: 1,
    randomizeButtonColor: 'white',
    gradientImage: null
  };

  constructor(props) {
    super(props);
    this.imageSave = React.createRef();
  }

  componentDidMount() {
    let colors = [
      { r: randomInt(255), g: randomInt(255), b: randomInt(255) },
      { r: randomInt(255), g: randomInt(255), b: randomInt(255) }
    ];
    this.setState({ colors: colors, initColors: colors });
  }

  getGradient = () => {
    let colors = '';
    this.state.colors.forEach(color => {
      colors += 'rgb(' + color.r + ', ' + color.g + ', ' + color.b + '), ';
    });
    colors = colors.substring(0, colors.length - 2);
    let gradientStyle =
      'linear-gradient(' + this.state.rotation + 'deg, ' + colors + ')';
    return { background: gradientStyle };
  };

  updateColor = (index, color, value, allColors) => {
    // let value = event.target.value;
    if (allColors) {
      this.setState({ colors: allColors, initColors: allColors });
      return;
    }
    let colors = this.state.colors;
    colors[index][color] = value;
    this.setState({ colors: colors, initColors: colors });
  };

  updateRotation = event => {
    let rotation = event.target.value;
    this.setState({ rotation });
  };

  handleSliderChange = () => {};

  getColorSlider = (index, colorLetter) => {
    switch (colorLetter) {
      case 'r':
        return (
          <RedSlider
            value={this.state.initColors[index][colorLetter]}
            min={0}
            max={255}
            onChange={(_, newValue) => {
              this.updateColor(index, colorLetter, newValue);
            }}
            aria-labelledby="continuous-slider"
          />
        );
      case 'g':
        return (
          <GreenSlider
            value={this.state.initColors[index][colorLetter]}
            min={0}
            max={255}
            onChange={(_, newValue) => {
              this.updateColor(index, colorLetter, newValue);
            }}
            aria-labelledby="continuous-slider"
          />
        );
      default:
        return (
          <BlueSlider
            value={this.state.initColors[index][colorLetter]}
            min={0}
            max={255}
            onChange={(_, newValue) => {
              this.updateColor(index, colorLetter, newValue);
            }}
            aria-labelledby="continuous-slider"
          />
        );
    }
  };

  getSliderBlock = index => {
    return (
      <div key={index} className="sliderBlock">
        {this.getColorSlider(index, 'r')}
        {this.getColorSlider(index, 'g')}
        {this.getColorSlider(index, 'b')}
      </div>
    );
  };

  colorSliders = () => {
    return (
      <div className="slidersBlockContainer">
        {this.state.colors.map((color, index) => {
          return this.getSliderBlock(index);
        })}
      </div>
    );
  };

  opacityToggle = () => {
    return (
      <button
        className={'opacityToggle roundButton'}
        onMouseEnter={() => this.setState({ uiOpacity: 0 })}
        onMouseLeave={() => this.setState({ uiOpacity: 1 })}
      >
        <img src={hide} alt="hide"></img>
      </button>
    );
  };

  saveButton = () => {
    return (
      <button
        className={'roundButton saveButton'}
        onClick={() => {
          this.setState({ uiOpacity: 0 });
          setTimeout(() => this.setState({ uiOpacity: 1 }), 150);
          setTimeout(() => {
            html2canvas(document.body).then(function(canvas) {
              canvas.id = 'canvas';
              document.getElementById('imageSave').appendChild(canvas);
              var link = document.createElement('a');
              link.download = 'awesome-gradient.png';
              link.href = document.getElementById('canvas').toDataURL();
              link.click();
            });
          }, 100);
        }}
      >
        {' '}
        <img src={save} alt="hide"></img>
      </button>
    );
  };

  randomizeButton = () => {
    return (
      <button
        style={{ background: this.state.randomizeButtonColor }}
        className={'randomizeButton roundButton'}
        onClick={() => {
          let allColors = [
            { r: randomInt(255), g: randomInt(255), b: randomInt(255) },
            { r: randomInt(255), g: randomInt(255), b: randomInt(255) }
          ];
          this.setState({
            allColors
          });
          this.updateColor(null, null, null, allColors);
        }}
      >
        {' '}
        <img src={random} alt="randomize"></img>
      </button>
    );
  };

  cssButton = () => {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ copiedOpacity: 1 });
            setTimeout(() => this.setState({ copiedOpacity: 0 }), 500);
            let copyText = document.getElementById('css');
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand('copy');
          }}
          className={'randomizeButton roundButton'}
        >
          CSS
        </button>
        <div className="copied" style={{ opacity: this.state.copiedOpacity }}>
          Copied!
        </div>
      </div>
    );
  };

  render() {
    let gradient = this.getGradient();
    // console.log(gradient.background);
    return (
      <div style={gradient} className="gradientBackground">
        <div
          style={{
            opacity: this.state.uiOpacity,
            transitionDuration: '300ms'
          }}
        >
          <div className="buttons">
            {this.saveButton()}
            {this.cssButton()}
            {this.randomizeButton()}
            {this.opacityToggle()}
          </div>
          {this.colorSliders()}
        </div>
        <div id="imageSave" style={{ display: 'none' }}></div>
        <input id="css" onChange={() => {}} value={gradient.background}></input>
      </div>
    );
  }
}

export default GradientPicker;

//return a randnom number from 0-max(inclusive)
function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
