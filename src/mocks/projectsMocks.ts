import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { ProjectStructure } from "../types";

const projectFactory = Factory.define<ProjectStructure>(() => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.random.word(),
}));

export const getProjectsMock = (number = 2) => projectFactory.buildList(number);

export const projectsMock = getProjectsMock();
