
const ContactsAPI = {
    contacts: [
        {
            id: 1,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Петров',
            text: 'Текст последнего сообщения',
            unread: 2,
            time: '10.10.2018',
        }, 
        {
            id: 2,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Сима Симаков',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
        }
    ],
    users: [
        {
            id: 1,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Петров',
            text: 'Текст последнего сообщения',
            unread: 2,
            time: '10.10.2018',
        }, 
        {
            id: 2,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Сима Симаков',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
        },
        {
            id: 3,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Вася Васильков',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
        }, 
        {
            id: 4,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Петя Иванов',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
        },
        {
            id: 5,
            img: 'https://kwork.ru/files/avatar/medium/11/602845-1.jpg',
            name: 'Анна Иванова',
            text: 'Текст последнего сообщения',
            unread: 5,
            time: '10.10.2018',
        }
    ],
    all(){
        return this.contacts
    },
    allUsers(){
        return this.users
    },
    get(id){
        const isContact = p => p.id === id
        return this.contacts.find(isContact)
    },
    addContact(name){
        let user = this.users.find(x => x.name === name);
        this.contacts.push(user);
    }
}

export default ContactsAPI
