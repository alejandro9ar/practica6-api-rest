import { CharacterEntityApi } from './character-collection.api-model';

const BASE_URL = '/api';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  let characterListApi = [];
  try {
    let characterListEndpoint = `${BASE_URL}/characters/`;
    const response = await fetch(characterListEndpoint);
    if (response.ok) {
      characterListApi = await response.json();
      console.log('Response from getCharacterCollection:', characterListApi);
    } else {
      console.error('Error in getCharacterCollection. Status:', response.status);
    }
  } catch (ex) {
    console.error('Error in getCharacterCollection:', ex);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  let charactersEndpoint = `${BASE_URL}/characters/${id}`;
  return fetch(charactersEndpoint, {
    method: 'DELETE',
  }).then(() => true).catch(() => false);
};
