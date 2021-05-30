export const userKey = "user";
export const tokenKey = "token";
export const favesKey = "faves";
export const cartKey = "cart";
export const searchKey = "searchValue";
export function checkIfAdmin() {
    const user = getFromStorage(userKey);
    if (user.role) {
        if (user.role.type === "authenticated") {
            return true;
        }
    }
    else {
        return false;
    }
}
export function checkIfUser() {
    const user = getFromStorage(userKey);
    if (user.id) {
        return true;
    }
    else {
        return false;
    }
}
export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
export function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (!value) {
        return [];
    }
    return JSON.parse(value);
}
export function removeFromStorage(key) {
    localStorage.removeItem(key);
}
