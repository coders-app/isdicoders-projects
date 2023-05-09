import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectStructure } from "../../types";
import { ProjectsStateStructure } from "./types";

const initialProjectsState: ProjectsStateStructure = {
  projects: [],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialProjectsState,
  reducers: {
    loadProjects: (
      currentProjects,
      action: PayloadAction<ProjectStructure[]>
    ): ProjectsStateStructure => ({
      ...currentProjects,
      projects: [...action.payload],
    }),
  },
});

export const { loadProjects: loadProjectsActionCreator } =
  projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
