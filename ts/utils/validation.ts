export default function validateElement(
  element: HTMLInputElement | HTMLTextAreaElement,
  length: number
) {
  const parentElement = element.parentElement as HTMLElement;
  const errorMessage = parentElement.querySelector(
    ".invalid-feedback"
  ) as HTMLDivElement;

  if (checkLength(element, length)) {
    errorMessage.style.display = "none";
    return true;
  } else {
    errorMessage.style.display = "block";
    return false;
  }
}

function checkLength(
  element: HTMLInputElement | HTMLTextAreaElement,
  length: number
) {
  return element.value.trim().length >= length;
}

export function validateLink(element: HTMLInputElement) {
  const regEx =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  const patternMatches = regEx.test(element.value.trim());

  const parentElement = element.parentElement as HTMLElement;
  const errorMessage = parentElement.querySelector(
    ".invalid-feedback"
  ) as HTMLDivElement;

  if (checkLength(element, 1)) {
    if (patternMatches) {
      errorMessage.style.display = "none";
      return true;
    } else {
      errorMessage.style.display = "block";
      return false;
    }
  } else {
    errorMessage.style.display = "none";
    return true;
  }
}

export function checkUrlProtocol(url: string) {
  if (url && url.length) {
    if (url.includes("http://")) {
      return url;
    } else if (url.includes("https://")) {
      return url;
    } else {
      return `http://${url}`;
    }
  } else {
    return "";
  }
}

export function validateEmail(element: HTMLInputElement) {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const patternMatches = regEx.test(element.value.trim());

  const parentElement = element.parentElement as HTMLElement;
  const errorMessage = parentElement.querySelector(
    ".invalid-feedback"
  ) as HTMLDivElement;

  if (checkLength(element, 1)) {
    if (patternMatches) {
      errorMessage.style.display = "none";
      return true;
    } else {
      errorMessage.style.display = "block";
      return false;
    }
  } else {
    errorMessage.style.display = "none";
    return true;
  }
}
