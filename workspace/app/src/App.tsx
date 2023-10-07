import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { getSubPlatform } from './config';
import LogoSrc from './logo.png';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
  },
  platformRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  platformBackground: {
    backgroundColor: '#ececec',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d4d4d4',
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
});

const App = (): JSX.Element => {
  const platformValue = getSubPlatform() ? `${Platform.OS} (${getSubPlatform()})` : Platform.OS;
  return (
    <SafeAreaView style={styles.root}>
      {/* <Image style={styles.logo} source={typeof LogoSrc === 'string' ? { uri: LogoSrc } : LogoSrc} /> */}
      <Image style={styles.logo} source={LogoSrc} />
      <Text style={styles.text}>Hello from React Native!</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Platform: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{platformValue}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
