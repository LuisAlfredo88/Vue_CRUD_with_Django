<template>
    <material-card
      class="v-card--material-grid"
      v-bind="$attrs"
      v-on="$listeners"
      :inline="true"
      :full-width="true"
    >
      <v-card-title>{{title}}</v-card-title>

      <!-- <v-card
        slot="offset"
        :class="`elevation-${elevation}`"
        :color="color"
        class="pa-5"
        dark
      >        
        <v-icon size="40">
          {{ icon }}
        </v-icon>        
      </v-card>
   -->
      <v-row>
        <v-col>
          <div class="text-right">
            <slot/>      
          </div>
        </v-col>
      </v-row>
  
    </material-card>
  </template>
  
  <script>
    import Card from './Card'
  
    export default {
      name: 'GridCard',
  
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
  .v-card--material-grid {
    flex-wrap: wrap;
    position: relative;
    margin-left: 50px;
    margin-right: 40px;

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

    .v-card__title{
      margin-top: -70px;
      margin: 11px;
      font-size: 21px;
    } 
  }
  
  </style>
  