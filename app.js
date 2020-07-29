'use strict'
const { Sequelize } = require('sequelize');
const { program } = require('@caporal/core');
const prompt = require('prompt-confirm');
const koneksi = new Sequelize('todo', 'root', '200801', {
  host: 'localhost',
  dialect: 'mysql'
});

const Todo = koneksi.define('todo', {
  item: Sequelize.TEXT,
  status: Sequelize.STRING
});

program.version("1.0.0").description("ToDoList-CLI-APP");

program
    .command('todo list', 'Show all todo list in Database')
    .action(() => {
        (async () => {
            let todolist = await Todo.findAll({ raw: true });
            todolist.forEach(todo => {
                console.log(`${todo.id}. ${todo.item}. (${todo.status})`)
            })
            koneksi.close();
        })()
    })
    .command('todo add', 'Add new todo item')
    .argument('<item>', 'Item to add')
    .action((args) => {
        const addItem = List.build({ item: args.item });
        addItem.save().then(() => {
            console.log('new list saved')
        }).finally(() => {
            koneksi.close();
        });
    })

program.run();