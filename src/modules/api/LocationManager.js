import APIManager from "./APIManager";

const db = "locations";

export default Object.create(APIManager, {
    getLocation: id => {
        APIManager.get(id, db)
    },
    getLocations: () => {
        APIManager.all(db)
    },
    queryLocations: query => {
        APIManager.getQuery(query, db)
    },
    deleteLocation: id => {
        APIManager.delete(id, db)
    },
    delAndGetLocations: id => {
        APIManager.deleteAndFetch(id, db)
    }
})