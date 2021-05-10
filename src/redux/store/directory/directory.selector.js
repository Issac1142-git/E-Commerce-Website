import { createSelector } from "reselect";

export const directorySelector = (state) => state.directory;

export const sectionSelector = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
