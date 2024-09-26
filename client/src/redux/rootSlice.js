import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        loading: false,
        portfolioData: null,
        reloadeData: false,
    },
    reducers: {
        ShowLoading: (state, action) => {
            state.loading = true;
        },
        HideLoading: (state, action) => {
            state.loading = false;
        },
        SetPortfolioData: (state, action) => {
            state.portfolioData = action.payload;
        },
        ReloadData: (state, action) => {
            state.reloadeData = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Use builder.addCase() to add extra reducers
        // For example:
        // builder.addCase(someAsyncAction.fulfilled, (state, action) => {
        //     state.portfolioData = action.payload;
        // });
    },
});

export default rootSlice.reducer;
export const { ShowLoading, HideLoading, SetPortfolioData, ReloadData } = rootSlice.actions;
