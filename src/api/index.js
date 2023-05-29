const API_KEY='dec56fdbc92f40489d945cc949ed4805';
const BASE_URL='https://rapidapi.com/spoonacular/api/recipe-food-nutrition/';

export async function getInfo({
    queryString='',
    page=1,
    includeIngredients='',
}){
    /*const url=`${BASE_URL}/?key=${API_KEY}&query=${queryString}&includeIngredients=${includeIngredients}&excludeIngredients=${excludeIngredients}`;*/
    const url = `https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&q=${queryString}&page=${page}&includeIngredients=${includeIngredients}`;
    const response = await fetch(url);
    const data= await response.json();

    return data;
}

