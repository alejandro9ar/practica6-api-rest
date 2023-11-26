import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';
import { Lookup } from '../../common/models';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => {
  if (!character) return viewModel.createEmptyCharacter();
  return {
    ...character,
  };
};
export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  (({
    ...character,
  } as unknown) as apiModel.Character);

export const mapLocationApiToLookup = (
  location: apiModel.LocationApi
): Lookup =>
  (({
    id: location.name,
    name: location.name,
  } as unknown) as Lookup);
