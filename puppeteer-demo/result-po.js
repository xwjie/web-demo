class ResultPo{
    constructor(page) {
        this.page = page;
    }

    async getTodoCount() {
        let countStr = await this.page.$eval('.todo-count>strong', ele => ele.innerText);
        return Number(countStr);
    }
}

export default ResultPo;
