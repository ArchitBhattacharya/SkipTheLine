const BASE_URL = "http://localhost:8000";

// Helper to get token from localStorage
const getToken = () => localStorage.getItem("token");

export const api = {
  // Auth
  register: (data: object) =>
    fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(r => r.json()),

  login: (data: object) =>
    fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(r => r.json()),

  // Menu
  getMenu: (stallId: number) =>
    fetch(`${BASE_URL}/menu/${stallId}`).then(r => r.json()),

  // Orders
  placeOrder: (data: object) =>
    fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json",
                 "Authorization": `Bearer ${getToken()}` },
      body: JSON.stringify(data),
    }).then(r => r.json()),

  myOrders: () =>
    fetch(`${BASE_URL}/orders/my`, {
      headers: { "Authorization": `Bearer ${getToken()}` }
    }).then(r => r.json()),

  // Queue
  getQueue: (stallId: number) =>
    fetch(`${BASE_URL}/queue/${stallId}`).then(r => r.json()),
};