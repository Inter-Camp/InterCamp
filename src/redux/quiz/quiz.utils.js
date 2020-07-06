export const addItemToFavourite = (favItems, favItemsToAdd) => {
    const existingQuiz = favItems.questions.find(f => f.id === favItemsToAdd.id);
    if (existingQuiz) {
        return favItems
    }
    return { ...favItems, questions: [...favItems.questions, favItemsToAdd] }
}

export const deleteItemFromFavorite = (favItems, favItemtoDelete) => {
    const filteredFav = favItems.questions.filter(favItem =>
        favItem.id !== favItemtoDelete.id)
    return { ...favItems, questions: filteredFav }
}