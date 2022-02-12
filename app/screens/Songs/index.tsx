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
    <Column
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground height={'100%' as any} source={bgImage} width={'100%' as any}>
        <Row px={20} py={20} justifyCenter>
          <Column
            bg="rgba(135, 206, 235, 0.7)"
            height={dimensions.height - 40}
            mr={10}
            width={'19%' as any}>
            <Text color="#fff" fontSize={42} ml={70} mt={(dimensions.height - 40) / 2 - 40}>
              &lt;
            </Text>
          </Column>
          <Column bg="rgba(255,255,255,0.8)" width={'60%' as any}>
            <Row px={20} py={20}>
              <Text color="#000" bold>
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
              <Text color="#000"> Amir - Rétine</Text>
            </Button>
            <Button
              px={20}
              py={20}
              borderTop
              onPress={() => {
                onClickSong('baby')
              }}>
              <Text color="#000">
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
              <Text color="#000">
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
              <Text color="#000"> Nick Lachey - I Cant Hate You Anymore</Text>
            </Button>

            <Button
              px={20}
              py={20}
              borderTop
              onPress={() => {
                onClickSong('sofia')
              }}>
              <Text color="#000"> Alvaro Soler - Sofia</Text>
            </Button>
          </Column>

          <Column bg="rgba(135, 206, 235, 0.7)" ml={19} width={'19%' as any}>
            <Text color="#fff" fontSize={42} ml={70} mt={(dimensions.height - 40) / 2 - 40}>
              &gt;
            </Text>
          </Column>
        </Row>
      </ImageBackground>
    </Column>
  )
}

export default Songs
