export class Endpoints {
    static TODOS: Endpoint = {url: '^https://todo-backend-spring4-java8.herokuapp.com/todos/$', method: 'GET', baseDir: 'todos'};
}
export class Endpoint {
    url: string;
    method: string;
    baseDir: string;
}
