var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import displayMessage from "../common/displayMessage.js";
import { baseUrl } from "../../settings/variables.js";
import { saveToStorage, tokenKey, userKey } from "../../utils/storage.js";
export default function handleLogin(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageContainer = "#accountModal .message-container";
        const authUrl = `${baseUrl}/auth/local`;
        const data = JSON.stringify({ identifier: username, password: password });
        const options = {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const response = yield fetch(authUrl, options);
            const json = yield response.json();
            if (json.user) {
                saveToStorage(tokenKey, json.jwt);
                saveToStorage(userKey, json.user);
                displayMessage(messageContainer, "success", "Successfully logged in");
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            if (json.error) {
                displayMessage(messageContainer, "danger", "You shall not pass");
            }
        }
        catch (error) {
            displayMessage(messageContainer, "danger", error);
        }
    });
}
