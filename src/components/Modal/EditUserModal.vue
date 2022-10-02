<template>
    <teleport to="body">
      <transition name="fade">
        <div class="the-modal" v-show="modelValue">
          <transition name="zoom">
            <div class="the-modal__container" v-show="modelValue">
              <div class="the-modal__header d-flex jc-between ai-center">
                <div class="p-2 pl-3">
                  {{ heading }}
                </div>
                <div class="the-modal__close" @click="closeModal">Close</div>
              </div>
  
              <div class="the-modal__body($event)">
                <form @submit="handleSubmit">
                  <v-row>
                    <v-col cols="6">
                      <label>Name</label>
                    </v-col>
                    <v-col cols="6">
                      <input 
                        type="text"
                        name="name"
                        :value="editableUser.name"
                        @change="setData"
                        required
                        >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <label>Email</label>
                    </v-col>
                    <v-col cols="6">
                      <input 
                        type="email" 
                        name="email"
                        :value="editableUser.email"
                        @change="setData"
                        required
                        >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <label>Phone Number</label>
                    </v-col>
                    <v-col cols="6">
                      <input 
                        type="number"
                        name="number"
                        :value="editableUser.phoneNumber"
                        @change="setData"
                        required
                        >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <label>Position</label>
                    </v-col>
                    <v-col cols="6">
                      <select :value="editableUser.position" @change="setData" required>
                          <option value="">Select a option</option>
                          <option name="admin" value="admin">Admin</option>
                          <option name="developer" value="developer">Developer</option>
                          <option name="designer" value="designer">Designer</option>
                          <option name="tester" value="tester">Tester</option>
                          <option name="technician" value="technician">Technician</option>
                      </select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <input type="submit" value="Submit" class="submitButton"/>
                    </v-col>
                  </v-row>
                </form>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
  </template>
  <script>
  export default {
    name:'EditUser_Modal',
    props: {
      heading: {
        type: String,
        default: "Default Heading"
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      editableUser:{
        type:Object,
        default:(()=>{})
      }
    },
    data(){
      return {
        addUser : {
            name: this.editableUser.name,
            email: this.editableUser.email,
            phoneNumber: this.editableUser.phoneNumber,
            position: this.editableUser.position
        }
      }
    },
    // setup(){
    //         const store = useStore();
    //         const addminDataFromStore = computed(() => store.state.admin.adminData);
    //         const employeeDataFromStore = computed(()=>store.state.employee.employeeData);
    // },

    methods: {
      closeModal() {
        this.$emit("update:modelValue", false);
      },
      setData(e){
        const {name,value} = e.target
        console.log(name,value)
      },
      handleSubmit(e){
        e.preventDefault();

        // if(this.addUser.position=== "admin"){
        //   store.dispatch("addAdmin",this.addUser);
        // }else{
        //   store.dispatch("addEmployee",this.addUser)
        // }

        // this.addUser.name = "";
        // this.addUser.email = "";
        // this.addUser.phoneNumber=undefined;
        // this.addUser.position="";
        // this.$emit("update:modelValue", false)
      }
    }
  };
  </script>
  <style scoped>
  .the-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .the-modal__container {
    width: 500px;
    min-height: 300px;
    background-color: white;
    border-radius: 9px;
    box-shadow: 0 0 15px 5px rgb(0 0 0 / 20%);
  }
  .the-modal__container--lg {
    width: 600px;
  }
  .the-modal__header {
    font-size: 22px;
    font-weight: bold;
    color: var(--brand-color);
  }
  .the-modal__close {
    cursor: pointer;
    padding: 3px 9px;
    font-weight: bold;
    margin-left: auto;
  }
  .the-modal__close:hover {
    color: red;
  }
  .the-modal__body {
    padding: 44px;
    padding-top: 22px;
  }
  form {
    margin: 20px 30px 10px 30px;
  }

  form input,form select {
   background-color: white;
   color: blue;
   border: none;
   border-bottom: 2px solid grey;
   border-radius: 5px;
   padding: 0px 10px;
  }
  form input:focus,form input select{
    outline: none;
    border: none;
    border-bottom: 2px solid green;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
  }

input[type=number] {
  appearance: none;
  -moz-appearance: textfield;
}

.submitButton{
  min-width: 100px;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: #4285f4;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: bolder;
  margin-top: 10px;
  margin-left: auto;
}
.submitButton:hover{
  background-color: #357ae8;
  border: none
}
  </style>

  