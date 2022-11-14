import ResultPo from "./result-po.js";

class TodoListPo {
    constructor(page) {
        this.page = page;
    }

    async addTodo(todo) {
        let input = await this.page.waitForSelector('input.new-todo');
        await input.type(todo);

        // 回车
        // await page.keyboard.press('Enter');
        await input.press('Enter');

        return new ResultPo(this.page);
    }
}

export default TodoListPo;