const showInputError = (inputElement) => {
  inputElement.classList.add('form__input_type_error');
}

const hideInputError = (inputElement) => {
  inputElement.classList.remove('form__input_type_error');
}

const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement);
  } else {
    hideInputError(inputElement);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_inactive');
  } else {
    buttonElement.classList.remove('form__button_inactive');
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.input'))
  const buttonElement = formElement.querySelector('.form__button')
  toggleButtonState(inputList, buttonElement)
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement)
      toggleButtonState(inputList, buttonElement)
    })
  })
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'))
  formList.forEach(formElement => {
    formElement.addEventListener('submit', e => {
      e.preventDefault()
      getUserMessage(formElement)
    })
    setEventListeners(formElement)
  })
}

function getUserMessage(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.input'))
      const userMessage = inputList.reduce((obj, input) => {
        obj[input.name] = input.value;
        return obj
      }, {})
      console.log(userMessage)
}

enableValidation()