import { useRef, useState } from "react";
import { View, Pressable, Animated, Text } from "react-native";

const Switch = ({
  leftContent = '',
  rightContent = '',
  disabled = false,
  onChange = () => {},
  backgroundColor = '#f3f4f6',
  switchColor = 'black',
  containerStyle = {},
  buttonStyles = {},
  switchStyles = {},
  textColor = 'white'
}) => {
  const [mode, setMode] = useState(0);
  const left = useRef(new Animated.Value(0)).current;

  const handlePress = (newMode) => {
    setMode(newMode);
    Animated.timing(left, { toValue: newMode === 0 ? 0 : 1, duration: 200, useNativeDriver: false }).start();
    onChange();
  }

  return (
    <View style={[{
      flexDirection: 'row',
      width: 96,
      height: 40,
      borderRadius: 9999,
      backgroundColor
    }, containerStyle]}>
      <Animated.View style={[{
        position: 'absolute',
        width: '50%',
        backgroundColor: switchColor,
        height: '100%',
        borderRadius: 9999,
        left: left.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '50%']
        })
      }, switchStyles]} />
      {
        [leftContent, rightContent].map((content, index) => (
          <Pressable disabled={disabled} onPress={() => handlePress(index)} style={[{
            flex: 1,
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center'
          }, buttonStyles]}>
            <Text style={{ color: mode === index ? textColor : switchColor }}>{content}</Text>
          </Pressable>
        ))
      }
    </View>
  )
}

export default Switch