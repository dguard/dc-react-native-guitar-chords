import React, { useRef, useState } from 'react'
import { Dimensions, View } from 'react-native'
import { Button } from 'components/ui/Button'
import { Column, Row } from 'components/ui/Element'
import { Image } from 'components/ui/Image'
import { ImageBackground } from 'components/ui/ImageBackground'
import { Text } from 'components/ui/Text'
import Sound from 'react-native-sound'

import {
  bgImage,
  chordAIcon,
  chordAmIcon,
  chordBmIcon,
  chordCIcon,
  chordDIcon,
  chordDmIcon,
  chordE7Icon,
  chordEIcon,
  chordEmIcon,
  chordFIcon,
  chordGIcon,
} from 'assets/images'

import NavigationService from 'navigation/NavigationService'

import BabySheets from './melodies/baby'
import BabyChords from './melodies/baby-chords'
import ICantHateYouAnymoreSheets from './melodies/icanthateyouanymore'
import ICantHateYouAnymoreChords from './melodies/icanthateyouanymore-chords'
import ObsessionSheets from './melodies/obsession'
import ObsessionChords from './melodies/obsession-chords'
import RetineSheets from './melodies/retine'
import RetineChords from './melodies/retine-chords'
import SofiaSheets from './melodies/sofia'
import SofiaChords from './melodies/sofia-chords'

const dimensions = Dimensions.get('window')

Sound.setCategory('Playback')

type Props = {
  route: any
}

