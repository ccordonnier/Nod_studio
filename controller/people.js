const apiUrl = "https://swapi.dev/api/";

/**
 * Return every peoples
 * @returns 
 */
module.exports.getAllPeople = async (req, res) => {
    const response = await fetch(`${apiUrl}people`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    try{
      const allPeople = await response.json();
      console.log(allPeople);
      return allPeople;
    }catch (error) {
      console.error('Error fetching data:', error.message);
    }
}

/**
 * Return a uniq people from his id
 * @returns 
 */
module.exports.getPeople = async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`${apiUrl}people/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    try{
      const data = await response.json();

      let peopleInformations = {id:id,  name:data.name, films:data.films, hair_color:data.hair_color};
      console.log(peopleInformations);
      return peopleInformations;
    }catch (error) {
      console.error('Error fetching data:', error.message);
    }
}
    
    