import { View, Text } from 'react-native'
import React from 'react'
import ScreenMenu from './componenet/Menus/ScreenMenu'
import { AuthProvider } from './context/authContext'

const RootNavigation = () => {
  return (
    <AuthProvider>
     <ScreenMenu/> 
     </AuthProvider>
  )
}

export default RootNavigation