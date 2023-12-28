# rn-switcher

A simple draggable switch component for React Native that supports text and svg

## Demo

<img src="https://im.ezgif.com/tmp/ezgif-1-644e873124.gif" width="150" height="75"/>
<br />
<img src="https://im.ezgif.com/tmp/ezgif-1-581dde3bfa.gif" width="150" height="75"/>

## Getting started

`yarn add rn-switcher`

## Usage

```javascript
...
import Switch from 'rn-switcher';

...
render() {
  ...
  return (
    <Switch 
      leftContent="Off"
      rightContent="On"
    />
  )
}
...
```

## Props Definitions

### `<Switch />`

| Prop            | Explanation                                                                                          | Type      | Default   | Required |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | --------- | -------- |
| leftContent           | Text/Icon on the left side of switch                                                                              | string/React.Node    |    ""     | false     |
| rightContent          | Text/Icon on the left side of switch                                                                             | string/React.Node    |     ""      | false     |
| value           | The value of the switch, indicating if the switch is on or off                                       | boolean   |           | true     |
| onChange   | The callback function for when the value is changed in Switch, providing the updated value in params | function  |           | true     |
| disabled        | If user touch is disabled                                                                            | boolean   | false     | false    |
| containerStyles | Style for Switch container                                                                     | StyleSheet | null      | false    |
| buttonStyles  | Style for selectable buttons                                                                     | StyleSheet | null      | false    |
| switchStyle     | Style for the circle of the switch                                                          | StyleSheet | null      | false    |
| backgroundColor | Background color of the Switch when it is not on                                                     | string    | '#F3F4F6' | false    |
| switchColor     | Color of the switch circle                                                                         | string    | 'black' | false    |
| textColor     | Color of the text/svg when it is active                                                         | string    | 'white' | false    |
| disabledColor   | Background color of the Switch when it is disabled                                                   | string    | '#A1A1A1' | false    |