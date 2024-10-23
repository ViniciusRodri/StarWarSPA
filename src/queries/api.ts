// queries/api.ts
import axios from "axios";
import { useQuery } from "react-query";

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
}

export interface Films {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  created: string;
}

export interface Planets {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

interface CharacterData {
  results: Result[];
}

interface StarshipData {
  results: Starship[];
}

interface FilmsData {
  results: Starship[];
}

interface PlanetsData {
  results: Planets[];
}

export const useGetCharacters = () => {
  return useQuery<CharacterData>("characters", async () => {
    const { data } = await axios.get("https://swapi.dev/api/people/");
    return data;
  });
};

export const useGetStarship = () => {
  return useQuery<StarshipData>("starship", async () => {
    const { data } = await axios.get("https://swapi.dev/api/starships/");
    return data;
  });
};

export const useGetFilm = () => {
  return useQuery<FilmsData>("films", async () => {
    const { data } = await axios.get("https://swapi.dev/api/films/");
    return data;
  });
};

export const useGetPlanets = () => {
  return useQuery<PlanetsData>("planets", async () => {
    const { data } = await axios.get("https://swapi.dev/api/planets/");
    return data;
  });
};
