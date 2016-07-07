import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'
import RoundedButton from '../Components/RoundedButton'
import SmoothButton from '../Components/SmoothButton'

// Styles
import styles from './Styles/PresentationScreenStyle'
import * as Animatable from 'react-native-animatable';

class PresentationScreen extends React.Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.bossRevpayFlat} style={styles.logo} />
            <Animatable.Text animation="zoomIn">Zoom me up, Scotty</Animatable.Text>
          </View>
      
          <RoundedButton onPress={() => this.props.navigator.push(Routes.AllComponentsScreen)}>
            Send Bread
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(PresentationScreen)
