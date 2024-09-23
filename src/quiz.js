class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining){
      this.questions =questions;
      this.timeLimit = timeLimit;
      this.timeRemaining =timeRemaining;
      this.correctAnswers = 0;
      this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
    getQuestion(){
      return this.questions[this.currentQuestionIndex];
    }

    // 3. moveToNextQuestion()
    moveToNextQuestion(){
      if (this.currentQuestionIndex < this.questions.length -1){
        this.currentQuestionIndex++;
      }
    }

    // 4. shuffleQuestions()
    shuffleQuestions(){
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
     }
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer){
      const correctQuestion = this.getQuestion();
      if (correctQuestion.answer === answer){
        this.correctAnswers++;
        return true;
      }
      return false;
    }


    // 6. hasEnded()
    hasEnded() {
    return this.currentQuestionIndex >= this.questions.length || this.timeRemaining <= 0;
  }
}

console.log("dddd");
