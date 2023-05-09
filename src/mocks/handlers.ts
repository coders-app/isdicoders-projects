import { rest } from "msw";
import apiEndpoints from "../constants/apiEndpoints";
import { challengesMock } from "./challengesMocks";

export const handlers = [
  rest.get(apiEndpoints.getChallenges, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ challenges: challengesMock }))
  ),
];
