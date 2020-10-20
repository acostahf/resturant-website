const BASE_URL = "http://localhost:3000/api/mains";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(main) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(main),
  }).then((res) => res.json());
}

export function update(main) {
  return fetch(`${BASE_URL}/${main._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(main),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
