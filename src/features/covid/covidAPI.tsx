import { apiClient } from 'api/APIClient';
import { createAppError } from 'utils';
import { Covidword } from './covidSile';

export const CovidApi = {
  fetchCovidData(): Promise<Covidword> {
    return new Promise<Covidword>((resolve, reject) => {
      apiClient
        .get('https://api.covid19api.com/summary', { timeout: 10 * 1000 })
        .then(response => {
          const data = response as Covidword;
          resolve(data);
        })
        .catch(err => {
          reject(createAppError('API_ERROR', err as Error));
        });
    });
  },
};
