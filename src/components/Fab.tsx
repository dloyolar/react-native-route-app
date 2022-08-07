import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Fab = ({iconName, onPress, style = {}}: Props) => {
  return (
    <View style={{...(style as any)}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.blackButton}>
        <Icon name={iconName} color="white" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  blackButton: {
    zIndex: 999,
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});
