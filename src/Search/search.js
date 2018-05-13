import NutritionFacts from './index'

//const NF = new NutritionFacts(process.env.USDA_NDB_API_KEY);
const API_KEY = 'Y64HeYU4AWVdPb3fRYJJEa3b1sM3BRRM6kgMiYgg';
const NF = new NutritionFacts(API_KEY);

function resetSearch()
{
  alert("Hello") ;
}

$("#btnSearch").click(function() {

        resetSearch();
    }); 

NF.searchFoods({
    q: 'salted butter',
    ds: 'Standard Reference'
}).then(results => {
    // Returns search results
    let mySelectedItem = results.list.item[0]
    
    // Items are returned as a FoodItem instance
    // allowing you to call 'getNutrition' directly on the instance.
    mySelectedItem.getNutrition()
        .then(nutritionReport => {
            console.log(nutritionReport)
        })

})

// Alternatively, if you know the NDBNO off-hand
// you can call 'getNutrition' from the NF instance.

NF.getNutrition('01001','b')
    .then(nutritionReport => {
        console.log(nutritionReport)
    }).catch(err => {
    console.log(err)
})