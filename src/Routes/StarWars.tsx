import { useState, useEffect } from "react";
import videoFile from "../assets/galaxy.mp4";
import Card from "../components/Card";
import {
  useGetCharacters,
  useGetFilm,
  useGetPlanets,
  useGetStarship,
} from "../queries/api";

function StarWars() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { data: getCharacters, isLoading: isLoadingCharacters } =
    useGetCharacters();
  const { data: getStarship, isLoading: isLoadingStarship } = useGetStarship();
  const { data: getFilms, isLoading: isLoadingFilms } = useGetFilm();
  const { data: getPlanets, isLoading: isLoadingPlanets } = useGetPlanets();

  const options = [
    { Nome: "Naves" },
    { Nome: "Planetas" },
    { Nome: "Personagens" },
    { Nome: "Filmes" },
  ];

  const renderContent = () => {
    switch (selectedOption) {
      case "Naves":
        return (
          <>
            {isLoadingStarship ? (
              <p className="text-logo text-center">Loading...</p>
            ) : (
              getStarship?.results?.map((item: any) => (
                <Card
                  key={item.name}
                  data={{
                    title: item.name,
                    subTitle: "Naves Details",
                    info: [
                      { title: "Name", value: item.name },
                      { title: "Model", value: item.model },
                      { title: "Length", value: item.length },
                      { title: "Passengers", value: item.passengers },
                      { title: "Consumables", value: item.consumables },
                      { title: "Starship Class", value: item.starship_class },
                    ],
                  }}
                />
              ))
            )}
          </>
        );
      case "Planetas":
        return (
          <>
            {isLoadingPlanets ? (
              <p className="text-logo text-center">Loading...</p>
            ) : (
              getPlanets?.results?.map((item: any) => (
                <Card
                  key={item.name}
                  data={{
                    title: item.name,
                    subTitle: "Planet Details",
                    info: [
                      { title: "Name", value: item.name },
                      { title: "Rotation Period", value: item.rotation_period },
                      { title: "Period", value: item.orbital_period },
                      { title: "Diameter", value: item.diameter },
                      { title: "Climate", value: item.climate },
                      { title: "Gravity", value: item.gravity },
                    ],
                  }}
                />
              ))
            )}
          </>
        );
      case "Personagens":
        return (
          <>
            {isLoadingCharacters ? (
              <p className="text-logo text-center">Loading...</p>
            ) : (
              getCharacters?.results?.map((item: any) => (
                <Card
                  key={item.name}
                  data={{
                    title: item.name,
                    subTitle: "Character Details",
                    info: [
                      { title: "Height", value: item.height },
                      { title: "Mass", value: item.mass },
                      { title: "Hair Color", value: item.hair_color },
                      { title: "Skin Color", value: item.skin_color },
                      { title: "Eye Color", value: item.eye_color },
                      { title: "Birth Year", value: item.birth_year },
                      { title: "Gender", value: item.gender },
                      { title: "Homeworld", value: item.homeworld },
                    ],
                  }}
                />
              ))
            )}
          </>
        );
      case "Filmes":
        return (
          <>
            {isLoadingFilms ? (
              <p className="text-logo text-center">Loading...</p>
            ) : (
              getFilms?.results?.map((item: any) => (
                <Card
                  key={item.title}
                  data={{
                    title: item.title,
                    subTitle: "Films Details",
                    info: [
                      { title: "Title", value: item.title },
                      { title: "Episode", value: item.episode_id },
                      { title: "Director", value: item.director },
                      { title: "Producer", value: item.producer },
                      { title: "Release Date", value: item.release_date },
                    ],
                  }}
                />
              ))
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <div className="grid ">
          <p className="font-starwars text-logo text-2xl p-4 text-center font-semibold">
            Uma galáxia muito, muito distante...
          </p>
          <div className="flex items-center justify-center">
            {options.map((item) => (
              <p
                className="font-starwars text-logo text-lg p-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-rebelOrange duration-300"
                onClick={() => setSelectedOption(item.Nome)}
              >
                {item.Nome}
              </p>
            ))}
          </div>
          <div className="w-1/2 h-auto mt-4 overflow-auto m-auto ">
            <div className="flex gap-4">{renderContent()}</div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default StarWars;
