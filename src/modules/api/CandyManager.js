import Settings from "./APIManager";

export default {
    get: id => {
        return fetch(`${Settings.RemoteURL}/candies/${id}`)
            .then(results => results.json())
    },
    getAll: () => {
        return fetch(`${Settings.RemoteURL}/candies`)
            .then(results => results.json())
    },
    getQuery: query => {
        return fetch(`${Settings.RemoteURL}/candies/?${query}`)
            .then(results => results.json())
    },
    delete: id => {
        return fetch(`${Settings.RemoteURL}/candies/${id}`, {
            method: "DELETE"
        })
            .then(results => results.json())
    }
}