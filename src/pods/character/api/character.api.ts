import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockLocations, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.find((c) => c.id.toString() === id);
};

export const getLocations = async (): Promise<Lookup[]> => {
  return mockLocations;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
