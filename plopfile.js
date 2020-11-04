module.exports = plop => {
  // We declare a new generator called "module"
  plop.setGenerator('module', {
    // Succintly describes what generator does.
    description: 'Create a new module',

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: 'list',
        name: 'name',
        message: 'What is your module name?',
        choices: [
          { name: 'One', value: 'cheese'},
          { name: 'Two', value: 'pepperoni' },
        ]
      },
    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: function (data) {
      var actions = [];
      switch (data.name) {
        case 'cheese':
          actions = actions.concat([{
            type: 'add',
            path: 'new/{{camelCase name}}.ts',
            templateFile: 'templates/Hello.ts',
          }])

        case 'pepperoni':
          actions = actions.concat([{
            type: 'add',
            path: 'new/{{camelCase name}}.ts',
            templateFile: 'templates/Hello.ts',
          }])
          break;
      }
      return actions;
    },
  })
}
