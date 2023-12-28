import { useRef, useState } from "react";
import { View, Pressable, Animated, Text } from "react-native";

const Switch = ({
  leftContent = '',
  rightContent = '',
  disabled = false,
  onChange = () => { },
  backgroundColor = '#f3f4f6',
  switchColor = 'black',
  containerStyle = {},
  buttonStyles = {},
  value = false,
  switchStyles = {},
  textColor = 'white'
}) => {
  const [mode, setMode] = useState(value);
  const left = useRef(new Animated.Value(0)).current;

  const handlePress = (newMode) => {
    setMode(newMode);
    Animated.timing(left, { toValue: !newMode ? 0 : 1, duration: 200, useNativeDriver: false }).start();
    onChange(newMode);
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
      <Pressable disabled={disabled} onPress={() => handlePress(false)} style={[{
        flex: 1,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      }, buttonStyles]}>
        <Text style={{ color: !mode ? textColor : switchColor }}>{leftContent}</Text>
      </Pressable>
      <Pressable disabled={disabled} onPress={() => handlePress(true)} style={[{
        flex: 1,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      }, buttonStyles]}>
        <Text style={{ color: mode ? textColor : switchColor }}>{rightContent}</Text>
      </Pressable>
    </View>
  )
}

export default Switch