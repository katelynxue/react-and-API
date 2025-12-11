import {API_KEY} from "./config";

const response = await fetch (
  `https://api.api-ninjas.com/v1/dogs?name=${breedName}`,
  {
    headers: { "X-Api-Key": API_KEY}
  }
);

export default DogGenerator;
