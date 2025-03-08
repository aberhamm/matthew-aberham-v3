import {
  allProjects,
  allExperiences,
  allCrafts,
  Project,
  Experience,
  Craft,
} from 'contentlayer/generated';

export function getProjects(): Project[] {
  return allProjects.sort((a: Project, b: Project) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getExperiences(): Experience[] {
  return allExperiences.sort((a: Experience, b: Experience) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

export function getCrafts(): Craft[] {
  return allCrafts.sort((a: Craft, b: Craft) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
