class ConnectedUsers {
    constructor() {
        this.user_list = []
    }

    addUser(username, room) {
        const index = this.user_list.findIndex(user => user.name == username);
        if (index == -1)
            this.user_list.push({ name: username, room });
        else
            this.user_list[index].room = room;
    }

    getUser(room) {
        const users_new_list = this.user_list.filter(user => user.room === room);
        return users_new_list.map(user => user.name);
        //return users_new_list;
    }
}

module.exports = ConnectedUsers;