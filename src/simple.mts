import inquirer from 'inquirer'

const questions = [
  {
    type: 'list',
    name: 'choice',
    message: 'Do you prefer JavaScript or TypeScript?',
    choices: ['JavaScript', 'TypeScript'],
    default: 'TypeScript'
  },
  {
    type: 'input',
    message: 'Why do you prefer this?',
    name: 'reason',
    default: 'I do not know at this stage'
  }
]

function ask() {
  inquirer.prompt(questions).then((question) => {
    console.log(question.choice)
    console.dir(question, { colors: true })
  })
}
ask()
