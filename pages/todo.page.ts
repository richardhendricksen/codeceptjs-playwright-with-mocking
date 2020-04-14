import ILocator = CodeceptJS.ILocator;

const {I} = inject();

export class TodoPage {

    static selectors = {
        title: {css: 'h1'},
        newTodo: {css: '#new-todo'},
        todoList: {css: '#main'},
        footer: {css: '#footer'}
    };

    static async open(): Promise<void> {
        return I.amOnPage('/');
    }

    static async isVisible(selector: ILocator): Promise<boolean> {
        return I.canSee(selector);
    }

    static async getTitle(): Promise<string> {
        const texts: string | string[] = await I.grabTextFrom(this.selectors.title);
        if (texts instanceof Array) {
            return texts[0];
        }

        return texts;
    }

    static getTodoItem(nr: number): TodoItem {
        return new TodoItem(nr);
    }

    static async nrOfTodoItems(): Promise<number> {
        return await I.grabNumberOfVisibleElements(locate(this.selectors.todoList).find('ul'));
    }
}

class TodoItem {

    private readonly nr: number;

    selectors = {
        todoLabels: locate(TodoPage.selectors.todoList).find('ul label'),
        completed: locate(TodoPage.selectors.todoList).find('ul li input[type="checkbox"]')
    };

    constructor(nr: number) {
        this.nr = nr;
    }

    async getTitle(): Promise<string> {
        const text: string | string[] = await I.grabTextFrom(this.selectors.todoLabels);
        if (text instanceof Array) {
            return text[this.nr - 1];
        } else {
            return text;
        }
    }

    async isCompleted(): Promise<boolean> {
        // Overriding typings, because method returns Promise<any> instead of Promise<string>
        return (<any> await I.grabAttributeFrom(this.selectors.completed, 'checked')) === true;
    }
}
