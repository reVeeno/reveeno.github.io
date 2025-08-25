const title = document.getElementById("title");
const before = document.getElementById("before");
const after = document.getElementById("after");

const translations = [
   // English
  {
    title: "What's this?",
    before: "Just like ",
    after: ", my portfolio is still being polished — please wait."
  },
  // German
  {
    title: "Was ist das?",
    before: "Genau wie ",
    after: " wird mein Portfolio noch poliert — bitte warten."
  },
  // Chinese (Mandarin)
  {
    title: "这是什么？",
    before: "就像 ",
    after: " 一样，我的作品集还在打磨中 — 请稍候。"
  },
  // Spanish
  {
    title: "¿Qué es esto?",
    before: "Al igual que ",
    after: ", mi portafolio aún se está puliendo — por favor espera."
  },
  // French
  {
    title: "Qu'est-ce que c'est ?",
    before: "Tout comme ",
    after: ", mon portfolio est encore en cours de polissage — veuillez patienter."
  },
  // Arabic
  {
    title: "ما هذا؟",
    before: "تمامًا مثل ",
    after: "، لا يزال ملفي الشخصي قيد الصقل — الرجاء الانتظار."
  },
  // Portuguese
  {
    title: "O que é isso?",
    before: "Assim como ",
    after: ", meu portfólio ainda está sendo polido — por favor, aguarde."
  },
  // Russian
  {
    title: "Что это?",
    before: "Так же как ",
    after: ", мое портфолио все еще дорабатывается — пожалуйста, подождите."
  },
  // Japanese
  {
    title: "これは何ですか？",
    before: "ちょうど ",
    after: " のように、私のポートフォリオはまだ磨かれています — しばらくお待ちください。"
  },
  // Indonesian
  {
    title: "Ini apa?",
    before: "Sama seperti ",
    after: ", portofolio saya masih dalam proses penyempurnaan — mohon tunggu."
  }
];

let index = 0;
setInterval(() => {
  index = (index + 1) % translations.length;
  title.textContent = translations[index].title;
  before.textContent = translations[index].before;
  after.textContent = translations[index].after;
}, 5000);
