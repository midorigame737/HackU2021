<template>
  <div id="question-collection">
    <div class="question-number">
      {{ this.questionNo + 1 }} / {{ question.questions.length }}
    </div>
    <div v-if="question.questions[questionNo].questionType === 'anaume'">
      <QuestionAnaume :question="question.questions[questionNo]" />
    </div>
    <div v-else-if="question.questions[questionNo].questionType === '4taku'">
      <Question4taku :question="question.questions[questionNo]" />
    </div>
    <div v-else>
      <h3>{{ question.questions[questionNo] }}</h3>
    </div>
    <ul class="question-paginator">
      <button class="question-paginator-button" @click="goBackQuestion">
        戻る
      </button>
      <button class="question-paginator-button next" @click="goNextQuestoin">
        次へ
      </button>
    </ul>
  </div>
</template>

<script>
import Question4taku from '@/components/Question4taku'
import QuestionAnaume from '@/components/QuestionAnaume'

export default {
  name: 'QuestionCollection',
  props: ['question'],
  components: {
    Question4taku,
    QuestionAnaume,
  },
  data() {
    return {
      questionNo: 0,
    }
  },
  methods: {
    goBackQuestion() {
      if (this.questionNo <= 0) {
        return
      } else {
        this.questionNo--
      }
    },
    goNextQuestoin() {
      if (this.questionNo >= this.question.questions.length - 1) {
        return
      } else {
        this.questionNo++
      }
    },
  },
}
</script>

<style scoped>
#question-collection {
  display: grid;
  justify-content: center;
  align-content: center;
}

.question-paginator {
  display: flex;
  justify-content: space-around;
}

.question-paginator-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
