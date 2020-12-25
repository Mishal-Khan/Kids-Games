import React, {Component} from 'react'
import {AppRegistry,
	Dimensions, Animated, TouchableOpacity , 
	StyleSheet,  View, Text, ScrollView,
  RefreshControl, ImageBackground,  BackHandler, Alert,
	 Image, Button } from 'react-native'
import Enemy from './enemy/Enemy';
import Enemy1 from './enemy/Enemy1';
import Images from './imagegame1';
//import Modal, { ModalFooter, ModalButton, ModalContent } from 'react-native-modals';
//import Dialog, { DialogContent } from 'react-native-popup-dialog';

// idhr

export default class gaming extends Component{
  componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backAction);
    }
    //back wala ko gamestart ma mention kar dein agr toh?one min ya karo compountdid mount to hata ka
 gameOver(){
    this.setState({showBTn:true}) 
    this.setState({showBTn1:true}) 
    alert('gameover');

  }
  backAction(){
    return true;
  };


   constructor(props){
      super (props);
     this.state ={
       movePlayerVal : new Animated.Value(40),                  
       playerSide: 'left',
       points:0,

       moveEnemyval: new Animated.Value(0),
      moveEnemyval1: new Animated.Value(0),
       enemyStartposX: 0,
      enemyStartposX1: 0,
       enemySide: 'left',
         enemySide1: 'right',
       enemySpeed: 4200,
       enemySpeed1: 6200,

       gameOver: false,
current: '',
       showBTn: true, 
 showBTn1: true, 

     };

    

   }

 

   gameStart(){
    this.setState({showBTn:false}),
    this.setState({showBTn1:false}),

    this.animateEnemy(),
      this.animateEnemy1()
//    this.next()
   }


//    componentWillMount(){
    
    

//  this.setState({playerSide : "left"}) 
// this.setState({points : 0}) 
// this.setState({enemySide : "left"}) 
// this.setState({enemySpeed :4200}) 
// this.setState({enemyStartposX :0}) 
// this.setState({gameOver :false}) 
// this.animateEnemy(); // is function se start hoge 
// }

  render(){
// ya initilaize kar ka images file ko  maine 
  const imagecheck =Images;

  return(
  	<ImageBackground source = {require('../assets/game1.png')}
  	style = {styles.container}
    >

{this.state.showBTn && this.state.showBTn1  == true ? (
   <View>
    <TouchableOpacity
        onPress={()=> this.gameStart()}>
     <Text> Start the game </Text>

    </TouchableOpacity>   
<TouchableOpacity
        onPress={()=> navigation.navigate('gamescreen')}
    >
     <Text> Exit Game </Text>

    </TouchableOpacity>  

    </View>
  ): null}
{this.state.showBTn && this.state.showBTn1 == false ? ( 

<View style = {styles.container}> 
<View style={{
  flex:1,
  alignItems:'center', marginTop: 80
}}>

<View style= { styles.points}>
<Text style={{ fontWeight:'bold', fontSize: 40}}> {this.state.points}</Text>
</View>
</View>

    <Animated.Image source = {require('../assets/bee.jpg')}
    style={{
      height: 100,
      width:100,////
      position:'absolute',
      zIndex: 1,
      bottom: 50,
      resizeMode:'stretch',
      transform:[
      {  translateX:this.state.movePlayerVal}
      ]
    }}></Animated.Image>
    

<Enemy enemyImg = {require('../assets/a2.png')} //source={ imageSource} // ya kia tha par ni chala 
//yaha se images change karwa de
//
enemyStartposX = {this.state.enemyStartposX}
moveEnemyval = {this.state.moveEnemyval} />

<Enemy1 enemyImg1 = { require('../assets/a8.png')} //source={ imageSource}
enemyStartposX1 = {this.state.enemyStartposX1}
moveEnemyval1 = {this.state.moveEnemyval1} />




  <View style={styles.controls}>
  
  <Text style = {styles.left} onPress = { ()=> this. movePlayer('left')}> {'<'} </Text>
  <Text style = {styles.right} onPress = { ()=> this. movePlayer('right')}> {'>'}</Text>
  
</View></View>

): null}
  	</ImageBackground>
  	)
}; 

//const movePlayer = (direction) => (

movePlayer(direction){

if (direction == 'right'){
  this.setState({ playerSide: 'right' });
  
Animated.spring(
 this.state.movePlayerVal,
 {
  toValue: Dimensions.get('window').width - 140,
  tension:120,
  useNativeDriver: true,
 }
    ).start(); 

} else if (direction == 'left'){
  this.setState({ playerSide: 'left'});
  Animated.spring(
    this.state.movePlayerVal,
{
  toValue:40,
  tension:120,
  useNativeDriver: true,
}
    ).start();
}
}

//componentDidMount(){
// this.animateEnemy();
//  this.setState({playerSide : "left"}) 
// this.setState({points : 0}) 
// this.setState({enemySide : "left"}) 
// this.setState({enemySpeed :4200}) 
// this.setState({enemyStartposX :0}) 
// this.setState({gameOver :false}) 
//}
 

