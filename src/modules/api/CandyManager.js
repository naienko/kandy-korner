import APIManager from "./APIManager";

const db = "candies";

export default Object.create(APIManager, {
    getCandy: id => {
        APIManager.get(id, db)
    },
    getCandies: () => {
        APIManager.all(db)
    },
    queryCandies: query => {
        APIManager.getQuery(query, db)
    },
    deleteCandy: id => {
        APIManager.delete(id, db)
    },
    delAndGetCandies: id => {
        APIManager.deleteAndFetch(id, db)
    }
})