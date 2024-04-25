const animals = [
    {
      name: "Лев",
      type: "Млекопитающее",
      population: 20000,
      lifespan: 14,
      death: 500,
      habitat: "Африка",
      protected: true,
    },
    {
      name: "Белый медведь",
      type: "Млекопитающее",
      population: 26000,
      lifespan: 30,
      death: 1300,
      habitat: "Арктика",
      protected: true,
    },
    {
      name: "Тигр",
      type: "Млекопитающее",
      population: 3900,
      lifespan: 15,
      death: 1950,
      habitat: "Азия",
      protected: true,
    },
    {
      name: "Гепард",
      type: "Млекопитающее",
      population: 7000,
      lifespan: 12,
      death: 350,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Панда",
      type: "Млекопитающее",
      population: 1800,
      lifespan: 30,
      death: 10,
      habitat: "Китай",
      protected: true,
    },
    {
      name: "Горилла",
      type: "Млекопитающее",
      population: 1000,
      lifespan: 45,
      death: 25,
      habitat: "Африка",
      protected: true,
    },
    {
      name: "Жираф",
      type: "Млекопитающее",
      population: 68000,
      lifespan: 30,
      death: 2000,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Слон",
      type: "Млекопитающее",
      population: 415000,
      lifespan: 70,
      death: 5200,
      habitat: "Африка",
      protected: true,
    },
    {
      name: "Орангутан",
      type: "Млекопитающее",
      population: 104700,
      lifespan: 40,
      death: 2300,
      habitat: "Азия",
      protected: false,
    },
    {
      name: "Зебра",
      type: "Млекопитающее",
      population: 500000,
      lifespan: 25,
      death: 1234,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Коала",
      type: "Млекопитающее",
      population: 43000,
      lifespan: 18,
      death: 2340,
      habitat: "Австралия",
      protected: false,
    },
    {
      name: "Пингвин",
      type: "Птица",
      population: 18000000,
      lifespan: 20,
      death: 9023,
      habitat: "Антарктида",
      protected: false,
    },
    {
      name: "Орел",
      type: "Птица",
      population: 30000,
      lifespan: 30,
      death: 5200,
      habitat: "Евразия",
      protected: false,
    },
    {
      name: "Фламинго",
      type: "Птица",
      population: 4000000,
      lifespan: 30,
      death: 25600,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Крокодил",
      type: "Рептилия",
      population: 2000000,
      lifespan: 60,
      death: 1239,
      death: 5473,
      protected: true,
    },
    {
      name: "Красная пантера",
      type: "Рептилия",
      population: 2000,
      lifespan: 20,
      death: 10,
      habitat: "Южная Америка",
      protected: true,
    },
    {
      name: "Полевая мышь",
      type: "Млекопитающее",
      population: 35000000,
      lifespan: 2,
      death: 64382,
      habitat: "Весь мир",
      protected: false,
    },
    {
      name: "Бобер",
      type: "Млекопитающее",
      population: 100000,
      lifespan: 13,
      death: 1190,
      habitat: "Евразия",
      protected: false,
    },
    {
      name: "Волк",
      type: "Млекопитающее",
      population: 60000,
      lifespan: 15,
      death: 1000,
      habitat: "Азия,Северная Америка",
      protected: false,
    },
    {
      name: "Куница",
      type: "Млекопитающее",
      population: 30000,
      lifespan: 15,
      death: 200,
      habitat: "Азия,Европа",
      protected: true,
    },
    {
      name: "Косуля",
      type: "Млекопитающее",
      population: 52000,
      lifespan: 12,
      death: 5000,
      habitat: "Евразия",
      protected: true,
    },
    {
      name: "Утка-мандаринка",
      type: "Птица",
      population: 50000,
      lifespan: 15,
      death: 86,
      habitat: "Дальний восток",
      protected: true,
    },
    {
      name: "Лось",
      type: "Млекопитающее",
      population: 1200000,
      lifespan: 20,
      death: 1203,
      habitat: "Европа.Тайга",
      protected: true,
    },
    {
      name: "Ёж обыкновенный",
      type: "Млекопитающее",
      population: 25000000,
      lifespan: 4,
      death: 1234,
      habitat: "Весь мир",
      protected: true,
    },
    {
      name: "Кит",
      type: "Млекопитающее",
      population: 10000,
      lifespan: 80,
      death: 922,
      habitat: "Все океаны",
      protected: true,
    },
    {
      name: "Ехидна",
      type: "Яйцекладущее",
      population: 200000,
      lifespan: 50,
      death: 911,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Эму",
      type: "Птица",
      population: 1100000,
      lifespan: 20,
      death: 1337,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Динго",
      type: "Млекопитающее",
      population: 8000,
      lifespan: 10,
      death: 228,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Валлаби",
      type: "Млекопитающее",
      population: 40000,
      lifespan: 12,
      death: 322,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Киви",
      type: "Птица",
      population: 24000,
      lifespan: 40,
      death: 433,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Утконос",
      type: "Млекопитающее",
      population: 5000,
      lifespan: 30,
      death: 11,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Дикий дог",
      type: "Млекопитающее",
      population: 2500,
      lifespan: 11,
      death: 123,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Тасманский дьявол",
      type: "Млекопитающее",
      population: 10000,
      lifespan: 7,
      death: 876,
      habitat: "Австралия",
      protected: true,
    },
    {
      name: "Вомбат",
      type: "Млекопитающее",
      population: 600000,
      lifespan: 16,
      death: 1987,
      habitat: "Австралия",
      protected: false,
    },
    {
      name: "Черный лебедь",
      type: "Птица",
      population: 50000,
      lifespan: 22,
      death: 1945,
      habitat: "Австралия",
      protected: false,
    },
    {
      name: "Ягуар",
      type: "Млекопитающее",
      population: 15000,
      lifespan: 13,
      death: 1939,
      habitat: "Южная Америка",
      protected: true,
    },
    {
      name: "Альпака",
      type: "Млекопитающее",
      population: 3000000,
      lifespan: 16,
      death: 18023,
      habitat: "Южная Америка",
      protected: false,
    },
    {
      name: "Гарпия",
      type: "Птица",
      population: 10000,
      lifespan: 30,
      death: 125,
      habitat: "Южная Америка",
      protected: true,
    },
    {
      name: "Капибара",
      type: "Млекопитающее",
      population: 10000000,
      lifespan: 9,
      death: 4729,
      habitat: "Южная Америка",
      protected: false,
    },
    {
      name: "Кондор",
      type: "Птица",
      population: 3000,
      lifespan: 60,
      death: 50,
      habitat: "Южная Америка",
      protected: true,
    },
    {
      name: "Кайман",
      type: "Рептилия",
      population: 1000000,
      lifespan: 40,
      death: 1020,
      habitat: "Южная Америка",
      protected: false,
    },
    {
      name: "Козодой",
      type: "Млекопитающее",
      population: 50000,
      lifespan: 23,
      death: 530,
      habitat: "Южная Америка",
      protected: true,
    },
    {
      name: "Желтая попугайница",
      type: "Птица",
      population: 100000,
      lifespan: 17,
      death: 1000,
      habitat: "Южная Америка",
      protected: false,
    },
    {
      name: "Пампасный олень",
      type: "Млекопитающее",
      population: 500000,
      lifespan: 18,
      death: 1200,
      habitat: "Южная Америка",
      protected: false,
    },
    {
      name: "Король пингвинов",
      type: "Птица",
      population: 2000000,
      lifespan: 18,
      death: 5400,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Нильский крокодил",
      type: "Рептилия",
      population: 250000,
      lifespan: 80,
      death: 439,
      habitat: "Африка",
      protected: true,
    },
    {
      name: "Черная мамба",
      type: "Рептилия",
      population: 10000,
      lifespan: 12,
      death: 25,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Антилопа гну",
      type: "Млекопитающее",
      population: 1500000,
      lifespan: 22,
      death: 4567,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Капская горная коза",
      type: "Млекопитающее",
      population: 5000,
      lifespan: 12,
      death: 17,
      habitat: "Африка",
      protected: false,
    },
    {
      name: "Японский сурок",
      type: "Млекопитающее",
      population: 10000,
      lifespan: 6,
      death: 234,
      habitat: "Япония",
      protected: false,
    },
  ];
  
  let currentlyDisplayed = animals;

