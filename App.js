import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [tapCount, setTapCount] = useState(0);

  const generateRandomColor = () => {
    const randomColor =
        '#' +
        Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return randomColor;
  };

  const handlePress = () => {
    setBackgroundColor(generateRandomColor());
    setTapCount(tapCount + 1);
  };

  return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={[styles.container, { backgroundColor }]}>
          <Text style={styles.text}>Hello there</Text>
          <Text style={styles.subText}>Taps: {tapCount}</Text>
          <Text style={styles.subText}>Current Color: {backgroundColor}</Text>
        </View>
      </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});
