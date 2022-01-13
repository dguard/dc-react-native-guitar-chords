import React, {useRef, useState} from "react";
import styles from "app/screens/Login/styles";

import { Dimensions, View, ImageBackground, Text, TouchableOpacity, Image, AppState } from 'react-native';
import { TextInput } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import NavigationService from "app/navigation/NavigationService";
import { useSelector } from "react-redux";
import { ILoginState } from "app/models/reducers/login";
import FullScreenAndroid from "react-native-fullscreen-chz";


let dimensions = Dimensions.get('window');
console.log(dimensions);

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const componentDidMount = (cb: any) => {
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



interface IState {
    loginReducer: ILoginState;
}

const Melody: React.FC = ({ route }) => {
    const { melodyName } = route.params;

    const [selectedSheet, setSelectedSheet] = useState(1);
    const currentSound = useRef(null as any);

    const playChord = (filename: any) => {
        try {
            const newSound = new Sound(filename, Sound.MAIN_BUNDLE, (error: any) => {
                    if (error) {
                        console.log('ERROR ON LOAD', error);
                        return;
                    }
                    if (currentSound && currentSound.current) {
                        currentSound.current.release();
                    }
                    newSound.setVolume(1);
                    currentSound.current = newSound.play((success: any) => {
                        if (success) {
                            console.log('Sound Played Successfully');
                        } else {
                            console.log('unable to play Sound');
                        }
                    });
                },
            );
        } catch (error) {
            console.error(error);
        }
    };

    let Sheets: any;
    let chords: any;

    const chordImages: any = {
        "chord-am.png": require("../../assets/chord-am.png"),
        "chord-em.png": require("../../assets/chord-em.png"),
        "chord-e7.png": require("../../assets/chord-e7.png"),
        "chord-c.png": require("../../assets/chord-c.png"),

        "chord-g.png": require("../../assets/chord-g.png"),
        "chord-dm.png": require("../../assets/chord-dm.png"),

        "chord-f.png": require("../../assets/chord-f.png"),
        "chord-e.png": require("../../assets/chord-e.png"),

        "chord-d.png": require("../../assets/chord-d.png"),
        "chord-a.png": require("../../assets/chord-a.png"),

        "chord-bm.png": require("../../assets/chord-bm.png"),
}

    if(melodyName === 'baby') {
        Sheets = require('./baby.json');
        chords = require('./baby-chords.json');
        console.log(chords);
    } else if (melodyName === 'sofia') {
        Sheets = require('./sofia.json');
        chords = require('./sofia-chords.json');
    } else if (melodyName === 'retine') {
        Sheets = require('./retine.json');
        chords = require('./retine-chords.json');
    } else if(melodyName === 'obsession') {
        Sheets = require('./obsession.json');
        chords = require('./obsession-chords.json');
    } else if(melodyName === 'icanthateyouanymore') {
        Sheets = require('./icanthateyouanymore.json');
        chords = require('./icanthateyouanymore-chords.json');
    }


    const onClickMenu = () => {
        NavigationService.navigate('Songs');
    };


    const onClickPrevSheet = () => {
        if(selectedSheet > 1) {
            setSelectedSheet(selectedSheet-1);
        }
    };
    const onClickNextSheet = () => {
        if(selectedSheet < Object.keys(Sheets).length) {
            setSelectedSheet(selectedSheet+1);
        }
    }


    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/bg.png")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                <View style={{padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{width: '43%', height: dimensions.height - 90}}>
                        <View style={{height: dimensions.height - 90, backgroundColor: 'rgba(255, 255, 255, 0.8)', marginRight: 40, marginBottom: 20}}>
                            <View style={{padding: 20, marginLeft: -20}}><Text style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>Chords 1/1</Text></View>

                            <View style={{flexDirection: 'row', marginLeft: -5}}>
                                {chords.slice(0, 4).map((chord: any, index: any) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => playChord(chord[2])} style={{width: 80}}>
                                            <Text style={{textAlign: 'center', fontWeight: 'bold', marginLeft: 20}}>{ chord[0] }</Text>
                                            <Image style={{width: 100, resizeMode: 'contain', marginTop: -30}} source={chordImages[chord[1]]}/>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>

                            <View style={{flexDirection: 'row', marginTop: -20, marginLeft: -5}}>
                                {chords.slice(4).map((chord: any, index: any) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => playChord(chord[2])} style={{width: 80}}>
                                            <Text style={{textAlign: 'center', fontWeight: 'bold', marginLeft: 20}}>{ chord[0] }</Text>
                                            <Image style={{width: 100, resizeMode: 'contain', marginTop: -30}} source={chordImages[chord[1]]}/>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>


                        </View>
                        <TouchableOpacity onPress={onClickMenu} style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', width: 60, padding: 10}}><Text>Menu</Text></TouchableOpacity>

                    </View>
                    <View style={{width: '52%', backgroundColor: 'rgba(255,255,255,0.8)'}}>
                        <View style={{paddingTop: 20, paddingBottom: 5, marginLeft: -20}}><Text style={{color: '#000', fontWeight: 'bold', textAlign: 'center'}}>{ melodyName.slice(0,1).toUpperCase() + melodyName.slice(1) } {selectedSheet}/{Object.keys(Sheets).length}</Text></View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity onPress={onClickPrevSheet} style={{width: '14%', height: dimensions.height - 110 - 40, marginRight: 5}}><Text style={{color: '#fff', fontSize: 28, marginTop: (dimensions.height-110-40)/2 - 20, marginLeft: 30}}>&lt;</Text></TouchableOpacity>

                            { selectedSheet && [selectedSheet].map((key) => {
                                return (
                                    <View key={`sheet_${key}`} style={{width: '70%', height: 340}}>
                                        {Sheets[key].map((line: any, index: any) => {
                                            if(line.length === 4) {
                                                return (<View key={`line_${index}`}>
                                                    <Text style={{fontSize: 12}}>{line[0]}</Text>
                                                    <Text style={{fontSize: 12}}>{line[1]}</Text>
                                                    <Text style={{width: '100%', fontWeight: 'bold', fontSize: 10}}>{line[2]}</Text>
                                                    <Text style={{fontSize: 12, lineHeight: 20}}>{line[3]}</Text>
                                                </View>)
                                            } else if(line.length === 3) {
                                                return (<View key={`line_${index}`}>
                                                    <Text style={{fontSize: 12}}>{line[0]}</Text>
                                                    <Text style={{width: '100%', fontWeight: 'bold', fontSize: 10}}>{line[1]}</Text>
                                                    <Text style={{fontSize: 12, lineHeight: 20}}>{line[2]}</Text>
                                                </View>)
                                            } else if(line.length === 2) {
                                                return (<View key={`line_${index}`}>
                                                    <Text style={{width: '100%', fontWeight: 'bold', fontSize: 10}}>{line[0]}</Text>
                                                    <Text style={{fontSize: 12, lineHeight: 20}}>{line[1]}</Text>
                                                </View>)
                                            }
                                        })}
                                    </View>
                                )
                            })}

                            <TouchableOpacity onPress={onClickNextSheet} style={{width: '14%', marginLeft: 5}}><Text style={{color: '#fff', fontSize: 28, marginTop: (dimensions.height-110-40)/2 - 20, marginLeft: 30}}>&gt;</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>

            </ImageBackground>
        </View>
    );
};

export default Melody;