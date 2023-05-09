import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useChallengesApi from "../../hooks/useChallengesApi";
import ChallengesApiRepository from "../../repositories/ChallengesApiRepository/ChallengesApiRepository";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadProjectsActionCreator } from "../../store/projects/projectsSlice";
import { ChallengeStructure } from "../../types";

const ProjectsPage = (): JSX.Element => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const [challenge, setChallenge] = useState<ChallengeStructure | null>(null);

  const challengesApiRepository = useMemo(
    () => new ChallengesApiRepository(),
    []
  );
  const { getProjectsByChallengeId, getChallengeById } = useChallengesApi(
    challengesApiRepository
  );
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.projectsStore.projects);

  useEffect(() => {
    if (!challengeId) {
      return;
    }

    (async () => {
      const challenge = await getChallengeById(challengeId);

      setChallenge(challenge);
    })();

    (async () => {
      const projects = await getProjectsByChallengeId(challengeId);

      dispatch(loadProjectsActionCreator(projects));
    })();
  }, [challengeId, dispatch, getChallengeById, getProjectsByChallengeId]);

  return (
    <>
      <h2>{challenge?.name} - Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProjectsPage;
