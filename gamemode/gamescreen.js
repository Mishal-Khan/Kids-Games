import React from 'react'
import {Dimensions,TouchableOpacity,StyleSheet,  View, Text, ImageBackground, Image, Button} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'  
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo' 

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SoundPlayer from 'react-native-sound-player';

import { appSounds } from '../App';
import Sound from 'react-native-sound';

import check1 from '../simplescreen/check1';
//import check2 from '../simplescreen/check2';

import TrackPlayer from 'react-native-track-player';

export default function gamescreen({navigation}){
	return(
		//<View>
		//<Text> This is second screen</Text>
		//<TouchableOpacity
		//	onPress={()=>navigation.goBack()}
		//>
		//		<AntDesign name='arrowleft' size={24} />
		//</TouchableOpacity>
		//</View>
<View>

		<View style={{ 
        backgroundColor: 'steelblue',
      
      TintColor: '#fff', flexDirection:'row' , justifyContent:"space-between" , padding:15 , borderWidth:1 }}>
				<View style={{fontSize:60, padding:5, width: 35,backgroundColor:'white',}}>
				
				<TouchableOpacity 
			//onPress={()=>navigation.goBack()}
			onPress={() =>navigation.toggleDrawer()}
		>
				<Entypo name='menu' size={24} />
		</TouchableOpacity>

				</View>
				<View>
				<Text style={{  color: 'white', fontSize:22, }} >Arabic Learning</Text>
				</View>
				<View>
				</View>

		</View>


<ImageBackground 
        style={{ width:400, height:500}}
       //width: 340, height:200, justifyContent:'center', textAlign: 'center'}}
        //We are using online image to set background
 //       source={{
   //       uri:
     //       'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        //}}
        source= {require('../assets/game1.png')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
   //   onPress={()=>this.props.navigation.navigate('aboutscreen')}


        >
<View>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('gaming')}   
 >     
 <Image 
source= {require('../assets/play.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', marginTop:60, borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 <Text style={{ width:80, height:40, textAlign:'center', color:'blue'}}> Game 1 Play </Text>
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('game2')}   
 >     
 <Image 
source= {require('../assets/next.png')}
  style={{   borderWidth: 2, marginTop:40, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 </View>
      </ImageBackground>
</View>



)};