import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Touchable,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons} from "react-native-vector-icons/Ionicons";
import * as Speech from "expo-speech";
let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let stories = require("./temp_stories.json");

export default class StoryRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      speackercolor:'gray',
    };
  }
 initiatetexttospeech = async(titile,auther,story,moral)=>{
  const currentcolor = this.state.speackercolor
  this.setState({
       speackercolor:currentcolor==='gray'?'#ee8249':'gray'

  })
  if(currentcolor==='gray'){
       Speech.speak(`${titile} by ${auther}`)
       Speech.speak(story)
       Speech.speak("moral of the story is ")
       Speech.speak(moral)
  }
  else{
       Speech.stop()
  }
 }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

  }
  
  render() {
     if (!this.state.fontsLoaded) {
       return <AppLoading />;
     } else {
       return (
         <View style={styles.container}>
           <SafeAreaView style={styles.droidSafeArea} />
           <View style={styles.appTitle}>
             <View style={styles.appIcon}>
               <Image
                 source={require("../assets/logo.png")}
                 style={styles.iconImage}
               ></Image>
             </View>
             <View style={styles.appTitleTextContainer}>
               <Text style={styles.appTitleText}>Storytelling App</Text>

             </View>
           </View>
           <View
           style={{flex:1}}
           >
          <ScrollView style={styles.StoryCard}>
          <Image
          style={styles.storyImage} 
          source={require("../assets/story_image_1.png")}/>
          <View style={styles.dataContainer}>
          <View style={{
               justifyContent:'center',
               flex:0.8
          }}>
          <Text
          style={[styles.storyText,{
               fontSize:RFValue(25)
          }]}
          >{this.props.route.params.story.title}</Text>
          <Text
          style={[styles.storyText,{
               fontSize:RFValue(16)
          }]}
          >{this.props.route.params.story.author}</Text>
          <Text
          style={[styles.storyText,{
               fontSize:RFValue(15)
          }]}
          >{this.props.route.params.story.created_on}</Text>
          
          
          </View>
          <View style={{flex:0.2}}>
          <TouchableOpacity
          onPress={()=>{
               this.initiatetexttospeech(this.props.route.params.story.title,this.props.route.params.story.author,this.props.route.params.story.story,this.props.route.params.story.moral);
          }}
          >
               <Ionicons name={'volume-high-outline'} size={RFValue(30)} color={"gray"} style={{margin:RFValue(15)}}/>
          </TouchableOpacity>
          </View>
          <View style={{
               padding:RFValue(10)
          }}>
          <Text
          style={[styles.storyText,{
               fontSize:RFValue(12)
          }]}
          >{this.props.route.params.story.story}</Text>
          <Text
          style={[styles.storyText,{
               fontSize:RFValue(14)
          }]}
          >{this.props.route.params.story.moral}</Text>
          
          
          </View>
          <View style={{marginBottom:RFValue(20)}}>
          <View style={styles.iconStyle}>
          <Iconicons name={'heart'} size={RFValue(30)} color={"white"}/>
          <Text style={styles.likeText}>12M</Text>
          </View>
          </View>
          </View>
          </ScrollView>
           </View>
           </View>
          )

     }
}     
}
  
  
const styles = StyleSheet.create({
     StoryCard:{
     backgroundColor:"#2f345d",
          padding:RFValue(10),

     },
     container: {
       flex: 1,
       backgroundColor: "#15193c"
     },
     droidSafeArea: {
       marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
     },
     appTitle: {
       flex: 0.07,
       flexDirection: "row"
     },
     appIcon: {
       flex: 0.3,
       justifyContent: "center",
       alignItems: "center"
     },
     iconImage: {
       width: "100%",
       height: "100%",
       resizeMode: "contain"
     },
     appTitleTextContainer: {
       flex: 0.7,
       justifyContent: "center"
     },
     appTitleText: {
       color: "white",
       fontSize: RFValue(28),
       fontFamily: "Bubblegum-Sans"
     },
     cardContainer: {
       flex: 0.85
     },
     storyImage:{
     width:"100%",
     alignSelf:'center',
     resizeMode:'contain',
     height:RFValue(200),

     },
     dataContainer: {
          flexDirection: "row",
          padding: RFValue(20),
        },
        storyText: {
          fontFamily: "Bubblegum-Sans",
          color: "white",
        },
        iconStyle: {
          justifyContent: "center",
          alignSelf: "center",
          flexDirection: "row",
          backgroundColor: "red",
          borderRadius: RFValue(20),
          width: RFValue(160),
          height: RFValue(30),
        },
        likeText: {
          color: "white",
          fontFamily: "Bubblegum-Sans",
          fontSize: RFValue(25),
          marginLeft: RFValue(5),
      
          alignSelf: "center",
        },
   });
  
   
