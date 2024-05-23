let monkeys = [
    {
        name: "Сирихта",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/sirihta.jpg",
        length: 16,
        weight: 160,
        subspecies: "Долгопятый примат",
        habitat: "Тропические леса",
        lifespan: 10,
    },
    {
        name: "Плакса",
        image: "https://zoopark-vl.ru/wp-content/uploads/2022/12/kapuczin-plaksa-5.jpg",
        length: 27,
        weight: 250,
        subspecies: "Капуцинообразные",
        habitat: "Тропические леса",
        lifespan: 44,
    },
    {
        name: "Фави",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/favi-obezyana.jpg",
        length: 36,
        weight: 300,
        subspecies: "Широконосые",
        habitat: "Тропические леса",
        lifespan: 50,
    },
    {
        name: "Белогрудый капуцин",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/belogrudiy-kapucin.jpg",
        length: 55,
        weight: 400,
        subspecies: "Капуцинообразные",
        habitat: "Южная Америка",
        lifespan: 50,
    },
    {
        name: "Саки-монах",
        image: "https://ecoportal.info/wp-content/uploads/2021/12/saki-monah-2-544x342.jpg",
        length: 48,
        weight: 400,
        subspecies: "Саковые",
        habitat: "Южная Америка",
        lifespan: 35,
    },
    {
        name: "Карликовая игрунка",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/karlikovaya-igrunka.jpg",
        length: 15,
        weight: 100,
        subspecies: "Игрунковые",
        habitat: "Южная Америка",
        lifespan: 12,
    },
    {
        name: "Черный тамарин",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/kapucin-plaksa.jpg",
        length: 23,
        weight: 500,
        subspecies: "Игрунковые",
        habitat: "Южная Америка",
        lifespan: 15,
    },
    {
        name: "Черноспинный тамарин",
        image: "https://ecoportal.info/wp-content/uploads/2021/12/chernospinniy-tamarin.jpg",
        length: 23,
        weight: 500,
        subspecies: "Игрунковые",
        habitat: "Южная Америка",
        lifespan: 15,
    },
    {
        name: "Краснорукий тамарин",
        image: "https://ecoportal.info/wp-content/uploads/2021/12/tamarin-krasnorukiy.jpg",
        length: 23,
        weight: 500,
        subspecies: "Игрунковые",
        habitat: "Южная Америка",
        lifespan: 15,
    },
    {
        name: "Хохлатый тамарин",
        image: "https://ecoportal.info/wp-content/uploads/2021/12/hohlatiy-tamarin-1-544x306.jpg",
        length: 35,
        weight: 450,
        subspecies: "Игрунковые",
        habitat: "Южная Америка",
        lifespan: 15,
    },
    {
        name: "Мармозетка",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/marmozetka-544x374.jpg",
        length: 22,
        weight: 300,
        subspecies: "Узконосые",
        habitat: "Лиановые леса",
        lifespan: 10,
    },
    {
        name: "Гусар",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/martyshka-gusar.jpg",
        length: 75,
        weight: 12000,
        subspecies: "Мартышковые",
        habitat: "Африка",
        lifespan: 30,
    },
    {
        name: "Зеленая мартышка",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/favi-obezyana.jpg",
        length: 50,
        weight: 3500,
        subspecies: "Мартышковые",
        habitat: "Африка",
        lifespan: 20,
    },
    {
        name: "Яванский макак",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/yavanskiy-makak.jpg",
        length: 65,
        weight: 9000,
        subspecies: "Мартышковые",
        habitat: "Средняя Азия",
        lifespan: 20,
    },
    {
        name: "Японский макак",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/serebristyj-gibbon-544x367.jpg",
        length: 53,
        weight: 12000,
        subspecies: "Мартышковые",
        habitat: "Япония",
        lifespan: 10,
    },
    {
        name: "Серебристый гиббон",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/karlikovaya-igrunka.jpg",
        length: 70,
        weight: 8000,
        subspecies: "Гиббоновые",
        habitat: "Азия",
        lifespan: 25,
    },
    {
        name: "Желтощекий хохлатый гиббон",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/zheltoschekiy-hohlatiy-gibbon.jpg",
        length: 90,
        weight: 13000,
        subspecies: "Гиббоновые",
        habitat: "Средняя Азия",
        lifespan: 50,
    },
    {
        name: "Восточный хулок",
        image: "https://ecoportal.info/wp-content/uploads/2021/12/chernospinniy-tamarin.jpg",
        length: 82,
        weight: 7000,
        subspecies: "Гиббоновые",
        habitat: "Азия",
        lifespan: 40,
    },
    {
        name: "Сиаманг сростнопалый",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/Siamang-srostnopaliy.jpg",
        length: 58,
        weight: 11000,
        subspecies: "Гиббоновые",
        habitat: "Тропические леса",
        lifespan: 40,
    },
    {
        name: "Карликовый гиббон",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/karlikoviy-gibbon.jpg",
        length: 63,
        weight: 6000,
        subspecies: "Гиббоновые",
        habitat: "Ментаврийские острова",
        lifespan: 40,
    },
    {
        name: "Суматранский орангутан",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/sumatranskiy-orangutan.jpg",
        length: 100,
        weight: 45000,
        subspecies: "Орангутан",
        habitat: "Суматра",
        lifespan: 30,
    },
    {
        name: "Борнейский орангутан",
        image: "https://ar.culture.ru/attachments/attachment/preview/5b02c0d145af9af40c44e9e0-preview.jpg",
        length: 110,
        weight: 50000,
        subspecies: "Орангутан",
        habitat: "Тропические леса",
        lifespan: 40,
    },
    {
        name: "Калимантанский орангутан",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/kalimantanskiy-orangutang.jpg",
        length: 110,
        weight: 50000,
        subspecies: "Орангутан",
        habitat: "Суматра",
        lifespan: 40,
    },
    {
        name: "Береговая горилла",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/yavanskiy-makak.jpg",
        length: 170,
        weight: 170000,
        subspecies: "Горилла",
        habitat: "Африка",
        lifespan: 35,
    },
    {
        name: "Равнинная горилла",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67YzWiyUzXdO2n8k27NN-nqnWb6cuWSb17HwUdvw6uFQNFn4bXvCuP40lag5qolySAtM&usqp=CAU",
        length: 170,
        weight: 170000,
        subspecies: "Горилла",
        habitat: "Тропические леса",
        lifespan: 35,
    },
    {
        name: "Горная горилла",
        image: "https://img.tourister.ru/files/2/4/3/6/2/4/1/0/clones/800_533_fixedwidth.jpg?t=1696204800037",
        length: 170,
        weight: 170000,
        subspecies: "Горилла",
        habitat: "Африка",
        lifespan: 40,
    },
    {
        name: "Бонобо",
        image: "https://ecoportal.info/wp-content/uploads/2018/10/bonobo.jpg",
        length: 111,
        weight: 38000,
        subspecies: "Мартышковые",
        habitat: "Африка",
        lifespan: 40,
    },
    {
        name: "Коронованная (голубая) мартышка",
        image: "https://sun9-59.userapi.com/impg/l5aP33kYHhxAZWg4_MTvtAiVSgUYmJ0Y2YFESg/bm2PMuo-Wtk.jpg?size=704x807&quality=96&sign=66261bc7790bd10cacb56b8a8979823a&c_uniq_tag=62ZogWBM4oh0qDAaT7loOObIsypEe2Pz6MpN1vcjZPo&type=album",
        length: 60,
        weight: 6000,
        subspecies: "Мартышковые",
        habitat: "Тропические леса",
        lifespan: 20,
    },
    {
        name: "Шимпанзе обыкновенный",
        image: "https://animals.pibig.info/uploads/posts/2023-04/1680543751_animals-pibig-info-p-obiknovennii-shimpanze-zhivotnie-krasivo-1.jpg",
        length: 130,
        weight: 45000,
        subspecies: "Шимпанзе",
        habitat: "Африка",
        lifespan: 35,
    },
    {
        name: "Бледный саки",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/1703615/pub_6249a9302bcf913ddf3bdadb_6249c87a9fe0ef42e5c89283/scale_1200",
        length: 48,
        weight: 400,
        subspecies: "Саки",
        habitat: "Южная Америка",
        lifespan: 35,
    },
    {
        name: "Плащеносный павиан",
        image: "https://zoopark-vl.ru/wp-content/uploads/2022/12/plashhenosnyj-pavian-3.jpg",
        length: 100,
        weight: 30000,
        subspecies: "Гамадрил",
        habitat: "Африка",
        lifespan: 40,
    },
    {
        name: "Кахау",
        image: "https://ar.culture.ru/attachments/attachment/preview/5b02c0d145af9af40c44e9e0-preview.jpg",
        length: 72,
        weight: 22000,
        subspecies: "Орангутан",
        habitat: "Калимантан",
        lifespan: 20,
    },
    {
        name: "Саймири",
        image: "https://zoo-oasis.ru/wp-content/uploads/2018/12/obezyanka_saymiri_belichiy.jpg",
        length: 30,
        weight: 700,
        subspecies: "Широконосые",
        habitat: "Южная Америка",
        lifespan: "Саймири",
    },
    {
        name: "Павиан анубис",
        image: "https://media.istockphoto.com/id/1358445493/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%BB%D0%B8%D0%B2%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D0%B1%D0%B0%D0%B1%D1%83%D0%B8%D0%BD-%D1%81%D0%B8%D0%B4%D0%B8%D1%82-%D0%BD%D0%B0-%D0%BF%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=xvbeFdXUyVQJw6lQR2kImzdLaFl84tTHp-Zsbly9Eg8=",
        length: 100,
        weight: 4000,
        subspecies: "Гамадрил",
        habitat: "Африка",
        lifespan: 40,
    },
    {
        name: "Патас",
        image: "https://img.freepik.com/premium-photo/patas-monkey-erythrocebus-patas_641010-1757.jpg",
        length: 75,
        weight: 12000,
        subspecies: "Мартышковые",
        habitat: "Африка",
        lifespan: 30,
    },
    {
        name: "Макак свинохвостый",
        image: "https://live.staticflickr.com/65535/48101918811_aa98789f27_h.jpg",
        length: 65,
        weight: 9000,
        subspecies: "Мартышковые",
        habitat: "Суматра",
        lifespan: 26,
    },
    {
        name: "Макак чёрный",
        image: "https://cs5.pikabu.ru/post_img/big/2014/08/07/8/1407411521_1302550962.jpg",
        length: 65,
        weight: 9000,
        subspecies: "Мартышковые",
        habitat: "Тропические леса",
        lifespan: 26,
    },
    {
        name: "Макак львинохвостый",
        image: "https://minio.nplus1.ru/app-images/155693/a3ed4396640af166172e0fae83dc7122.jpg",
        length: 35,
        weight: 10000,
        subspecies: "Мартышковые",
        habitat: "Тропические леса",
        lifespan: 26,
    },
    {
        name: "Мико",
        image: "https://p0.pikist.com/photos/394/888/monkey-nature-forest-mico-marmoset.jpg",
        length: 22,
        weight: 400,
        subspecies: "Игрунковые",
        habitat: "Тропические леса",
        lifespan: 20,
    },
    {
        name: "Гельдиевая каллимико",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/goeldis_marmoset.jpg",
        length: 23,
        weight: 700,
        subspecies: "Игрунковые",
        habitat: "Южная Америка",
        lifespan: 25,
    },
    {
        name: "Сагуин",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/tamarin.jpg",
        length: 23,
        weight: 700,
        subspecies: "Тамарин",
        habitat: "Южная Америка",
        lifespan: 15,
    },
    {
        name: "Седловидный тамарин",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/saddle_back_tamarin.jpg",
        length: 23,
        weight: 700,
        subspecies: "Тамарин",
        habitat: "Южная Америка",
        lifespan: 15,
    },
    {
        name: "Львиный игрунок",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/lion_tamarin.jpg",
        length: 31,
        weight: 700,
        subspecies: "Игрунковые",
        habitat: "Южная Америка",
        lifespan: 20,
    },
    {
        name: "Крепкие (хохлатые) капуцины",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/robust_capuchin_monkey.jpg",
        length: 55,
        weight: 400,
        subspecies: "Капуцинообразные",
        habitat: "Южная Америка",
        lifespan: 54,
    },
    {
        name: "Прыгун",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/titi_monkey.jpg",
        length: 61,
        weight: 1400,
        subspecies: "Саковые",
        habitat: "Южная Америка",
        lifespan: 35,
    },
    {
        name: "Мохнатые саки",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/bearded_saki.jpg",
        length: 51,
        weight: 8000,
        subspecies: "Саковые",
        habitat: "Южная Америка",
        lifespan: 35,
    },
    {
        name: "Питецин",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/saki_monkey.jpg",
        length: 50,
        weight: 2000,
        subspecies: "Мартышковые",
        habitat: "Африка",
        lifespan: 20,
    },
    {
        name: "Уакари",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/uakari.jpg",
        length: 50,
        weight: 3500,
        subspecies: "Саковые",
        habitat: "Южная Америка",
        lifespan: 35,
    },
    {
        name: "Ревун",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/howler_monkey.jpg",
        length: 70,
        weight: 8000,
        subspecies: "Паукообразные обезьяны",
        habitat: "Южная Америка",
        lifespan: 20,
    },
    {
        name: "Мирики",
        image: "https://zooblog.ru/wp-content/uploads/2022/07/muriqui.jpg",
        length: 40,
        weight: 1000,
        subspecies: "Паукообразные обезьяны",
        habitat: "Южная Америка",
        lifespan: 20,
    },
];
let currentlyDisplayed = monkeys;

