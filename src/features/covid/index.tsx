import { useAppDispatch } from 'app/hooks';
import { AppView } from 'components';
import React, { useEffect } from 'react';
import Headercovid from './componets/header/Headercovid';
import Listcovid from './componets/List/Listcovid';
import { CovidApi } from './covidAPI';
import { setCovidworld } from './covidSile';
import styles from './style';
const Covid: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getDataCovidwrod();
  }, []);

  const getDataCovidwrod = async () => {
    const response = await CovidApi.fetchCovidData();
    console.log('statisticalSile-------------------------------', response);
    dispatch(setCovidworld(response));
  };
  return (
    <AppView style={styles.container}>
      <AppView>
        <Headercovid />
        <Listcovid />
      </AppView>
    </AppView>
  );
};

export default Covid;
