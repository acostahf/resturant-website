const BASE_URL = "/api/wines";

export function getAll() {
  return fetch(BASE_URL).then(res => res.json());
}

export function create(wine) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(wine)
  }).then(res => res.json());
}

export function update(wine) {
  return fetch(`${BASE_URL}/${wine._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(wine)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
}
