const days = JSON.parse(`[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]`);

const daysContainer = document.querySelector(".js-days");
let max = days[0].amount;

days.forEach((element) => {
  if (Math.max(max, element.amount) > max) {
    max = element.amount;
  }
});

days.forEach((element, index) => {
  daysContainer.innerHTML += `
        <div class="day${index} day">
          <div class="amount">$${element.amount}</div>
          <div class="diagram"></div>
          <p>${element.day}</p>
        </div>
    `;
});

const dayDiagrams = document.querySelectorAll(".spending .days .day .diagram");
let dayAmounts = document.querySelectorAll(`.spending .days .day .amount`);

days.forEach((element, index) => {
  const date = new Date();
  let today = false;

  if (date.getDay() === 0 && index === 7) {
    dayDiagrams[index].style.backgroundColor = "hsl(186, 34%, 60%)";
    today = true;
  } else if (date.getDay() - 1 === index) {
    dayDiagrams[index].style.backgroundColor = "hsl(186, 34%, 60%)";
    today = true;
  }

  dayDiagrams[index].addEventListener("mouseover", () => {
    if (today) {
      dayDiagrams[index].style.backgroundColor = "hsla(186, 34%, 60%, 0.6)";
    } else {
      dayDiagrams[index].style.backgroundColor = "hsla(10, 79%, 65%, 0.6)";
    }
    dayAmounts[index].style.visibility = "visible";
  });

  dayDiagrams[index].addEventListener("mouseout", () => {
    if (today) {
      dayDiagrams[index].style.backgroundColor = "hsl(186, 34%, 60%)";
    } else {
      dayDiagrams[index].style.backgroundColor = "hsl(10, 79%, 65%)";
    }
    dayAmounts[index].style.visibility = "hidden";
  });

  dayDiagrams[index].style.height = `${element.amount / max * 135}px`;
});