import React, { useState, useEffect } from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import _ from 'lodash';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { toLowerCase, translate } from 'utils';
import { LoginProps } from 'features/login/index';
import { AppButton, AppImage, AppText, AppTouchableOpacity, AppView } from 'components';
import image from 'assets/icons';
import LoginInput from 'features/login/components/LoginInput';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { appConstants } from 'constants/const';

const LoginDialog: React.FC<LoginProps> = (props: LoginProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onLogin, prevUser, errorMessage, setErrorMessage } = props;
  const [userName, setUserName] = useState<string | undefined>('');
  const [passWord, setPassWord] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clear, setClear] = useState(true);
  const [hidePassword, setHidePassword] = React.useState<boolean>(true);

  useEffect(() => {
    setUserName(prevUser?.userName);
  }, [prevUser?.userName]);

  const getUsername = () => {
    if (userName !== prevUser?.userName) {
      return _.toLower(userName);
    }
    return prevUser?.userName;
  };

  const onChangeUsername = (text: string) => {
    const textUsername = text.replace(
      /[^A-Za-z0-9._ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
      '',
    );
    setUserName(textUsername);
    setErrorMessage('');
    setClear(false);
  };

  const onChangePassword = (text: string) => {
    setPassWord(text);
    setErrorMessage('');
  };

  const onPressLogin = () => {
    setErrorMessage('');
    const _userName = getUsername() as string;
    onLogin(_userName, passWord);
  };
  return (
    <AppView style={styles.container}>
      <AppView style={styles.paddingContentViewleft} />
      <AppView style={styles.contentView}>
        <AppImage style={styles.logoLogin} source={image.IC_LOGO_MCREDIT as ImageSourcePropType} />
        <AppText style={styles.textWelcome}>{translate('welcome_to_app_mcredit')}</AppText>
        <AppView style={styles.paddingItem} />
        <LoginInput
          style={styles.textInput}
          label={translate('username')}
          placeholder={translate('username_placeholder')}
          secureTextEntry={false}
          value={userName}
          iconName={''}
          iconSize={16}
          onChangeText={onChangeUsername}
          onSubmitEditing={onPressLogin}
        />
        <LoginInput
          style={styles.textInput}
          label={translate('password')}
          placeholder={translate('password_placeholder')}
          secureTextEntry={hidePassword}
          value={passWord}
          iconName={'eye-slash'}
          iconSize={20}
          onChangeText={onChangePassword}
          onSubmitEditing={onPressLogin}
          iconPress={() => setHidePassword(!hidePassword)}
        />
        <AppView style={styles.copyright1}>
          <AppButton style={styles.loginButton} onPress={onPressLogin} uppercase={false}>
            <AppText style={styles.loginText}>{translate('login')}</AppText>
          </AppButton>
        </AppView>
        <AppView style={styles.copyright}>
          <AppTouchableOpacity>
            <AppText style={styles.copyrightText}>{translate('forgot_password')}</AppText>
          </AppTouchableOpacity>
        </AppView>
      </AppView>
      <AppView style={styles.paddingContentView} />
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
  },
  paddingContentView: {
    flex: 0.3,
  },
  paddingContentViewleft: {
    flex: 0.12,
  },
  paddingItem: {
    marginTop: 12,
  },
  logoLogin: {
    width: 220,
    height: 75,
    marginLeft: 50,
    marginBottom: 40,
  },
  textWelcome: {
    width: 350,
    fontSize: 19,
    color: 'gray',
    marginLeft: -15,
    marginBottom: 40,
  },
  textApp: {
    fontSize: 24,
    color: '#5E81F4',
    fontWeight: 'bold',
  },
  marginBottom: {
    marginBottom: 24,
  },
  welcomenNotPrevUser: {
    marginBottom: 28,
  },
  welcomePrevUser: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  welcomeUser: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  instructionButton: {
    alignItems: 'flex-end',
  },
  textInput: {
    marginBottom: 30,
  },
  avatarGender: {
    width: 84,
    height: 84,
  },
  loginButton: {
    width: 200,
    height: 44,
    marginTop: 16,
    backgroundColor: '#1b71f8',
    justifyContent: 'center',
    borderRadius: 8,
  },
  loginText: {
    color: 'white',
    fontSize: 14,
    letterSpacing: 0,
  },
  invalidText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 16,
  },
  copyright: {
    marginTop: 26,
    alignItems: 'center',
  },
  copyright1: {
    marginTop: -10,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 15,
    color: '#7a7a7c',
    borderBottomWidth: 1,
  },
  instructionText: {
    fontSize: 30,
    color: '#5E81F4',
    fontWeight: 'bold',
  },
});

export default LoginDialog;