function Melody({ route }: Props) {
  const { melodyName } = route.params

  const [selectedSheet, setSelectedSheet] = useState(1)
  const currentSound = useRef(null as any)

  const playChord = (filename: any) => {
    try {
      const newSound = new Sound(filename, Sound.MAIN_BUNDLE, (error: any) => {
        if (error) {
          console.log('ERROR ON LOAD', error)
          return
        }
        if (currentSound && currentSound.current) {
          currentSound.current.release()
        }
        newSound.setVolume(1)
        currentSound.current = newSound.play((success: any) => {
          if (success) {
            console.log('Sound Played Successfully')
          } else {
            console.log('unable to play Sound')
          }
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  let Sheets: any
  let chords: any

  const chordImages: any = {
    'chord-am.png': chordAmIcon,
    'chord-em.png': chordEmIcon,
    'chord-e7.png': chordE7Icon,
    'chord-c.png': chordCIcon,

    'chord-g.png': chordGIcon,
    'chord-dm.png': chordDmIcon,

    'chord-f.png': chordFIcon,
    'chord-e.png': chordEIcon,

    'chord-d.png': chordDIcon,
    'chord-a.png': chordAIcon,

    'chord-bm.png': chordBmIcon,
  }

  switch (melodyName) {
    case 'baby': {
      Sheets = BabySheets
      chords = BabyChords
      break
    }
    case 'sofia': {
      Sheets = SofiaSheets
      chords = SofiaChords
      break
    }
    case 'retine': {
      Sheets = RetineSheets
      chords = RetineChords
      break
    }
    case 'obsession': {
      Sheets = ObsessionSheets
      chords = ObsessionChords
      break
    }
    case 'icanthateyouanymore': {
      Sheets = ICantHateYouAnymoreSheets
      chords = ICantHateYouAnymoreChords
      break
    }
    default: {
      Sheets = BabySheets
      chords = BabyChords
    }
  }

  const onClickMenu = () => {
    NavigationService.navigate('Songs')
  }

  const onClickPrevSheet = () => {
    if (selectedSheet > 1) {
      setSelectedSheet(selectedSheet - 1)
    }
  }
  const onClickNextSheet = () => {
    if (selectedSheet < Object.keys(Sheets).length) {
      setSelectedSheet(selectedSheet + 1)
    }
  }

  return (
    <Column alignCenter justifyCenter stretch>
      <ImageBackground resizeMode="cover" source={bgImage} fullHeight fullWidth>
        <Row px={20} py={20} justifyCenter>
          <Column height={dimensions.height - 90} width={'43%' as any}>
            <Column bg="screen.melody.chords.bg" height={dimensions.height - 90} mb={20} mr={40}>
              <Row ml={-20} px={20} py={20}>
                <Text color="screen.melody.chords.color" alignCenter bold fullWidth>
                  Chords 1/1
                </Text>
              </Row>

              <Row ml={-2}>
                {chords.slice(0, 4).map((chord: any) => (
                  <Button key={chord[0]} width={80} onPress={() => playChord(chord[2])}>
                    <Text ml={20} alignCenter bold>
                      {chord[0]}
                    </Text>
                    <Image mt={-30} source={chordImages[chord[1]]} width={100} />
                  </Button>
                ))}
              </Row>

              <Row ml={-2} mt={-20}>
                {chords.slice(4).map((chord: any) => (
                  <Button key={chord[0]} width={80} onPress={() => playChord(chord[2])}>
                    <Text ml={20} alignCenter bold>
                      {chord[0]}
                    </Text>
                    <Image mt={-30} source={chordImages[chord[1]]} width={100} />
                  </Button>
                ))}
              </Row>
            </Column>
            <Button
              bg="screen.melody.menuButton.bg"
              px={10}
              py={10}
              width={60}
              onPress={onClickMenu}>
              <Text>Menu</Text>
            </Button>
          </Column>
          <Column bg="screen.melody.lyrics.title.bg" width={'52%' as any}>
            <Column ml={-20} pb={2} pt={20}>
              <Text color="screen.melody.lyrics.title.color" alignCenter bold fullWidth>
                {melodyName.slice(0, 1).toUpperCase() + melodyName.slice(1)} {selectedSheet}/
                {Object.keys(Sheets).length}
              </Text>
            </Column>
            <Row>
              <Button
                height={dimensions.height - 110 - 40}
                mr={2}
                width={'14%' as any}
                onPress={onClickPrevSheet}>
                <Text
                  color="screen.melody.lyrics.leftArrowButton.color"
                  fontSize={28}
                  ml={30}
                  mt={(dimensions.height - 110 - 40) / 2 - 20}>
                  &lt;
                </Text>
              </Button>

              {selectedSheet &&
                [selectedSheet].map(key => (
                  <Column height={340} key={`sheet_${key}`} width={'70%' as any}>
                    {Sheets[key].map((line: any, index: any) => {
                      if (line.length === 4) {
                        return (
                          <View key={`line_${JSON.stringify(line)}`}>
                            <Text fontSize={12}>{line[0]}</Text>
                            <Text fontSize={12}>{line[1]}</Text>
                            <Text fontSize={10} bold fullWidth>
                              {line[2]}
                            </Text>
                            <Text fontSize={12} lineHeight="20px">
                              {line[3]}
                            </Text>
                          </View>
                        )
                      }
                      if (line.length === 3) {
                        return (
                          <View key={`line_${JSON.stringify(line)}`}>
                            <Text fontSize={12}>{line[0]}</Text>
                            <Text fontSize={10} bold fullWidth>
                              {line[1]}
                            </Text>
                            <Text fontSize={12} lineHeight="20px">
                              {line[2]}
                            </Text>
                          </View>
                        )
                      }
                      if (line.length === 2) {
                        return (
                          <View key={`line_${JSON.stringify(line)}`}>
                            <Text fontSize={10} bold fullWidth>
                              {line[0]}
                            </Text>
                            <Text fontSize={12} lineHeight="20px">
                              {line[1]}
                            </Text>
                          </View>
                        )
                      }
                      return <View />
                    })}
                  </Column>
                ))}

              <Button ml={-2} width={'14%' as any} onPress={onClickNextSheet}>
                <Text
                  color="screen.melody.lyrics.rightArrowButton.color"
                  fontSize={28}
                  ml={30}
                  mt={(dimensions.height - 110 - 40) / 2 - 20}>
                  &gt;
                </Text>
              </Button>
            </Row>
          </Column>
        </Row>
      </ImageBackground>
    </Column>
  )
}

export default Melody
