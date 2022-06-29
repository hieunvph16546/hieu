import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Covidword {
  ID?: String;
  Message?: String;
  Global?: {
    NewConfirmed?: number;
    TotalConfirmed?: number;
    NewDeaths?: number;
    TotalDeaths?: number;
    NewRecovered?: number;
    TotalRecovered?: number;
    Date?: Date;
  };
  Countries?: [
    {
      ID?: String;
      Country?: String;
      CountryCode?: String;
      Slug?: String;
      NewConfirmed?: number;
      TotalConfirmed?: number;
      NewDeaths?: number;
      TotalDeaths?: number;
      NewRecovered?: number;
      TotalRecovered?: number;
      Date?: Date;
      Premium?: object;
    },
  ];
  Date?: Date;
}
interface CovidState {
  covids?: Covidword;
}
const initialState: CovidState = {
  covids: {},
};
const CovidSile = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCovidworld: (state, action: PayloadAction<Covidword>) => {
      state.covids = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { setCovidworld } = CovidSile.actions;
export default CovidSile.reducer;
