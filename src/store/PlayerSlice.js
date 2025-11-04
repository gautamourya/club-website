"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  formData: null,
  formFilled: false,
  videoWatched: false,
  quizCompleted: false,
  talentForm: {}
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = action.payload;
      state.formFilled = true;
    },
    markVideoWatched: (state) => {
      state.videoWatched = true;
    },
    saveUserID: (state, action) => {
      state.id = action.payload;
    },
    
    markQuizCompleted: (state) => {
      state.quizCompleted = true;
    },
    resetAll: (state) => {
      return initialState;
    },
    // New action to restore form data from localStorage
    restoreFormData: (state, action) => {
      state.formData = action.payload;
      state.formFilled = true;
    },
    // Action to update existing form data
    updateFormData: (state, action) => {
      if (state.formData) {
        state.formData = { ...state.formData, ...action.payload };
      } else {
        state.formData = action.payload;
        state.formFilled = true;
      }
    },
    talentForm: (state, action) => {
      state.talentForm = action.payload;
    }
  },
});

export const { saveFormData, markVideoWatched, markQuizCompleted, resetAll, restoreFormData, updateFormData ,saveUserID, talentForm} =
  playerSlice.actions;
export default playerSlice.reducer;