const data = {};

function create(id, value) {
    data[id] = value;
}

function get(id) {
    return data[id];
}

function update(id, value) {
    if (data[id]) {
        data[id] = value;
        return true;
    }
    return false;
}

function del(id) {
    if (data[id]) {
        delete data[id];
        return true;
    }
    return false;
}

module.exports = { create, get, update, del };