let filterBtn = document.getElementById('filterBtn')
let filterForms = document.getElementById('filter-forms')
let clearFilter = document.getElementById('clearFilterBtn')
let sortBtn = document.getElementById('sortBtn')
let clearSort = document.getElementById('clearSortBtn')
let buildBtn = document.getElementById('build')
let table = document.getElementById('animals-table')
let firstLevel = document.querySelector('select[name="first-level"]');
let secondLevel = document.querySelector('select[name="second-level"]');
let thirdLevel = document.querySelector('select[name="third-level"]');

const optionsData = [
  { name: "population", text: "По численности", value: true },
  { name: "lifespan", text: "По продолжительности жизни<", value: true },
  { name: "death", text: "По смертности", value: true },
];

function initTable(animals) {
  if (!animals) {
      console.error("animals variable is undefined");
      return;
  }

  let table = '<table border="1">';
  table +=
      "<tr><th>Наименование</th><th>Вид животного</th><th>Численность</th><th>Продолжительность жизни(лет)</th><th>Смертность (в год)</th><th>Ареал обитания</th><th>Под охраной?</th></tr>";
      animals.forEach((element) => {
      table += "<tr>";
      table += `<td>${element.name}</td>`;
      table += `<td>${element.type}</td>`;
      table += `<td>${element.population}</td>`;
      table += `<td>${element.lifespan}</td>`;
      table += `<td>${element.death}</td>`;
      table += `<td>${element.habitat}</td>`;
      table += `<td>${element.protected}</td>`;
      table += "</tr>";
  });
  table += "</table>";
  return table;
}

