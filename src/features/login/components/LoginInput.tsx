import React from 'react';
import { StyleSheet, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppText, RNAppTextInput, AppView, AppTouchableOpacity, AppFontAwesomeIcon, AppTextInput } from 'components';
import { useTheme } from 'react-native-paper';

type IProps = React.ComponentProps<typeof View> & {
  label: string;
  placeholder?: string;
  iconName: string;
  iconSize: number;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  iconPress?: () => void;
};

const LoginInput: React.FC<IProps> = props => {
  const { label, placeholder, iconName, iconSize, secureTextEntry, value, onChangeText, onSubmitEditing, iconPress } =
    props;

  const { colors } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const iconColor = secureTextEntry === true || !iconPress ? colors.grey : colors.borderGrey;
  return (
    <View {...props}>
      <AppView style={styles.backgroundInput}>
        <RNAppTextInput
          style={styles.textInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={() => onSubmitEditing}
        />
        <AppTouchableOpacity disabled={!iconPress} onPress={iconPress}>
          <AppFontAwesomeIcon name={iconName} size={iconSize} color="#b7deef" style={styles.iconStyle} />
        </AppTouchableOpacity>
      </AppView>
      <AppText boldOrLight={'bold'} style={styles.label}>
        {label}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundInput: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#d5dce0',
    width: '112%',
    borderRadius: 5,
    marginLeft: -20,
    borderWidth: 1,
  },
  label: {
    marginBottom: 6,
    position: 'absolute',
    marginTop: -15,
    backgroundColor: 'white',
    marginLeft: -12,
    fontSize: 20,
  },
  textInput: {
    height: 50,
    width: 220,
    fontSize: 13,
    marginLeft: 10,
    fontFamily: 'Lato-Regular',
  },
  iconStyle: {
    position: 'absolute',
    right: 30,
    top: -10,
  },
});

export default LoginInput;
