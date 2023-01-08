const user = {};

Object.defineProperty(user, 'name', {
    // value: 'Mike',
    writable: false
});

Object.defineProperty(user, 'age', {
    // value: 30,
    writable: false
});

Object.defineProperty(user, 'id', {
    // value: 1,
    writable: false,
    configurable: false
});

// console.log(user);

const dataBase = {
    dbName: 'user',
    dbType: 'MySQL'
};

const configurateDB = {
    token: '123',
    password: '567',
    user: 'admin'
};

Object.freeze(dataBase);
console.log(Object.isFrozen(dataBase));
Object.seal(configurateDB);
console.log(Object.isSealed(configurateDB));


let salaries = {
    frontend: 2000,
    backend: 1500,
    design: 1000,
    set addSalaries(worker) {
        for (let i = 0; i < worker.length; i++) {
            let arr = worker[i].split(':');
            salaries[arr[0]] = +arr[1];
        }
        return salaries;
    }
}

Object.defineProperty(salaries, 'sum', {
    get () {
        let sum = 0;
        for (const salary in this) {
            if (Number(this[salary])) {
                sum += this[salary];
            }
        }
        console.log(sum);
    }
})
salaries.sum //4500

salaries.addSalaries = ['frontend: 3000', 'backend: 2500', 'design: 2000', 'manager: 800'];
console.log(salaries);




let user1 = {
    name: 'Mike',
    surname: 'Davis',
    age: 25
}

Object.defineProperty(user1, 'userInfo', {
    get() {
        let userInfo = {};
        for (const key in user1) {
            userInfo[key] = user1[key];
        }
        console.log(userInfo);
    }
})
            
user1.userInfo
