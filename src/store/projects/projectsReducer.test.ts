import { ProjectStructure } from "../../types";
import { loadProjectsActionCreator, projectsReducer } from "./projectsSlice";
import { ProjectsStateStructure } from "./types";

describe("Given a projectsReducer reducer", () => {
  describe("When it receives an empty projects state and a load projects action with two projects", () => {
    test("Then it should return a state with the two projects", () => {
      const currentProjectsState: ProjectsStateStructure = {
        projects: [],
      };
      const newProjects: ProjectStructure[] = [
        {
          _id: "1",
          name: "w1ch1",
        },
        {
          _id: "2",
          name: "w1ch2",
        },
      ];
      const loadProjectsAction = loadProjectsActionCreator(newProjects);

      const expectedNewProjectsState: ProjectsStateStructure = {
        projects: [...newProjects],
      };

      const newProjectsState = projectsReducer(
        currentProjectsState,
        loadProjectsAction
      );

      expect(newProjectsState).toStrictEqual(expectedNewProjectsState);
    });
  });
});
