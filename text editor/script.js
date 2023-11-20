function addSymbolBetweenAdjacentLettersInSelectedWords(quote, words, symbol) {
  if (typeof quote !== "string" || !Array.isArray(words)) {
    return "Invalid input.";
  }

  var wordsPattern = new RegExp("(?:" + words.join("|") + ")", "g");

  var modifiedQuote = quote.replace(wordsPattern, function (match) {
    var symbolsCount = 0;
    return match.replace(/([\u0600-\u06FF])/g, function (letter) {
      symbolsCount++;
      return symbolsCount <= 2 ? letter + symbol : letter;
    });
  });

  return modifiedQuote;
}

function processInput() {
  var inputQuote = document.getElementById("quoteInput").value;
  var selectedWords = [
    "فلسطين",
    "إسرائيل",
    "نزاع",
    "حرب",
    "صواريخ",
    "مظاهرات",
    "غزة",
    "حماس",
    "القدس",
    "تسوية",
    "جدار",
    "اشتباك",
    "تصعيد",
    "تدمير",
    "هجوم",
    "احتلال",
    "مفاوضات",
    "النار",
    "مستوطنات",
    "جيش",
    "ضفة",
    "أمن",
    "مقاومة",
    "هبوط",
    "مستعمرات",
    "ارهابية",
    "ارهاب",
    "مجلس",
    "تهجير",
    "القدس",
    "استيطان",
    "استيلاء",
    "اليهودية",
    "قوات",
    "عمليات",
    "كتائب",
    "استيطاني",
    "القسام",
    "الصهاينة",
    "نتينياهو",
    "عبيدة",
    "اجتياح",
    "انتحار",
    "رشقات",
    "العنيفة",
    "هجمات",
    "خسائر",
    "قصف",
    "عسكري",
  ];
  var symbol = ["."];
  var result = addSymbolBetweenAdjacentLettersInSelectedWords(
    inputQuote,
    selectedWords,
    symbol
  );
  document.getElementById("result").innerText = result;
}
