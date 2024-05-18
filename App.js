import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/button';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import Navigation from './src/navigation';
import theme from './src/utils/themes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>

        <Navigation />

      </NavigationContainer>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
