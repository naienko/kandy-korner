import APIManager from "./APIManager";

const db = "employees";

export default Object.create(APIManager, {
    getEmployee: id => {
        APIManager.get(id, db)
    },
    getEmployees: () => {
        APIManager.all(db)
    },
    queryEmployees: query => {
        APIManager.getQuery(query, db)
    },
    deleteEmployee: id => {
        APIManager.delete(id, db)
    },
    delAndGetEmployees: id => {
        APIManager.deleteAndFetch(id, db)
    }
})