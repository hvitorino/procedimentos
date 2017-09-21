export default class ApiController {
    constructor() {
        this.seed = 0;
        this.todosOsItens = [];
    }

    index() {
        return this.todosOsItens;
    }

    create(data) {
        console.log('data', data);

        let novoItem = {
            ...data,
            id: this._getNewId()            
        };

        console.log('novoItem', novoItem);

        this.todosOsItens.push(novoItem);

        return novoItem;
    }

    read(id) {
        return this._findItemById(id);;
    }

    update(id, data) {
        const item = this._findItemById(id);

        if (item) {
            item = {
                id: id,
                ...data
            };
        }

        return item;
    }

    delete(id) {
        const item = this._findItemById(id);

        if (item) {
            const idx = this.todosOsItens.indexOf(item);
            this.todosOsItens.slice(idx, 1);
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