import Settings from "./APIManager";

export default {
    get: id => {
        return fetch(`${Settings.RemoteURL}/types/${id}`)
            .then(results => results.json())
    },
    getAll: () => {
        return fetch(`${Settings.RemoteURL}/types`)
            .then(results => results.json())
    },
    getQuery: query => {
        return fetch(`${Settings.RemoteURL}/types/?${query}`)
            .then(results => results.json())
    },
    delete: id => {
        return fetch(`${Settings.RemoteURL}/types/${id}`, {
            method: "DELETE"
        })
            .then(results => results.json())
    }
}