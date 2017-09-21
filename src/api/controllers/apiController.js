export default class ApiController {
    constructor() {
        this.seed = 0;
        this.todosOsItens = [];
    }

    index() {
        return this.todosOsItens;
    }

    create(data) {
        let novoItem = {
            ...data,
            id: this._getNewId()            
        };

        this.todosOsItens.push(novoItem);

        return novoItem;
    }

    read(id) {
        return this._findItemById(id);;
    }

    update(id, data) {
        const item = this._findItemById(id);

        if (item) {
            Object.keys(data).forEach((key) => {
                item[key] = data[key];
            });
        }

        return item;
    }

    delete(id) {
        const item = this._findItemById(id);

        if (item) {
            const idx = this.todosOsItens.indexOf(item);
            this.todosOsItens.splice(idx, 1);
        }

        return item;
    }

    _getNewId() {
        return ++this.seed;
    }

    _findItemById(id) {
        let itensEncontrados = this.todosOsItens.filter(function (item) {
            return item.id === id;
        });

        let item = itensEncontrados.length === 0
            ? undefined
            : itensEncontrados[0];

        return item;
    }
};