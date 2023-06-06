const API_KEY='dec56fdbc92f40489d945cc949ed4805';   //мій
/*const API_KEY='a9b96f80b35441c7ad2aa4a2f9da274b';*/
const BASE_URL='https://rapidapi.com/spoonacular/api/recipe-food-nutrition/';

export async function getInfo({
    queryString='',
    page=1,
    id=0,
    addRecipeInformation=true,
    nutrition='',
    minCalories=50,
    maxCalories=800,
}){
    /*const url=`${BASE_URL}/?key=${API_KEY}&query=${queryString}&includeIngredients=${includeIngredients}&excludeIngredients=${excludeIngredients}`;*/
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&id=${id}&includeIngredients=${queryString}&minCalories=${minCalories}&maxCalories=${maxCalories}&addRecipeInformation=${addRecipeInformation}&nutrition=${nutrition}&page=${page}`;
    const response = await fetch(url);
    const data= await response.json();

    console.log(data);
    return data;
}
