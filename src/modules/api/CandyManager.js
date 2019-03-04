import APIManager from "./APIManager";

const db = "candies";

export default Object.create(APIManager, {
    getCandy: {value: function (id) {
        return APIManager.get(id, db)
        }
    },
    getCandies: {value: function () {
        return APIManager.all(db)
        }
    },
    queryCandies: {value: function (query) {
        return APIManager.getQuery(query, db)
        }
    },
    deleteCandy: {value: function (id) {
        return APIManager.delete(id, db)
        }
    },
    delAndGetCandies: {value: function (id) {
        return APIManager.deleteAndFetch(id, db)
        }
    },
    addCandy: {value: function (object) {
        return APIManager.add(object)
        }
    }
})