let filterBtn = document.getElementById("filterBtn");
let filterForms = document.getElementById("filter-forms");
let clearFilter = document.getElementById("clearFilterBtn");
let sortBtn = document.getElementById("sortBtn");
let clearSort = document.getElementById("clearSortBtn");

let table = document.getElementById("monkeys-table");
let firstLevel = document.querySelector('select[name="first-level"]');
let secondLevel = document.querySelector('select[name="second-level"]');
let thirdLevel = document.querySelector('select[name="third-level"]');

const optionsData = [
    { name: "length", text: "По длине", value: true },
    { name: "weight", text: "По весу", value: true },
    { name: "lifespan", text: "По продолжительности жизни", value: true },
];

document.addEventListener("DOMContentLoaded", () => {
    table.innerHTML = initTable(monkeys);
    setupSelectOptions(firstLevel);
});

function initTable(monkeys) {
    if (!monkeys) {
        console.error("monkeys variable is undefined");
        return;
    }

    let table = '<table border="1">';
    table +=
        "<tr><th>Фото</th><th>Название</th><th>Длина (в сантиметрах)</th><th>Вес (в граммах)</th><th>Подвид</th><th>Зона обитания</th><th>Продолжительность жизни (В годах)</th></tr>";
    monkeys.forEach((element) => {
        table += "<tr>";
        table += `<td><img src="${element.image}" width="100"></td>`;
        table += `<td>${element.name}</td>`;
        table += `<td>${element.length}</td>`;
        table += `<td>${element.weight}</td>`;
        table += `<td>${element.subspecies}</td>`;
        table += `<td>${element.habitat}</td>`;
        table += `<td>${element.lifespan}</td>`;
        table += "</tr>";
    });
    table += "</table>";
    return table;
}

