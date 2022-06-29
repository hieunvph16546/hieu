// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
export interface InsurancetaxbankingItem {
  id: number;
  name: string;
}
interface InsurancetaxbankingState {
  insurancetaxbankings: Array<InsurancetaxbankingItem>;
}
const initialState: InsurancetaxbankingState = {
  insurancetaxbankings: [
    {
      id: 0,
      name: 'BẢO HIỂM XÃ HỘI',
    },
    {
      id: 1,
      name: 'BẢO HIỂM Y TẾ',
    },
    {
      id: 2,
      name: 'MÃ SỐ THUẾ',
    },
    {
      id: 3,
      name: 'TK NGÂN HÀNG',
    },
  ],
};
const insurancetaxbankingSile = createSlice({
  name: 'Insurancetaxbanking',
  initialState,
  reducers: {
    sortInsurancetaxbanking: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        let sort = _.orderBy(state.insurancetaxbankings, ['id'], ['asc']);
        state.insurancetaxbankings = sort;
      } else {
        let sort = _.orderBy(state.insurancetaxbankings, ['id'], ['desc']);
        state.insurancetaxbankings = sort;
      }
    },
  },
  extraReducers: () => {},
});
export const { sortInsurancetaxbanking } = insurancetaxbankingSile.actions;
export default insurancetaxbankingSile.reducer;
