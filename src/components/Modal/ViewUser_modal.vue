<template>
    <teleport to="body">
      <transition name="fade">
        <div class="the-modal" v-show="modelValue">
          <transition name="zoom">
            <div class="the-modal__container" v-show="modelValue">
              <div class="the-modal__header d-flex jc-between ai-center">
                <div class="the-modal__close" @click="closeModal">X</div>
              </div>
  
              <div class="the-modal__body($event)">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    variant="outlined"
                >
                    <v-card-item>
                    <div>
                       <v-card-text>Name: {{user.name}}</v-card-text>
                       <v-card-text>Email: {{user.email}}</v-card-text>
                       <v-card-text>Phone Number: {{user.phoneNumber}}</v-card-text>
                       <v-card-text>Position: {{user.position}}</v-card-text>
                    </div>
                    </v-card-item>
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
    name:'ViewUser_Modal',
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      user:{
        type : Object,
        default:(()=>{})
      }
    },
    methods: {
      closeModal() {
        this.$emit("update:modelValue", false);
      },
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
    min-height: 300px;
    background-color: white;
    text-align: center;
    color: #3949AB;
    font-size: 1.5rem;
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

  </style>

  