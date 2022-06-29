import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { remove } from 'lodash';

export interface ClientData {
  userId: number;
  id: number;
  title: String;
  body: String;
}
interface ClientState {
  clients: Array<ClientData>;
}
const initialState: ClientState = {
  clients: [],
};
const ClientSile = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClientdata: (state, action: PayloadAction<Array<ClientData>>) => {
      state.clients = action.payload;
    },
    deleteById: (state, action: PayloadAction<number>) => {
      const oldData = [...state.clients];
      state.clients = remove(oldData, item => item.id !== action.payload);
    },
    searchByid: (state, action: PayloadAction<number>) => {
      const result = remove(state.clients, function (o) {
        // eslint-disable-next-line eqeqeq
        return o.id == action.payload;
      });
      state.clients = result;
    },
  },
  extraReducers: () => {},
});
export const { setClientdata, deleteById, searchByid } = ClientSile.actions;
export default ClientSile.reducer;
