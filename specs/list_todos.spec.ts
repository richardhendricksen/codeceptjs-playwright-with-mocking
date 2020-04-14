import { expect } from 'chai';

import { Endpoints } from '../mocking/endpoints';
import { TodoPage } from '../pages/todo.page';

Feature('list todos');

Scenario('empty todo list', async (I) => {
    await I.mockEndpoint(Endpoints.TODOS, 'empty');

    await TodoPage.open();

    expect(await TodoPage.getTitle()).to.equal('todos');

    expect(await TodoPage.isVisible(TodoPage.selectors.newTodo)).to.equal(true);
    expect(await TodoPage.isVisible(TodoPage.selectors.todoList)).to.equal(false);
    expect(await TodoPage.isVisible(TodoPage.selectors.footer)).to.equal(false);
});

Scenario('single item on todo list', async (I) => {
    await I.mockEndpoint(Endpoints.TODOS, 'singleTodo');

    await TodoPage.open();

    expect(await TodoPage.getTitle()).to.equal('todos');
    expect(await TodoPage.isVisible(TodoPage.selectors.newTodo)).to.equal(true);
    expect(await TodoPage.isVisible(TodoPage.selectors.todoList)).to.equal(true);
    expect(await TodoPage.isVisible(TodoPage.selectors.footer)).to.equal(true);

    expect(await TodoPage.nrOfTodoItems()).to.equal(1);
    expect(await TodoPage.getTodoItem(1).getTitle()).to.equal('My first todo');
    expect(await TodoPage.getTodoItem(1).isCompleted()).to.equal(false);
});
