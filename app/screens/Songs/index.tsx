import React, {useState} from "react";
import styles from "app/screens/Login/styles";


import {Dimensions, View, ImageBackground, Text, TouchableOpacity} from 'react-native';


let dimensions = Dimensions.get('window');
console.log(dimensions);


import { TextInput } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import NavigationService from 'app/navigation/NavigationService';


const componentDidMount = (cb) => {
    React.useEffect(cb)
};

const http_get = (url: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                // console.log('success', request.responseText);
                return resolve(request);
            } else {
                console.warn('error');
                return reject(request);
            }
        };

        request.open('GET', url);
        request.send();
    });
}


const Songs: React.FC = () => {

    const onClickSong = (melodyName: any) => {
        NavigationService.navigate('Melody', {
            melodyName: melodyName
        });
    };


    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/bg.png")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <View style={{padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: '19%', height: dimensions.height - 40, backgroundColor: 'rgba(135, 206, 235, 0.7)', marginRight: 10}}><Text style={{color: '#fff', fontSize: 42, marginTop: (dimensions.height-40)/2 - 40, marginLeft: 70}}>&lt;</Text></View>
                    <View style={{width: '60%', backgroundColor: 'rgba(255,255,255,0.8)'}}>
                        <View style={{padding: 20}}><Text style={{color: '#000', fontWeight: 'bold'}}>Songs</Text></View>

                        <TouchableOpacity onPress={() => {onClickSong("retine")}} style={{padding: 20, borderTopWidth: 1, borderTopColor: '#fff'}}><Text style={{color: '#000'}}> Amir - Rétine</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {onClickSong("baby")}} style={{padding: 20, borderTopWidth: 1, borderTopColor: '#fff'}}><Text style={{color: '#000'}}> Clean Bandit feat. Marina and The Diamonds & Luis Fonsi - Baby</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {onClickSong("obsession")}} style={{padding: 20, borderTopWidth: 1, borderTopColor: '#fff'}}><Text style={{color: '#000'}}> Consoul Trainin feat. S. Aderinto, DuoViolins, S. Ader - Obsession</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => {onClickSong("icanthateyouanymore")}} style={{padding: 20, borderTopWidth: 1, borderTopColor: '#fff'}}><Text style={{color: '#000'}}> Nick Lachey - I Cant Hate You Anymore</Text></TouchableOpacity>

                        <TouchableOpacity onPress={() => {onClickSong("sofia")}} style={{padding: 20, borderTopWidth: 1, borderTopColor: '#fff'}}><Text style={{color: '#000'}}> Alvaro Soler - Sofia</Text></TouchableOpacity>

                    </View>

                    <View style={{width: '19%', marginLeft: 10, backgroundColor: 'rgba(135, 206, 235, 0.7)'}}><Text style={{color: '#fff', fontSize: 42, marginTop: (dimensions.height-40)/2 - 40, marginLeft: 70}}>&gt;</Text></View>

                </View>

            </ImageBackground>
        </View>
    );
};

export default Songs;