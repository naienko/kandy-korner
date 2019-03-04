const RemoteURL = "http://localhost:8081"

export default {
    get: (id, db) => {
        return fetch(`${RemoteURL}/${db}/${id}`)
            .then(results => results.json())
    },
    all: function (db) {
        return fetch(`${RemoteURL}/${db}`)
            .then(results => results.json())
    },
    getQuery: (query, db) => {
        return fetch(`${RemoteURL}/${db}/?${query}`)
            .then(results => results.json())
    },
    delete: (id, db) => {
        return fetch(`${RemoteURL}/${db}/${id}`, {
            method: "DELETE"
        })
    },
    deleteAndFetch: (id, db) => {
        return fetch(`${RemoteURL}/${db}/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`${RemoteURL}/${db}`))
        .then(results => results.json())
    },
    add: (db, newObject) => {
        return fetch(`${RemoteURL}/${db}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        })
        .then(results => results.json())
    }
}