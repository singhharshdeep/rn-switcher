import { useRef, useState } from "react";
import { View, Pressable, Animated } from "react-native";
import tw from 'twrnc';

const Switch = ({
  leftIcon,
  rightIcon,
  disabled = false,
  onChange,
  backgroundColor = 'gray-100',
  switchColor = 'black'
}) => {
  const [mode, setMode] = useState(0);
  const left = useRef(new Animated.Value(0)).current;

  const handlePress = (newMode) => {
    setMode(newMode);
    Animated.timing(left, { toValue: newMode === 0 ? 0 : 1, duration: 200, useNativeDriver: false }).start();
    onChange();
  }

  return (
    <View style={tw`flex flex-row justify-center bg-${backgroundColor} w-24 h-10 rounded-full`}>
      <Animated.View style={[tw`absolute flex w-1/2 bg-${switchColor} h-full rounded-full`, {
        left: left.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '50%']
        })
      }]} />
      {
        [leftIcon, rightIcon].map((icon, index) => (
          <Pressable disabled={disabled} onPress={() => handlePress(index)} style={tw`flex w-1/2 justify-center items-center`}>
            {icon}
          </Pressable>
        ))
      }
    </View>
  )
}

export default Switch