animateEnemy(){
  this.state.moveEnemyval.setValue(-100);
  var windhowH = Dimensions.get('window').height;
  var r = Math.floor(Math.random() * 2) + 1;

  if(r == 2){
    r = 40;
    this.setState({ enemySide: 'left' });
  }
  else{
    r = Dimensions.get('window').width - 140;
    this.setState({ enemySide: 'right'});
  }
this.setState({ enemyStartposX: r });

var refreshIntervalId;

// ya method vo kam karta hy 
//280 height wgahera screen ki minus plus kar ka ap exact us position ko touch karwa ka over karwata ho

refreshIntervalId = setInterval( () => { //ye vala kaha call kr rahe ho

  if (this.state.moveEnemyval._value > windhowH - 280
    && this.state.moveEnemyval._value < windhowH - 180
    && this.state.playerSide == this.state.enemySide){

    clearInterval(refreshIntervalId)
  this.setState({ gameOver: true });
 this.gameOver();

 this.setState({movePlayerVal : new Animated.Value(40) })
  this.setState({playerSide : "left"}) 
this.setState({points : 0}) 
this.setState({moveEnemyval: new Animated.Value(0) })
this.setState({enemySide : "left"}) 
this.setState({enemySpeed :4200}) 
this.setState({enemyStartposX :0}) 
this.setState({gameOver :false}) 
//this.componentDidMount();
//maine net py dekha tha phala function bna ka fer componnetdidmount ma vo fucntion dalein 
//vo us tarhn se compoent wala nechy rakhta haina 

  //isko yahan kia hy call ab ya chalta he jata hy stop ni huta 
   //// yahan jab game over hoge to ya function py chala jye ga 
  }
    
}, 50); 

setInterval( () => {
  this.setState({ enemySpeed: this.state.enemySpeed - 50})
}, 20000);

Animated.timing(
this.state.moveEnemyval,
{
  toValue: Dimensions.get('window').height,
  duration: this.state.enemySpeed,
  useNativeDriver: false,
  }
  ).start(event => {
    if (event.finished && this.state.gameOver == false){
      clearInterval(refreshIntervalId);
      // bakhee animation ka moje samj nhi araha ahai lkn ges jaga pr plus kr rahy hai waha pr hm images ka name change kr sakty hai
      //kis jaga/  images ke ek array banna do aur ek variable assa rakho to recent enemy hoga
      // maine kiya tha vo kam 
      this.setState({points: ++this.state.points });
      this.animateEnemy();
    }
  });
}

/////////////////////////////////////

animateEnemy1(){
  this.state.moveEnemyval1.setValue(-100);
  var windhowH = Dimensions.get('window').height;
  var r = Math.floor(Math.random() * 2) + 1;

  if(r == 2){
    r = 40;
    this.setState({ enemySide1: 'left' });
  }
  else{
    r = Dimensions.get('window').width - 140;
    this.setState({ enemySide1: 'right'});
  }
this.setState({ enemyStartposX1: r });

var refreshIntervalId;
refreshIntervalId = setInterval( () => {

  if (this.state.moveEnemyval1._value > windhowH - 280
    && this.state.moveEnemyval1._value < windhowH - 180
    && this.state.playerSide == this.state.enemySide1){

    clearInterval(refreshIntervalId)
  this.setState({ gameOver: true });
 this.gameOver();

 this.setState({movePlayerVal : new Animated.Value(40) })
  this.setState({playerSide : "right"}) 
this.setState({points : 0}) 
this.setState({moveEnemyval1: new Animated.Value(0) })
this.setState({enemySide1 : "right"}) 
this.setState({enemySpeed1 :6200}) 
this.setState({enemyStartposX1 :0}) 
this.setState({gameOver :false}) 
//this.componentDidMount();
//maine net py dekha tha phala function bna ka fer componnetdidmount ma vo fucntion dalein 
//vo us tarhn se compoent wala nechy rakhta haina 

  //isko yahan kia hy call ab ya chalta he jata hy stop ni huta 
   //// yahan jab game over hoge to ya function py chala jye ga 
//vo back py jata to ni hy back button pr back nho gaya? ni 

  }
    
}, 50); 

setInterval( () => {
  this.setState({ enemySpeed1: this.state.enemySpeed1 - 50})
}, 20000);

Animated.timing(
this.state.moveEnemyval1,
{
  toValue: Dimensions.get('window').height,
  duration: this.state.enemySpeed1,
  useNativeDriver: false,
  }
  ).start(event => {
    if (event.finished && this.state.gameOver == false){
      clearInterval(refreshIntervalId);
      this.setState({points: ++this.state.points });
      this.animateEnemy1();
    }
  });
}



/////////////////////////////////////////
 

gameOver(){ 
this.setState({showBTn:true}) 
alert('gameover');


}
}


const styles = StyleSheet.create ({
	container:{
		flex : 1,
		position:'relative',
		resizeMode:'cover',
    width:500,
    height:900,
	},
  controls:{
    alignItems: 'center',
    flexDirection:'row',

  },
  right:{
    flex:1,
    color: 'black',
    margin: 0,
    fontSize:60,
    fontWeight: 'bold',
    textAlign: 'left',
  },
left:{
  flex:1,
    color: 'black',
    
    fontSize:60,
    fontWeight: 'bold',
    textAlign: 'right',
},
});
