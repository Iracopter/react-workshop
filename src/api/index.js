const API_KEY='dec56fdbc92f40489d945cc949ed4805';
const BASE_URL='https://rapidapi.com/spoonacular/api/recipe-food-nutrition/';

export async function getInfo({
    queryString='',
    page=1,
    addRecipeInformation=true,
    minCalories=50,
    maxCalories=800,
}){
    /*const url=`${BASE_URL}/?key=${API_KEY}&query=${queryString}&includeIngredients=${includeIngredients}&excludeIngredients=${excludeIngredients}`;*/
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${queryString}&minCalories=${minCalories}&maxCalories=${maxCalories}&addRecipeInformation=${addRecipeInformation}&page=${page}`;
    const response = await fetch(url);
    const data= await response.json();

    console.log(data);
    return data;
}
