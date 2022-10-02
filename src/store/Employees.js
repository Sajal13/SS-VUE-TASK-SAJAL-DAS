const employees={
    
    employeeData:[
            {
                id:1,
                name:"Sajal das",
                email:"sajal@gmail.com",
                phoneNumber:111122221,
                position:"developer"
            },
            {
                id: 2,
                name:"jahid",
                email:"jahid@outlook.com",
                phoneNumber:11111111,
                position:"developer"
            },
            {
                id:3,
                name:"sajib",
                email:"sajib@gmail.com",
                phoneNumber: 222222,
                position:"Designer"
            },
            {
                id:4,
                name:"sohel",
                email:"sohel@gmail.com",
                phoneNumber:2222222,
                position:"manager"
            },
            {
                id:5,
                name:"jamal",
                email:"jamal@outlook.com",
                phoneNumber:5555555,
                position:"tester"
            },
            {
                id:6,
                name:"kader",
                email:"kader@gmail.com",
                phoneNumber:5225210,
                position:"designer"
            },
            {
                id:7,
                name:"nawab",
                email:"nawab@gmail.com",
                phoneNumber:51616616,
                position:"technician"
            },
            {
                id:8,
                name:"munna",
                email:"munna@gmail.com",
                phoneNumber:26665,
                position:"developer"
            },
            {
                id:9,
                name:"tamanna",
                email:"tamanna@gmail.com",
                phoneNumber:5555656,
                position:"designer"
            },
            {
                id:10,
                name:"nila",
                email:"nila@gmail.com",
                phoneNumber:228888445,
                position:"developer"
            },
            {
                id:11,
                name:"runa",
                email:"runa@gmail.com",
                phoneNumber:84662,
                position:"tester"
            }
        ]
}
const actions = {
    addEmployee:({commit},data)=>{
        commit("addEmployee",data)
    },
    removeEmployee:({commit},data)=>{
        commit("deleteEmployee",data)
    }
}
const mutations = {
    addEmployee(states, payload){
        const id = states.employeeData.length + 1;
        states.employeeData.push({
            id:id,
            ...payload
        })
    },
    deleteEmployee(states,payload){
        const itemNeedeToDelete = states.employeeData.find(data=>(
            data.id === payload.id
        ));
        const indexOfTheItem = states.employeeData.indexOf(itemNeedeToDelete)
        if(indexOfTheItem >-1){
            states.employeeData.splice(indexOfTheItem, 1)
        }
    }
}

const getters ={
    getEmployeeData(states){
        return states.employeeData;
    }
}


export const employeeState = {
    state: employees,
    actions: actions,
    mutations: mutations,
    getters: getters
}
