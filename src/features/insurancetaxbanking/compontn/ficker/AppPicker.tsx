import { AppFontAwesomeIcon, AppText, AppTouchableOpacity, AppView } from 'components';
import * as React from 'react';
import { Menu, useTheme } from 'react-native-paper';
import { ViewStyle } from 'react-native';

interface IPicker {
  listItem: Array<any>;
  value: string;
  setValue: (key: string) => void;
  style?: ViewStyle | ViewStyle[];
  itemWidth?: number;
  itemHeight?: number;
}

const Picker: React.FC<IPicker> = (props: IPicker) => {
  const { listItem, value, setValue, style, itemWidth, itemHeight } = props;
  const theme = useTheme();
  const [visible, setVisible] = React.useState<boolean>(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <AppTouchableOpacity
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
              borderColor: theme.colors.lightGrey,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
            style,
          ]}
          onPress={openMenu}>
          <AppText style={{ fontSize: 12 }}>{value}</AppText>
          <AppView style={{ width: 270 }} />
          <AppFontAwesomeIcon name="angle-down" size={15} />
        </AppTouchableOpacity>
      }>
      {listItem.map(item => (
        <Menu.Item
          style={{ width: itemWidth, height: itemHeight }}
          key={item.value}
          onPress={() => {
            setValue(item.key);
            closeMenu();
          }}
          titleStyle={theme.fonts.regular}
          title={item.value}
        />
      ))}
    </Menu>
  );
};

export default Picker;
