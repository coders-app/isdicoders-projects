import { rest } from "msw";
import apiEndpoints from "../constants/apiEndpoints";
import { challengesMock } from "./challengesMocks";
import { projectsMock } from "./projectsMocks";

export const handlers = [
  rest.get(apiEndpoints.getChallenges, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ challenges: challengesMock }))
  ),
  rest.get(apiEndpoints.getChallengeById("1"), (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ challenge: challengesMock[0] }))
  ),
  rest.get(apiEndpoints.getProjectsByChallengeId("1"), (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ projects: projectsMock }))
  ),
];
