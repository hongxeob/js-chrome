const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다",
    author: "로망로랑",
  },
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘존슨",
  },
  {
    quote: " 언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author: "앙드레 말로",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "톰 모니건",
  },
  {
    quote:
      "절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라.인생은 그렇게 살아야 한다",
    author: "마이크 맥라렌",
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다",
    author: "나폴레옹",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
