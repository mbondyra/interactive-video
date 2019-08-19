const get = require('lodash.get')

const convertField = (field) => {
  const question = convertQuestion(field.title)
  return {
    title: question.title,
    time: question.time,
    answers: field.properties.choices.map(label => convertAnswer(label))
  }
}

const convertQuestion = (title) => {
  const regex = /([^#]*)#L:(\d*.?\d*),(\d*.?\d*)/
  const match = title.match(regex)
  return {
    title: match[1],
    time: {
      start: match[2],
      end: match[3]
    },
  }
}

const convertAnswer = (answer) => {
  const regex = /([^#]*)#N:(\d*),(\d*.?\d*)/
  const match = answer.label.match(regex)
  return {
    "label": match[1],
    "jumpTo": match[3],
    "next": match[2]
  }
}

const getFields = (resp) => {
  const fields = get(JSON.parse(resp.body), 'fields')
  if (fields.length) {
    return fields.map(field => convertField(field))
  }
  return
}

module.exports = {
  getFields: getFields
}
