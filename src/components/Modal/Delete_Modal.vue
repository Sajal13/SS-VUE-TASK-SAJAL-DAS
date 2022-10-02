<template>
    <teleport to="body">
      <transition name="fade">
        <div class="the-modal" v-show="modelValue">
          <transition name="zoom">
            <div class="the-modal__container" v-show="modelValue">
  
              <div class="the-modal__body($event)">
                <v-card>
                    <v-card-title class="text-h5">
                      Are you sure?
                    </v-card-title>
                    <v-card-text>
                        A event for delete an employee is going to happen.
                        Are you sure to delete the user? 
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="closeModal"
                      >
                        Disagree
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="handleClick"
                      >
                        Agree
                      </v-btn>
                    </v-card-actions>
                  </v-card>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
  </template>

<script>


  export default {
    name:'Delete_modal',
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      heading:{
        type: String
      },
      changeMessage:{
        type: Function
      }
    },
    emits:["changeMessage"],
    data(){
      return {
        confirmMessageValue: false
      }
    },
    methods: {
      closeModal() {
        this.$emit("update:modelValue", false);
      },
      handleClick(){
        this.$emit("changeMessage", this.confirmMessageValue );
        this.$emit("update:modelValue", false);
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
    width: 400px;
    min-height: 150px;
    background-color: white;
    border-radius: 9px;
    box-shadow: 0 0 15px 5px rgb(0 0 0 / 20%);
  }
  .the-modal__container--lg {
    width: 600px;
  }
  .the-modal__body {
    padding: 44px;
    padding-top: 22px;
  }

  </style>

  