import { createSelector } from 'reselect'

const selecDirectory = state => state.directory


export const selectDirectorySections = createSelector(
  [selecDirectory],
  directory => directory.sections

)