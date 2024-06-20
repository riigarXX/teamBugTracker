import moment from "moment";
import { BugInterface } from "../../../shared/types/index";
import { manageBugFile } from "./fileManager";

export const saveBugToFile = async (form: Bug) => {
  const date = moment().format("DD-MM-YYYY");
  const bugReport = `
# Bug Report
---

**Date:** ${date}

**Bug Details:**
- **Type:** ${form.bugTypeSelectValue}
- **Team:** ${form.bugTypeTeamSelectValue}
- **Number:** ${form.bugTypeNumberSelectValue}
- **Description:** ${form.bugTypeDescriptionSelectValue}

**Difficulties:**
- **Difficulty:** ${form.bugDifficultiesSelectValue}
- **Time Needed:** ${form.bugDifficultiesTimeSelectValue} ${form.bugDifficultiesTypeTimeSelectValue}

**Sprint:** ${form.bugSprintSelectValue}
`;

  await manageBugFile(form.bugSprintSelectValue, bugReport);

  return { date };
};
