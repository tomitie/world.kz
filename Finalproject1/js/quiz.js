const questions = [
    {
      question: 'What is the primary greenhouse gas emitted by human activities?',
      options: ['Oxygen', 'Methane', 'Nitrogen', 'Carbon Dioxide'],
      correctAnswer: 'Carbon Dioxide'
    },
    {
      question: 'Which human activity is a major contributor to deforestation?',
      options: ['Recycling', 'Agriculture', 'Renewable energy use', 'Sustainable forestry'],
      correctAnswer: 'Agriculture'
    },
    {
      question: 'What is the main cause of ozone depletion?',
      options: ['Carbon monoxide emissions', 'Chlorofluorocarbons (CFCs)', 'Volcanic eruptions', 'Oxygen depletion'],
      correctAnswer: 'Chlorofluorocarbons (CFCs)'
    },
    {
      question: 'Which of the following is a major contributor to water pollution?',
      options: ['Recycling', 'Industrial discharges', 'Wind energy', 'Organic farming'],
      correctAnswer: 'Industrial discharges'
    },
    {
      question: 'What is the primary cause of soil erosion?',
      options: ['Deforestation', 'Desertification', 'Rainforest preservation', 'Sustainable agriculture'],
      correctAnswer: 'Deforestation'
    },
    {
      question: 'Which gas is responsible for acid rain?',
      options: ['Oxygen', 'Nitrogen', 'Sulfur dioxide', 'Carbon dioxide'],
      correctAnswer: 'Sulfur dioxide'
    },
    {
      question: 'What is the major source of marine pollution?',
      options: ['Sustainable fishing', 'Plastic waste', 'Coral reef conservation', 'Ocean clean-up initiatives'],
      correctAnswer: 'Plastic waste'
    },
    {
      question: 'What is the primary cause of biodiversity loss?',
      options: ['Wildlife conservation efforts', 'Habitat destruction', 'Sustainable farming', 'Carbon sequestration'],
      correctAnswer: 'Habitat destruction'
    },
    {
      question: 'Which of the following is a renewable energy source?',
      options: ['Coal', 'Natural gas', 'Solar power', 'Nuclear power'],
      correctAnswer: 'Solar power'
    },
    {
      question: 'What is the primary driver of climate change?',
      options: ['Volcanic activity', 'Changes in the Earth\'s orbit', 'Greenhouse gas emissions', 'Ocean currents'],
      correctAnswer: 'Greenhouse gas emissions'
    }
    
  ];
  let currentQuestion = 0;
  let userAnswers = [];

  function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const currentQues = questions[currentQuestion];

    questionContainer.innerHTML = `<p>${currentQues.question}</p>`;

    optionsContainer.innerHTML = currentQues.options
      .map(
        (option, index) =>
          `<label><input type="radio" name="option" value="${option}" onclick="saveAnswer(${index})">${option}</label>`
      )
      .join("");
  }

  function saveAnswer(index) {
    userAnswers[currentQuestion] = questions[currentQuestion].options[index];
  }

  function playClickSound() {
    const clickSound = document.getElementById("clickSound");
    clickSound.play();
  }

  function nextQuestion() {
    if (userAnswers.length < questions.length) {
      currentQuestion++;
      displayQuestion();
      playClickSound(); 
    } else {
      showResult();
    }
  }

  function showResult() {
    const resultContainer = document.getElementById("result");
    let correctCount = 0;

    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        correctCount++;
      }
    }

    resultContainer.innerHTML = `<p>Your Score: ${correctCount} out of ${questions.length}</p>`;
  }

  window.onload = displayQuestion;