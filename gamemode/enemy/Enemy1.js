import React, {Component} from 'react'
import {AppRegistry,
	Dimensions, Animated, TouchableOpacity , 
	StyleSheet,  View, Text, ImageBackground,
	 Image, Button } from 'react-native'



export default class Enemy1 extends Component{
	render(){
		return (
            <Animated.Image source = {this.props.enemyImg1}
            style= {{
            	height:100,
            	width: 100,
            	position: 'absolute',
            	resizeMode: 'stretch',
            	left : this.props.enemyStartposX1,
            	transform: [
            	{ translateY: this.props.moveEnemyval1 },

            	]

            }}>
            </Animated.Image>

    
                  );
	}}