
const states = {
    
    adminData: [
        {
            id:1,
            name:"Sajal",
            email:"sajal@gmail.com",
            phoneNumber:111122221,
            position:"admin"
        },
        {
            id: 2,
            name:"jahid",
            email:"jahid@outlook.com",
            phoneNumber:11111111,
            position:"admin"
        },
        {
            id:3,
            name:"sajib",
            email:"sajib@gmail.com",
            phoneNumber: 222222,
            position:"admin"
        },
        {
            id:4,
            name:"sohel",
            email:"sohel@gmail.com",
            phoneNumber:2222222,
            position:"admin"
        },
    ]    
}

const actions = {
    addAdmin:({commit},data)=>{
        commit("addAdmin",data)
    },
    removeAdmin:({commit},data)=>{
        commit("deleteAdmin", data)
        console.log(data)
    }
}
const mutations = {
    addAdmin(states, payload){
        const id = (states.adminData.length +1)
        states.adminData.push({
            id: id,
            ...payload
        })
    },
    deleteAdmin(states, payload){
        const itemNeedeToDelete = states.adminData.find(data=>(
            data.id === payload.id
        ));
        const indexOfTheItem = states.adminData.indexOf(itemNeedeToDelete)
        console.log(indexOfTheItem)
        if(indexOfTheItem> -1){
            states.adminData.splice(indexOfTheItem, 1)
        }
    }
}

const getters ={
    getAdminData(states){
        return states.adminData;
    }
}


export const adminState = {
    state: states,
    actions: actions,
    mutations: mutations,
    getters: getters
}