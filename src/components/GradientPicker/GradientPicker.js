import React, { Component } from 'react';
import './GradientPicker.css';
import dice from '../../images/dice.png';
import eyes from '../../images/close-eyes.png';

class GradientPicker extends Component {
	state = {
		colors: [
			{ r: randomInt(255), g: randomInt(255), b: randomInt(255) },
			{ r: randomInt(255), g: randomInt(255), b: randomInt(255) }
		],
		rotation: 120,
		uiOpacity: 1,
		randomizeButtonColor: 'white'
	};

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

	addColor = () => {
		let colors = this.state.colors;
		colors.push({ r: 200, g: 100, b: 202 });
		this.setState({
			colors
		});
	};

	updateColor = (index, color, event) => {
		let value = event.target.value;
		let colors = this.state.colors;
		colors[index][color] = value;
		this.setState({ colors });
	};

	updateRotation = event => {
		let rotation = event.target.value;
		this.setState({ rotation });
	};

	getColorSlider = (index, colorLetter) => {
		return (
			<div className="colorSliderRow">
				<div className={'colorSlider'}>
					<input
						type="range"
						min="0"
						max="255"
						value={this.state.colors[index][colorLetter]}
						onChange={event => this.updateColor(index, colorLetter, event)}
					></input>
				</div>
				<div className={'colorIcon-' + colorLetter + ' colorIcon'}></div>
				{/* <br /> */}
			</div>
		);
	};

	getSliderBlock = index => {
		return (
			<div className="sliderBlock">
				{this.getColorSlider(index, 'r')}
				{this.getColorSlider(index, 'g')}
				{this.getColorSlider(index, 'b')}
			</div>
		);
	};

	// addColorButton = () => {
	// 	return this.state.colors.length < 5 ? (
	// 		<button className="addColor roundButton" onClick={this.addColor}>
	// 			+
	// 		</button>
	// 	) : (
	// 		''
	// 	);
	// };

	colorSliders = () => {
		return (
			<div className="slidersBlockContainer">
				{this.state.colors.map((color, index) => {
					return this.getSliderBlock(index);
				})}
			</div>
		);
	};

	rotationSlider = () => {
		return (
			<input
				className={'rotationSlider'}
				type="range"
				min="90"
				max="450"
				value={this.state.rotation}
				onChange={event => this.updateRotation(event)}
			></input>
		);
	};

	opacityToggle = () => {
		return (
			<button
				className={'opacityToggle roundButton'}
				onMouseEnter={() => this.setState({ uiOpacity: 0 })}
				onMouseLeave={() => this.setState({ uiOpacity: 1 })}
			>
				<img src={eyes} alt="hide"></img>
			</button>
		);
	};

	randomizeButton = () => {
		return (
			<button
				style={{ background: this.state.randomizeButtonColor }}
				className={'randomizeButton roundButton'}
				onClick={() => {
					this.setState({
						colors: [
							{ r: randomInt(255), g: randomInt(255), b: randomInt(255) },
							{ r: randomInt(255), g: randomInt(255), b: randomInt(255) }
						],
						randomizeButtonColor: 'darkgray'
					});
					setTimeout(
						() =>
							this.setState({
								randomizeButtonColor: 'white'
							}),
						200
					);
				}}
			>
				{' '}
				<img src={dice} alt="randomize"></img>
			</button>
		);
	};

	render() {
		return (
			<div style={this.getGradient()} className="gradientBackground">
				<div
					style={{ opacity: this.state.uiOpacity, transitionDuration: '0.5s' }}
				>
					{this.colorSliders()}
					{this.randomizeButton()}
					{this.opacityToggle()}
					{/* {this.rotationSlider()} */}
					{/* {this.addColorButton()} */}
				</div>
			</div>
		);
	}
}

export default GradientPicker;

//return a randnom number from 0-max(inclusive)
function randomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}
