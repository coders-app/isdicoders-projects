import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChallengesStateStructure } from "./types";
import { ChallengeStructure } from "../../types";

const initialChallengesState: ChallengesStateStructure = {
  challenges: [],
};

const challengesSlice = createSlice({
  name: "challenges",
  initialState: initialChallengesState,
  reducers: {
    loadChallenges: (
      currentChallenges,
      action: PayloadAction<ChallengeStructure[]>
    ): ChallengesStateStructure => ({
      ...currentChallenges,
      challenges: [...action.payload],
    }),
  },
});

export const { loadChallenges: loadChallengesActionCreator } =
  challengesSlice.actions;
export const challengesReducer = challengesSlice.reducer;
