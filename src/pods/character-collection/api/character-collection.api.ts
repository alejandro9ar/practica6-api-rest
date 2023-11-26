import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const BASE_URL = 'https://rickandmortyapi.com/api/';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  let characterListApi = [];
  try {
    let characterListEndpoint = `${BASE_URL}/character/`;
    const response = await fetch(characterListEndpoint);

    if (response.ok) {
      const json = await response.json();
      characterListApi = json.results;
    }
    return characterListApi;
  } catch (ex) {
    console.log(ex);
  }
};
export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
