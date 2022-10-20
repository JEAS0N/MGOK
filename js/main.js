const cards = [
  { image: `image/info/search.svg`,
    head:  `Поиск людей`,
    text: `Открой для себя новую ступень с <b>1 337 228</b> вакансиями от разных представителей`
  },
  { image: `image/info/diploma.svg`,
    head:  `Обучение`,
    text: `Изучайте нужный материал на платформе в любое удобное время`
  },
  { image: `image/info/card.svg`,
    head:  `Стабильность`,
    text: `Круглосуточный доступ к личному кабинету и всей его информации`
  },
  { image: `image/info/leader.svg`,
    head:  `Умения`,
    text: `Каждый пользователь имеет свою страничку со всеми скиллами`
  },
  { image: `image/info/diplomat.svg`,
    head:  `Найм мастеров`,
    text: `Вы сможете нанять самых лучших людей в любой сфере  деятельности человека`
  },
  { image: `image/info/profits.svg`,
    head:  `Актуальность`,
    text: `Предоставление возможности работы в самых передовых компаниях.`
  },
];

const cardBlock = document.querySelector (`.content__conteiner_cards`);
  cards.forEach (card => {
    cardBlock.innerHTML += 
    `<div class='content__card'> 
      <img class='content__card_image' src='${card.image}'> 
      <span class='content__card_head'> ${card.head} </span> 
      <span class='content__card_text'> ${card.text} </span>
    </div>`
  });

const drop = document.querySelector(".popover__content");
  const  popoverOpen = () => {
    drop.classList.add("popover__content_show");
  }
  const  popoverClose = () => {
    drop.classList.remove("popover__content_show");
  }