<template>
    <material-card
      class="v-card--material-stats options-card"
      v-bind="$attrs"
      v-on="$listeners"
    >


      <div class="text-left">
        <v-icon size="40" :color="color">
          {{ icon }}
        </v-icon>
      </div>

      <div class="text-right">
        <p
          class="body-2 mb-0 option-text"
          v-text="title"
        />
        <h3 class="headline font-weight-light text--primary">
            <v-icon size="40" :color="color">
                mdi-arrow-right-bold
            </v-icon>
        </h3>
      </div>

    </material-card>
  </template>
  
  <script>
    import Card from './Card'
  
    export default {
      name: 'MaterialOptionsCard',
  
      inheritAttrs: false,
  
      props: {
        ...Card.props,
        icon: {
          type: String,
          required: true
        },
        subIcon: {
          type: String,
          default: undefined
        },
        subIconColor: {
          type: String,
          default: undefined
        },
        subTextColor: {
          type: String,
          default: undefined
        },
        subText: {
          type: String,
          default: undefined
        },
        title: {
          type: String,
          default: undefined
        },
        value: {
          type: String,
          default: undefined
        },
        smallValue: {
          type: String,
          default: undefined
        }
      }
    }
  </script>
  
  <style lang="scss">
  .v-card--material-stats {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    .v-offset {
      display: inline-block;
      flex: 0 1;
      margin-top: 0;
      margin-left: 0;
      margin-right: auto;
      margin-bottom: -80px !important;
      max-width: auto;
      padding: 0 16px 0;
   }

    .v-card {
      border-radius: 4px;
    }

    .v-card__text {
      left: 0px;
      top: -10px;
      right: 0;
      width: 100%;
    }

    .v-card__actions {
      flex: 1 0 100%;
    }

  }

  .options-card{
      cursor: pointer;
  }
  
    .options-card .text-left{
        position: absolute !important;
    }

    p.body-2.option-text{
        color: #5f5858;
        font-size: 16px !important;
    }
  </style>
  