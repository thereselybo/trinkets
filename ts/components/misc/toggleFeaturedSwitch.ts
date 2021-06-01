const switchCheckbox = document.querySelector("#featured") as HTMLInputElement;
const featuredStatus = document.querySelector(
  "#featuredStatus"
) as HTMLLabelElement;

export default function toggleFeaturedSwitch() {
  switchCheckbox.onclick = () => {
    if (switchCheckbox.classList.contains("checked")) {
      switchCheckbox.classList.remove("checked");
      featuredStatus.innerText = "Off";
    } else {
      switchCheckbox.classList.add("checked");
      featuredStatus.innerText = "On";
    }
  };

  if (switchCheckbox.classList.contains("checked")) {
    featuredStatus.innerText = "On";
    switchCheckbox.checked = true;
    return true;
  } else {
    featuredStatus.innerText = "Off";
    return false;
  }
}

toggleFeaturedSwitch();