function createTable(animals) {
    console.log("Создание таблицы")
    if (!animals) {
        console.error("animals variable is undefined");
        return;
    }

    let initTable = document.getElementsByClassName("table")[0];

    let table = `
    <th>Наименование</th>
    <th>Вид животного</th>
    <th>Численность</th>
    <th>Продолжительность жизни (лет)</th>
    <th>Смертность (в год))</th>
    <th>Ареал обитания</th>
    <th>Под охраной?</th>
    `
    animals.forEach(element => {
        table += '<tr>';
        table += `<td>${element.name}</td>`;
        table += `<td>${element.type}</td>`;
        table += `<td>${element.population}</td>`;
        table += `<td>${element.lifespan}</td>`;
        table += `<td>${element.death}</td>`;
        table += `<td>${element.habitat}</td>`;
        table += `<td>${element.protected}</td>`;
        table += '</tr>';
    });
    initTable.innerHTML = table
    return table;
}

clearFilter.onclick = function () {
  const inputs = document.querySelectorAll('#name, #type, #habitat, #populationFrom, #populationTo, #lifespanFrom, #lifespanTo');
  const select = document.querySelector('select');

  inputs.forEach(input => input.value = '');
  select.selectedIndex = 0;

  table.innerHTML = createTable(animals);
}

createTable(animals);
filterBtn.onclick = function () {
  let name = document.getElementById('name').value.toLowerCase();
  let habitat = document.getElementById('habitat').value.toLowerCase();
  let populationFrom = parseInt(document.getElementById('populationFrom').value) || 0;
  let populationTo = parseInt(document.getElementById('populationTo').value) || Number.MAX_SAFE_INTEGER;
  let lifespanFrom = parseInt(document.getElementById('lifespanFrom').value) || 0;
  let lifespanTo = parseInt(document.getElementById('lifespanTo').value) || Number.MAX_SAFE_INTEGER;
  let type = document.getElementById('type').value.toLowerCase();
  let isGuarded = document.getElementById('isGuarded').value;

  let filteredAnimals = animals.filter(animal => {
    let matchesName = !name || animal.name.toLowerCase().includes(name);
    console.log(matchesName)
    console.log(animal.name)
    console.log(name)
    let matchesHabitat = !habitat || animal.habitat.toLowerCase().includes(habitat);
    let matchesPopulation = animal.population >= populationFrom && animal.population <= populationTo;
    let matchesLifespan = animal.lifespan >= lifespanFrom && animal.lifespan <= lifespanTo;
    let matchesType = !type || animal.type.toLowerCase().includes(type);
    let matchesIsGuarded = isGuarded === 'all' || animal.protected === (isGuarded === 'true');
    
    console.log(matchesHabitat)
    console.log(matchesPopulation)
    console.log(matchesLifespan)
    console.log(matchesType)
    console.log(matchesIsGuarded)

    console.log(matchesName && matchesHabitat && matchesPopulation && matchesLifespan && matchesType && matchesIsGuarded);

    return matchesName && matchesHabitat && matchesPopulation && matchesLifespan && matchesType && matchesIsGuarded;
  });

  currentlyDisplayed = filteredAnimals;
  table.innerHTML = initTable(currentlyDisplayed);
}

