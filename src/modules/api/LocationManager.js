import APIManager from "./APIManager";

const db = "locations";

export default Object.create(APIManager, {
    getLocation: {value: function (id) {
        return APIManager.get(id, db)
        }
    },
    getLocations: {value: function () {
        return APIManager.all(db)
        }
    },
    queryLocations: {value: function (query) {
        return APIManager.getQuery(query, db)
        }
    },
    deleteLocation: {value: function (id) {
        return APIManager.delete(id, db)
        }
    },
    delAndGetLocations: {value: function (id) {
        return APIManager.deleteAndFetch(id, db)
        }
    }
})