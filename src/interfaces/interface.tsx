export interface ShowInterface {
  id: number;
  title: string;
  year: number;
  description: string;
  platform: string;
  leadCharacters: string[];
}

export interface MarvelCardInterface {
  id?: number;
  website: string;
  title: string;
  year: number;
  description: string;
  platform: string;
  leadCharacters?: string[];
  image?: string;
}
