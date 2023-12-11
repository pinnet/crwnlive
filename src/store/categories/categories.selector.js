export const selectCategories = (state) => {
    console.log('selector - fired', state.categories.categories);   
    return state.categories.categories
    .reduce((acc,category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
}