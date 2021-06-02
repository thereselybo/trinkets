export default function displayMessage(
  messageContainer: string,
  messageType: string,
  message: string
) {
  const container = document.querySelector(
    `${messageContainer}`
  ) as HTMLDivElement;
  container.innerHTML = `<div class="alert alert-${messageType} my-3 col-12" role="alert">${message}</div>`;
}
