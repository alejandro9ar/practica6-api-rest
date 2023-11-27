import { Character, LocationApi } from './character.api-model';

const BASE_URL = '/api';

export const getCharacter = async (id: string): Promise<Character | null> => {
  let characterApi: Character | null = null;
  try {
    let characterEndpoint = `${BASE_URL}/characters/${id}`;
    const response = await fetch(characterEndpoint);

    if (response.ok) {
      characterApi = await response.json();
    }

    return characterApi;
  } catch (ex) {
    console.log(ex);
  }
};

export const getLocations = async (): Promise<LocationApi[]> => {
  let locationsApi: LocationApi[] = [];
  try {
    let locationEndpoint = `${BASE_URL}/locations`;
    const response = await fetch(locationEndpoint);

    if (response.ok) {
      locationsApi = await response.json();
    }

    return locationsApi;
  } catch (ex) {
    console.log(ex);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id > 0) {
    await fetch(`${BASE_URL}/characters/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    });
  } else {
    await fetch(`${BASE_URL}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    });
  }
  return true;
};
