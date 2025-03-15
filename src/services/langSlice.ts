import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LangState {
  lang: string;
}

const initialState = { lang: "EN" } satisfies LangState as LangState;

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<string>) {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
