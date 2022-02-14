import React from 'react'
import { Dimensions } from 'react-native'
import { Button } from 'components/ui/Button'
import { Column, Row } from 'components/ui/Element'
import { ImageBackground } from 'components/ui/ImageBackground'
import { Text } from 'components/ui/Text'

import { bgImage } from 'assets/images'

import NavigationService from 'navigation/NavigationService'

const dimensions = Dimensions.get('window')

function Songs() {
  const onClickSong = (melodyName: any) => {
    NavigationService.navigate('Melody', {
      melodyName,
    })
  }

  return (
    <Column alignCenter justifyCenter stretch>
      <ImageBackground source={bgImage} fullHeight fullWidth>
        <Row px={20} py={20} justifyCenter>
          <Column
            bg="screen.songs.columnLeftArrow.bg"
            height={dimensions.height - 40}
            mr={10}
            width={'19%' as any}>
            <Text
              color="screen.songs.columnLeftArrow.color"
              fontSize={42}
              ml={70}
              mt={(dimensions.height - 40) / 2 - 40}>
              &lt;
            </Text>
          </Column>
          <Column bg="screen.songs.songsTitle.bg" width={'60%' as any}>
            <Row px={20} py={20}>
              <Text color="screen.songs.songsTitle.color" bold>
                Songs
              </Text>
            </Row>

            <Button
              px={20}
              py={20}
              borderTop
              onPress={() => {
                onClickSong('retine')
              }}>
              <Text color="screen.songs.buttonSong.color"> Amir - Rétine</Text>
            </Button>
            <Button
              px={20}
              py={20}
              borderTop
              onPress={() => {
                onClickSong('baby')
              }}>
              <Text color="screen.songs.buttonSong.color">
                {' '}
                Clean Bandit feat. Marina and The Diamonds & Luis Fonsi - Baby
              </Text>
            </Button>
            <Button
              px={20}
              py={20}
              borderTop
              onPress={() => {
                onClickSong('obsession')
              }}>
              <Text color="screen.songs.buttonSong.color">
                {' '}
                Consoul Trainin feat. S. Aderinto, DuoViolins, S. Ader - Obsession
              </Text>
            </Button>
            <Button
              px={20}
              py={20}
              borderTop
              onPress={() => {
                onClickSong('icanthateyouanymore')
              }}>
              <Text color="screen.songs.buttonSong.color">
                {' '}
                Nick Lachey - I Cant Hate You Anymore
              </Text>
            </Button>

            <Button
              px={20}
              py={20}
              borderTop
              onPress={() => {
                onClickSong('sofia')
              }}>
              <Text color="screen.songs.buttonSong.color"> Alvaro Soler - Sofia</Text>
            </Button>
          </Column>

          <Column bg="screen.songs.columnRightArrow.bg" ml={19} width={'19%' as any}>
            <Text
              color="screen.songs.columnLeftArrow.color"
              fontSize={42}
              ml={70}
              mt={(dimensions.height - 40) / 2 - 40}>
              &gt;
            </Text>
          </Column>
        </Row>
      </ImageBackground>
    </Column>
  )
}

export default Songs