filterBtn.onclick = () => {
    currentlyDisplayed = monkeys;
    let name = document.getElementById("name").value.toLowerCase();
    let lengthFrom = document.getElementById("length-from").value;
    let lengthTo = document.getElementById("length-to").value;
    let weightFrom = document.getElementById("weight-from").value;
    let weightTo = document.getElementById("weight-to").value;
    let subspecies = document.getElementById("subspecies").value.toLowerCase();

    let filterConditions = [];

    if (name) {
        filterConditions.push((monkey) =>
            monkey.name.toLowerCase().includes(name)
        );
    }

    if (subspecies) {
        filterConditions.push((monkey) =>
            monkey.subspecies.toLowerCase().includes(subspecies.toLowerCase())
        );
    }

    if (weightFrom) {
        filterConditions.push((monkey) => monkey.weight >= weightFrom);
    }

    if (weightTo) {
        filterConditions.push((monkey) => monkey.weight <= weightTo);
    }

    if (lengthFrom) {
        filterConditions.push((monkey) => monkey.length >= lengthFrom);
    }

    if (lengthTo) {
        filterConditions.push((monkey) => monkey.length <= lengthTo);
    }

    let filtered = currentlyDisplayed.filter((monkey) =>
        filterConditions.every((condition) => condition(monkey))
    );

    currentlyDisplayed = filtered;
    table.innerHTML = initTable(currentlyDisplayed);
};

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

