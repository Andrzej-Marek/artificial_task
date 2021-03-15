import { SelectOption } from "../types";
import { globalTranslation } from "../utils";

export const JOB_POSITIONS_OPTIONS: SelectOption[] = [
  {
    label: globalTranslation("jobPositions:webDeveloper"),
    value: "Web Developer",
  },
  {
    label: globalTranslation("jobPositions:reactDeveloper"),
    value: "React Developer",
  },
  {
    label: globalTranslation("jobPositions:angularDeveloper"),
    value: "Angular Developer",
  },
  {
    label: globalTranslation("jobPositions:fullStackDeveloper"),
    value: "Full Stack Developer",
  },
  {
    label: globalTranslation("jobPositions:machineLearningEngineer"),
    value: "Machine Learning Engineer",
  },
  {
    label: globalTranslation("jobPositions:frontEndDevelper"),
    value: "Front-end Developer",
  },
  {
    label: globalTranslation("jobPositions:backEndDevelper"),
    value: "Back-end Developer",
  },
];
