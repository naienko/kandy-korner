import APIManager from "./APIManager";

const db = "types";

export default Object.create(APIManager, {
    getType: id => {
        APIManager.get(id, db)
    },
    getTypes: () => {
        APIManager.all(db)
    },
    queryTypes: query => {
        APIManager.getQuery(query, db)
    },
    deleteType: id => {
        APIManager.delete(id, db)
    },
    delAndGetTypes: id => {
        APIManager.deleteAndFetch(id, db)
    }
})