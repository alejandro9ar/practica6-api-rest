import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  image: `http://localhost:3000/thumbnails/${character.image}`,  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
});
