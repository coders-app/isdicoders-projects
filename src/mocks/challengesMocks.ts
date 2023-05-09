import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { ChallengeStructure } from "../types";

const challengeFactory = Factory.define<ChallengeStructure>(({ sequence }) => ({
  id: faker.database.mongodbObjectId(),
  name: faker.random.word(),
  week: sequence,
  number: faker.random.numeric(),
}));

export const getChallengeMock = (challengeData?: Partial<ChallengeStructure>) =>
  challengeFactory.build(challengeData);
export const getChallengesMock = (number = 2) =>
  challengeFactory.buildList(number);

export const challengesMock = getChallengesMock();
