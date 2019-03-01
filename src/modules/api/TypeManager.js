import APIManager from "./APIManager";

const db = "types";

export default Object.create(APIManager, {
    getTypes: {value: function () {
        return APIManager.all(db)
        }
    }
})