sortBtn.onclick = () => {
  let firstLevel = {
      name: document.querySelector('select[name="first-level"]').value,
      scale: document.querySelector('input[name="scales-1"]:checked')
          ? true
          : false,
  };
  let secondLevel = {
      name: document.querySelector('select[name="second-level"]').value,
      scale: document.querySelector('input[name="scales-2"]:checked')
          ? true
          : false,
  };
  let thirdLevel = {
      name: document.querySelector('select[name="third-level"]').value,
      scale: document.querySelector('input[name="scales-3"]:checked')
          ? true
          : false,
  };

  let sorted = currentlyDisplayed.sort((a, b) => {
      let result = 0;

      if (firstLevel.name && a[firstLevel.name] !== b[firstLevel.name]) {
          result = firstLevel.scale
              ? b[firstLevel.name] - a[firstLevel.name]
              : a[firstLevel.name] - b[firstLevel.name];
      }
      if (
          result === 0 &&
          secondLevel.name &&
          a[secondLevel.name] !== b[secondLevel.name]
      ) {
          result = secondLevel.scale
              ? b[secondLevel.name] - a[secondLevel.name]
              : a[secondLevel.name] - b[secondLevel.name];
      }
      if (
          result === 0 &&
          thirdLevel.name &&
          a[thirdLevel.name] !== b[thirdLevel.name]
      ) {
          result = thirdLevel.scale
              ? b[thirdLevel.name] - a[thirdLevel.name]
              : a[thirdLevel.name] - b[thirdLevel.name];
      }

      return result;
  });

  currentlyDisplayed = sorted;
  table.innerHTML = initTable(sorted);
};

clearSort.onclick = () => {
  const fieldset = document.querySelector("fieldset");
  const selects = fieldset.querySelectorAll("select");
  const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');

  disableSelect(secondLevel);
  disableSelect(thirdLevel);

  selects.forEach((select) => {
      select.selectedIndex = 3;
  });

  checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
  });

  clearOptions();

  table.innerHTML = initTable(monkeys);
};

const enableSelect = (select) => {
  select.disabled = false;
};

const disableSelect = (select) => {
  select.disabled = true;
};

firstLevel.addEventListener("change", () => {
  clearOptions();
  if (firstLevel.value !== "none") {
      let optionByName = getOptionByName(firstLevel.value);
      if (optionByName) optionByName.value = false;
      setupSelectOptions(secondLevel);
      enableSelect(secondLevel);
  } else {
      disableSelect(secondLevel);
      disableSelect(thirdLevel);
  }
});

secondLevel.addEventListener("change", () => {
  let validOptions = optionsData.filter(
      (option) => option.name !== firstLevel.value
  );

  if (secondLevel.value !== "none") {
      let optionByName = getOptionByName(secondLevel.value);
      validOptions.forEach((option) => {
          if (option === optionByName) optionByName.value = false;
          else option.value = true;
      });
      validOptions = optionsData.filter((option) => option.value === true);

      setupSelectOptions(thirdLevel, validOptions);
      enableSelect(thirdLevel);
  } else {
      disableSelect(thirdLevel);
  }
});

const setupSelectOptions = (select, list = optionsData) => {
  let innerHTML = "";
  list.forEach((option) => {
      if (option.value)
          innerHTML += `<option value="${option.name}">${option.text}</option>`;
  });
  innerHTML += `<option value="none" selected>Нет</option>`;
  select.innerHTML = innerHTML;
};

const clearOptions = () => optionsData.map((option) => (option.value = true));

const getOptionByName = (requiredName) =>
  optionsData.find((option) => option.name === requiredName);

document.addEventListener('DOMContentLoaded', function () {
  let selects = document.getElementsByClassName('sort_select');
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  Array.from(selects).forEach((select, index) => {
      if (index !== 0) {
          select.disabled = true;
      }

      select.addEventListener('change', function () {
          let selectedValue = this.value;
          let nextSelect = selects[index + 1];

          if (nextSelect) {
              nextSelect.disabled = false;

              let options = nextSelect.querySelectorAll('option');
              options.forEach((option) => {
                  option.disabled = option.value === selectedValue || option.disabled;
              });

              nextSelect.value = "none";
          }

          checkboxes[index].disabled = false;

          if (index > 0) {
              checkboxes[index - 1].disabled = true;
          }

          resetSelectsAndCheckboxes(index + 1);
      });
  });

  function resetSelectsAndCheckboxes(startIndex) {
      for (let i = startIndex; i < selects.length; i++) {
          selects[i].disabled = true;
          selects[i].value = "none";
          checkboxes[i].disabled = true;

          let options = selects[i].querySelectorAll('option');
          options.forEach((option) => {
              option.disabled = false;
          });
      }
  }
});