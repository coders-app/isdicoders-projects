import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { ChallengeStructure } from "../types";

const challengeFactory = Factory.define<ChallengeStructure>(() => ({
  id: faker.database.mongodbObjectId(),
  name: faker.random.word(),
  week: faker.datatype.number(),
  number: faker.random.numeric(),
}));

export const getChallengeMock = (challengeData?: Partial<ChallengeStructure>) =>
  challengeFactory.build(challengeData);
export const getChallengesMock = (number = 2) =>
  challengeFactory.buildList(number);
