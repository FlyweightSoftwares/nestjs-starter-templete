module.exports = generate => {
    // We declare a new generator called "module"
    generate.setGenerator('CRUD', {
      // Succintly describes what generator does.
      description: 'Create a new module',
  
      // Get inputs from the user.
      // That's Inquirer.js doing the job behind the hood.
      prompts: [
        {
          type: 'input',
          name: 'singularName',
          message: 'What is your model name?',
        },
      ],
  
      // List of actions to take.
      // Here we "add" new files from our templates.
      actions: function (data) {
        var actions = [];

            actions = actions.concat([{
              type: 'add',
              path: 'create-{{dashCase singularName}}/create-{{dashCase singularName}}-mapper.ts',
              templateFile: '.templates/Hello.ts',
            }])
        return actions;
      },
    }),
  
    generate.setGenerator('database', {
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
            { name: 'Test', value: 'cheese'},
            { name: 'Base', value: 'pepperoni' },
          ]
        },
        {
          type: 'input',
          name: 'age',
          message: 'What is your db name?',
          validate: function (value) {
                      var digitsOnly = /\d+/;
                      if (digitsOnly.test(value)) { return true; }
                      return 'Invalid age! Must be a number genius!';
                  }
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
              templateFile: '.templates/Hello.ts',
            }])
  
          case 'pepperoni':
            actions = actions.concat([{
              type: 'add',
              path: 'new/{{camelCase name}}.ts',
              templateFile: '.templates/Hello.ts',
            }])
            break;
        }
        return actions;
      },
    })
  }