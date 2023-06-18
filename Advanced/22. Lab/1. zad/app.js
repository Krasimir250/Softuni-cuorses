window.addEventListener('load', solve);

function solve() {
  const select = document.getElementById('fuel');
  const inputs = document.getElementsByTagName('input');

  let totalProfit = 0;

  function getValueOfElement(element) {
    return document.getElementById(element).value;
  }

  function updateValueOfElement(element, value, isSelect) {
    document.getElementById(element).value = isSelect
      ? value.toUpperCase()
      : value;
  }

  function clearFields() {
    select.value = 'petrol';
    for (const input of inputs) {
      input.value = '';
    }
  }

  function extractData() {
    const make = getValueOfElement('make');
    const model = getValueOfElement('model');
    const year = getValueOfElement('year');
    const fuelType = getValueOfElement('fuel');
    const price = getValueOfElement('original-cost');
    const newPrice = getValueOfElement('selling-price');
    return { make, model, year, fuelType, price, newPrice };
  }

  function renderData(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML += `
      <tr class="row">
        <td>${data.make}</td>
        <td>${data.model}</td>
        <td>${data.year}</td>
        <td>${data.fuelType}</td>
        <td>${data.price}</td>
        <td>${data.newPrice}</td>
        <td>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn sell">Sell</button>
        </td>
      </tr>
    `;
  }

  function checkErrors() {
    const inputsError = Array.from(inputs).some(
      (inp) => inp.value.trim() === ''
    );

    const price = getValueOfElement('original-cost');
    const newPrice = getValueOfElement('selling-price');

    const priceError = Number(newPrice) <= Number(price);
    return inputsError || priceError;
  }

  // Click on Publish
  const button = document.getElementById('publish');

  button.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkErrors()) return;
    renderData(extractData());
    clearFields();
    updateListeners();
  });

  // Click on Edit
  function updateListeners() {
    const editButtons = document.querySelectorAll('.action-btn.edit');

    if (editButtons) {
      for (const button of editButtons) {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          const row = e.currentTarget.parentElement.parentElement;

          const [make, model, year, fuel, price, newPrice] = [
            row.children[0].textContent,
            row.children[1].textContent,
            row.children[2].textContent,
            row.children[3].textContent,
            row.children[4].textContent,
            row.children[5].textContent,
          ];

          updateValueOfElement('make', make);
          updateValueOfElement('model', model);
          updateValueOfElement('year', year);
          updateValueOfElement('fuel', fuel);
          updateValueOfElement('original-cost', price);
          updateValueOfElement('selling-price', newPrice);

          row.remove();
        });
      }
    }

    const sellButtons = document.querySelectorAll('.action-btn.sell');

    if (sellButtons) {
      for (const button of sellButtons) {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          const row = e.currentTarget.parentElement.parentElement;

          const [make, model, year, fuel, price, newPrice] = [
            row.children[0].textContent,
            row.children[1].textContent,
            row.children[2].textContent,
            row.children[3].textContent,
            row.children[4].textContent,
            row.children[5].textContent,
          ];

          const ul = document.getElementById('cars-list');

          const profit = Number(newPrice) - Number(price);

          ul.innerHTML += `
            <li class="each-list">
              <span>${make} ${model}</span>
              <span>${year}</span>
              <span>${profit}</span>
            </li>
          `;

          totalProfit += profit;

          document.getElementById('profit').textContent =
            totalProfit.toFixed(2);

          row.remove();
        });
      }
    }
  }

  // Click on Sell
}
