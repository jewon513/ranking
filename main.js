import AppRank from "./AppRank.js";

const appRank = new AppRank;

appRank.fetchAppRankings({
    collection: AppRank.COLLECTION.GROSSING,
    category: AppRank.CATEGORY.GAME,
    lang: 'ko',
    country: 'jp',
    num: 5
}).then(res => {
    console.log(res)
})