export default function displayMessage(messageContainer, messageType, message) {
    const container = document.querySelector(`${messageContainer}`);
    container.innerHTML = `<div class="alert alert-${messageType} my-3 col-12" role="alert">${message}</div>`;
}
