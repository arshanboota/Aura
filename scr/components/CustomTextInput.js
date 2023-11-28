import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ placeholder,width ,height,fontWeight,fontSize,borderRadius,padding,borderColor,backgroundColor,borderBottomWidth,borderRightWidth,borderWidth,paddingHorizontal,margin,marginVertical,marginLeft,shadowOpacity,shadowRadius,elevation}) => {
  return (
    <TextInput
      style={{
        height: height || '100%',
        width:width || '100%',
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || 12,
        borderRadius: borderRadius || 0,
        backgroundColor: backgroundColor || 'black',
        borderWidth:  borderWidth || 0,
        marginVertical: marginVertical || 0,
        margin:margin || 0,
        padding :padding|| 0,
        marginLeft:marginLeft || 0,
        borderRightWidth:borderRightWidth || 0,
        borderBottomWidth: borderBottomWidth ||0,
        borderColor:borderColor || 'black'
      }}
      
      placeholder={placeholder}
    />
  );
};

export default CustomTextInput;

