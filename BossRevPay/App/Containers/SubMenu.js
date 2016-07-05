import React, { PropTypes } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import Routes from '../Navigation/Routes'

// Styles
import styles from './Styles/SubMenuStyle'

class SubMenu extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>SubMenu Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(SubMenu)
