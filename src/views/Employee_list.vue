<template>
    <div class="lists">
        <div class="addButton">
            <v-btn @click="addUserModal=true" >
                    <v-icon icon="mdi-account-plus" />
                </v-btn>
        </div>
        <div class="staff">
            <v-card>
                <div>
                    <h2>Employee List</h2>
                </div>
                <v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Sr. No.
                        </th>
                        <th class="text-left">
                        Name
                        </th>
                        <th class="text-left">
                        Email
                        </th>
                        <th class="text-left">
                            Phone Number
                        </th>
                        <th>Position</th>
                        <th class="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item,index) in employeeDataFromStore"
                        :key="item.id"
                    >
                        <td>{{index + 1}}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phoneNumber}}</td>
                        <td>{{item.position}}</td>
                        <td>
                            <div class="icons">
                                <button 
                                    @click="viewEmployeeItem(item);viewUserModal=true"
                                    ><v-icon icon="mdi-eye" />
                                </button>
                                <button 
                                    @click="editEmployeeItem(item);editUserModal=true"
                                    >
                                    <v-icon icon="mdi-pencil" />
                                </button>
                                <button 
                                    @click="deleteEmployeeItem(item);deleteUserModal=true">
                                    <v-icon icon="mdi-trash-can-outline"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </v-table>
            </v-card>
            <br />
            <br />

            <v-card>
                <div class="buttonClass">
                    <h2>Admin List</h2>
                </div>
                <v-table>
                <thead>
                    <tr>
                        <th class="text-left">
                            Sr. No.
                        </th>
                        <th class="text-left">
                        Name
                        </th>
                        <th class="text-left">
                        Email
                        </th>
                        <th class="text-left">
                            Phone Number
                        </th>
                        <th>Position</th>
                        <th class="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(item,index) in addminDataFromStore"
                        :key="item.id"
                    >
                        <td>{{index + 1}}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phoneNumber}}</td>
                        <td>{{item.position}}</td>
                        <td>
                            <div class="icons">
                                <button 
                                    @click="viewAdminItem(item);viewUserModal=true">
                                    <v-icon icon="mdi-eye"/>
                                </button>
                                <button 
                                    @click="editAdminItem(item);editUserModal=true"
                                    >
                                    <v-icon icon="mdi-pencil" />
                                </button>
                                <button 
                                    @click="deleteAdminItem(item);deleteUserModal=true">
                                    <v-icon icon="mdi-trash-can-outline"/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </v-table>
            </v-card>
        </div>   
    </div>
    <AddUser_Modal v-model="addUserModal"
    heading="Add New Staff" />
    <ViewUser_modal v-model="viewUserModal" :user="viewAbleData" />
    <EditUser_Modal v-model="editUserModal"
        heading="Edit Employee" :editableUser="editAbleData" />
    <Delete_Modal v-model="deleteUserModal"
         @changeMessage="changeConfirmationMessage" />
</template>
<script>
    import store from '@/store';
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import AddUser_Modal from '../components/Modal/AddUserModal.vue';
    import ViewUser_modal from '@/components/Modal/ViewUser_modal.vue';
    import EditUser_Modal from '@/components/Modal/EditUserModal.vue';
    import Delete_Modal from '@/components/Modal/Delete_Modal.vue'

    export default({
        name: 'Employee_list',
        data(){
            return {
                addUserModal : false,
                viewUserModal:false,
                editUserModal: false,
                deleteUserModal:false,
                viewAbleData:{},
                editAbleData:{},
                deleteAbleEmployeeItem:null,
                deleteAbleAdminItem:null,
                confirmMessage: false
            }
        },
        setup() {
            const store = useStore();
            const addminDataFromStore = computed(() => store.state.admin.adminData);
            const employeeDataFromStore = computed(()=>store.state.employee.employeeData)
            return {
                addminDataFromStore,
                employeeDataFromStore
            }
        },
        methods:{
            changeConfirmationMessage(message){
                this.confirmMessage = !message;
                if(this.confirmMessage && this.deleteAbleEmployeeItem){
                    store.dispatch("removeEmployee",this.deleteAbleEmployeeItem)
                }
                if(this.confirmMessage && this.deleteAbleAdminItem){
                    store.dispatch("removeAdmin", this.deleteAbleAdminItem)
                }
                this.confirmMessage = false;
            },
            viewEmployeeItem(item){
              this.viewAbleData = item
            },
            viewAdminItem(item){
                this.viewAbleData = item
            },
            editEmployeeItem(item){
                this.editAbleData = item;
            },
            editAdminItem(item){
                this.editAbleData = item;
            },
            deleteEmployeeItem(item){
                this.deleteAbleEmployeeItem = item
            },
            deleteAdminItem(item){
                this.deleteAbleAdminItem = item;
            }
        },
        components:{
            AddUser_Modal,
            ViewUser_modal,
            EditUser_Modal,
            Delete_Modal,
        }
    })
</script>

<style>
    .addButton{
        display: flex;
        justify-content: flex-end;
        margin: 0px 0px 10px 0px;
    }
    .icons{
        display: flex;
        justify-content: space-around;
        cursor: pointer;
    }
    
</style>