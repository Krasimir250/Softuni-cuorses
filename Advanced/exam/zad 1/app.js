window.addEventListener("load", solve);

function solve() {
  const carModelInput = document.querySelector("#car-model");
  const carYearInput = document.querySelector("#car-year");
  const partNameInput = document.querySelector("#part-name");
  const partNumberInput = document.querySelector("#part-number");
  const conditionSelect = document.querySelector("#condition");

  const nextButton = document.querySelector("#next-btn");
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");

  function hideIMG() {
    document.querySelector("#complete-img").style.visibility = "hidden";
    document.querySelector("#complete-text").textContent = "";
  }

  function showIMG() {
    document.querySelector("#complete-img").style.visibility = "visible";
    document.querySelector("#complete-text").textContent = "Part is Ordered!";
  }

  function clearAllFields() {
    carModelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionSelect.value = "";
  }

  function fillFields(carModel, carYear, partName, partNumber, condition) {
    carModelInput.value = carModel;
    carYearInput.value = carYear;
    partNameInput.value = partName;
    partNumberInput.value = partNumber;
    conditionSelect.value = condition;
  }

  function extractInputData() {
    const carModel = carModelInput.value;
    const carYear = carYearInput.value;
    const partName = partNameInput.value;
    const partNumber = partNumberInput.value;
    const condition = conditionSelect.value;

    const hasErrors = checkErrors(
      carModel,
      carYear,
      partName,
      partNumber,
      condition
    );

    if (!hasErrors) {
      infoList.innerHTML += `
                      <li class="part-content">
                              <article>
                                      <p>Car Model: ${carModel}</p>
                                      <p>Car Year: ${carYear}</p>
                                      <p>Part Name: ${partName}</p>
                                      <p>Part Number: ${partNumber}</p>
                                      <p>Condition: ${condition}</p>
                              </article>
                              <button class="edit-btn">Edit</button>
                              <button class="continue-btn">Continue</button>
                      </li>
              `;

      nextButton.disabled = true;
      clearAllFields();
      onClickEdit();
      onClickContinue();
      hideIMG();
    }
  }

  function checkErrors(carModel, carYear, partName, partNumber, condition) {
    if (
      carModel === "" ||
      carYear === "" ||
      partName === "" ||
      partNumber === "" ||
      condition === "" ||
      Number(carYear < 1980) ||
      Number(carYear) > 2023
    ) {
      return true;
    }
  }

  // On click nextBTN
  nextButton.addEventListener("click", function (e) {
    e.preventDefault();
    extractInputData();
  });

  function onClickEdit() {
    const editButtons = document.querySelectorAll(".edit-btn");
    for (const btn of editButtons) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = e.currentTarget.parentNode;
        const pElements = parent.children[0];

        const [carModel, carYear, partName, partNumber, condition] = [
          pElements.children[0].textContent.split(": ")[1],
          pElements.children[1].textContent.split(": ")[1],
          pElements.children[2].textContent.split(": ")[1],
          pElements.children[3].textContent.split(": ")[1],
          pElements.children[4].textContent.split(": ")[1],
        ];

        fillFields(carModel, carYear, partName, partNumber, condition);

        console.log(parent);

        parent.remove();

        nextButton.disabled = false;
      });
    }
  }

  function onClickContinue() {
    const continueButtons = document.querySelectorAll(".continue-btn");
    for (const btn of continueButtons) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = e.currentTarget.parentElement;
        const pElements = parent.children[0];

        const [carModel, carYear, partName, partNumber, condition] = [
          pElements.children[0].textContent.split(": ")[1],
          pElements.children[1].textContent.split(": ")[1],
          pElements.children[2].textContent.split(": ")[1],
          pElements.children[3].textContent.split(": ")[1],
          pElements.children[4].textContent.split(": ")[1],
        ];

        if (carModel && carYear && partName && partNumber && condition) {
          confirmList.innerHTML += `
                      <li class="part-content">
                              <article>
                                      <p>Car Model: ${carModel}</p>
                                      <p>Car Year: ${carYear}</p>
                                      <p>Part Name: ${partName}</p>
                                      <p>Part Number: ${partNumber}</p>
                                      <p>Condition: ${condition}</p>
                              </article>
                              <button class="confirm-btn">Confirm</button>
                              <button class="cancel-btn">Cancel</button>
                      </li>
              `;

          parent.remove();

          nextButton.disabled = false;

          onClickConfim();
          onClickCancel();
        }
      });
    }
  }

  function onClickConfim() {
    const confirmButtons = document.querySelectorAll(".confirm-btn");
    for (const btn of confirmButtons) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = e.currentTarget.parentElement;
        parent.remove();
        nextButton.disabled = false;
        showIMG();
      });
    }
  }

  function onClickCancel() {
    const cancelButtons = document.querySelectorAll(".cancel-btn");
    for (const btn of cancelButtons) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = e.currentTarget.parentElement;
        parent.remove();
        nextButton.disabled = false;
      });
    }
  }
}
