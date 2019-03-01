import APIManager from "./APIManager";

const db = "employees";

export default Object.create(APIManager, {
    getEmployee: {value: function (id) {
        return APIManager.get(id, db)
        }
    },
    getEmployees: {value: function () {
        return APIManager.all(db)
        }
    },
    queryEmployees: {value: function (query) {
        return APIManager.getQuery(query, db)
        }
    },
    deleteEmployee: {value: function (id) {
        return APIManager.delete(id, db)
        }
    },
    delAndGetEmployees: {value: function (id) {
        return APIManager.deleteAndFetch(id, db)
        }
    }
})