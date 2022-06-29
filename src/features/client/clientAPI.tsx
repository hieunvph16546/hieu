import { apiClient } from 'api/APIClient';
import { createAppError } from 'utils';
import { ClientData } from './clientSile';

export const ClientAPI = {
  fetchClientData(): Promise<ClientData[]> {
    return new Promise<ClientData[]>((resresolve, reject) => {
      apiClient
        .get('https://jsonplaceholder.typicode.com/posts', { timeout: 10 * 1000 })
        .then(response => {
          const data = response as ClientData[];
          resresolve(data);
        })
        .catch(err => {
          reject(createAppError('API_ERROR', err as Error));
        });
    });
  },
};
