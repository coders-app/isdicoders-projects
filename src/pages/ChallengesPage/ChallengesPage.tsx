import { useEffect, useMemo } from "react";
import useChallengesApi from "../../hooks/useChallengesApi";
import ChallengesApiRepository from "../../repositories/ChallengesApiRepository/ChallengesApiRepository";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadChallengesActionCreator } from "../../store/challenges/challengesSlice";
import ChallengesList from "../../components/ChallengesList/ChallengesList";

const ChallengesPage = (): JSX.Element => {
  const challengesApiRepository = useMemo(
    () => new ChallengesApiRepository(),
    []
  );

  const { getChallenges } = useChallengesApi(challengesApiRepository);

  const challenges = useAppSelector(
    (state) => state.challengesStore.challenges
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const initialChallenges = await getChallenges();

      dispatch(loadChallengesActionCreator(initialChallenges));
    })();
  }, [dispatch, getChallenges]);

  return (
    <>
      <h2>Challenges</h2>
      <ChallengesList challenges={challenges} />
    </>
  );
};

export default ChallengesPage;