clearFilter.onclick = () => {
    filterForms
        .querySelectorAll('input[type="text"], input[type="number"]')
        .forEach((input) => {
            input.value = "";
        });
    table.innerHTML = initTable(monkeys);
    currentlyDisplayed = monkeys;
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

let graph = d3.select("#graph");
let buildBtn = d3.select("#build");
let ox = d3.select("select[name='OX']");
let oy = d3.select("select[name='OY']");

const marginX = 50;
const marginY = 50;
const height = 400;
const width = 800;

let svg = d3.select("svg").attr("height", height).attr("width", width);

buildBtn.on("click", () => {
    drawGraph();
});

const createArrGraph = (selectedOX, selectedOY) => {
    const result = d3.rollups(
        currentlyDisplayed,
        (v) => [
            d3.min(v, (d) => d[selectedOY]),
            d3.max(v, (d) => d[selectedOY]),
        ],
        (d) => d[selectedOX]
    );

    return Array.from(result, ([labelX, values]) => ({ labelX, values }));
};

const drawGraph = () => {
    // значения по оси ОХ
    const selectedOX = d3.select("select[name='OX']").property("value");
    let selectedOY = d3.select("select[name='OY']").property("value");

    const isMax = d3.select("input[name='maxCheck']").property("checked");
    const isMin = d3.select("input[name='minCheck']").property("checked");

    console.log(isMax, isMin);
    let arrGraph = createArrGraph(selectedOX, selectedOY);
    svg.selectAll("*").remove();

    // создаем шкалы преобразования и выводим оси
    const [scX, scY] = createAxis(arrGraph, isMin, isMax);

    if (isMin) {
        createChart(arrGraph, scX, scY, 0, "blue");
    }
    if (isMax) {
        createChart(arrGraph, scX, scY, 1, "red");
    }
};

const createAxis = (arrGraph) => {
    let firstRange = d3.extent(arrGraph.map((d) => d.values[0]));
    let secondRange = d3.extent(arrGraph.map((d) => d.values[1]));
    let min = firstRange[0];
    let max = secondRange[1];

    let scaleX = d3
        .scaleBand()
        .domain(arrGraph.map((d) => d.labelX))
        .range([0, width - 2 * marginX]);

    let scaleY = d3
        .scaleLinear()
        .domain([min * 0.85, max * 1.1])
        .range([height - 2 * marginY, 0]);

    let axisX = d3.axisBottom(scaleX); // горизонтальная
    let axisY = d3.axisLeft(scaleY); // вертикальная

    // отрисовка осей в SVG-элементе
    svg.append("g")
        .attr("transform", `translate(${marginX}, ${height - marginY})`)
        .call(axisX)
        .selectAll("text") // подписи на оси - наклонные
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", (d) => "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .call(axisY);

    return [scaleX, scaleY];
};

function createChart(arrGraph, scaleX, scaleY, index, color) {
    const r = 4;
    let ident = index == 0 ? -r / 2 : r / 2;

    svg.selectAll(".dot")
        .data(arrGraph)
        .enter()
        .append("circle")
        .attr("r", r)
        .attr("cx", (d) => scaleX(d.labelX) + scaleX.bandwidth() / 2)
        .attr("cy", (d) => scaleY(d.values[index]) + ident)
        .attr("transform", `translate(${marginX}, ${marginY})`)
        .style("fill", color);
}
