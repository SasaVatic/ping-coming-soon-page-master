const form = document.querySelector(".form");
const emailInput = form.querySelector(".form-input");
const errorMsg = form.querySelector(".form-error");

const handleSubmit = (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailInput.value || !regex.test(email)) {
    errorMsg.classList.add("block");
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("border-light-red");
    return;
  }
  emailInput.value = "";
  errorMsg.classList.remove("block");
  errorMsg.classList.add("hidden");
  emailInput.classList.remove("border-light-red");
};

form.addEventListener("submit", handleSubmit);
