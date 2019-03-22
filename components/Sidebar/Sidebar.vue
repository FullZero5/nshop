<template lang="pug">
  aside.is-light.is-radius
    .sidearea
      h4.subtitle.is-5 <strong>Внимание !</strong>
      p Цены на кассовые аппараты указаны <strong>без ФН</strong>
    .sidearea
      label.subtitle.is-5(for="pricerange") Цена :
        span  {{ pricerange }} ₽
      input.slider#pricerange(type="range"
                              :value="pricerange"
                              :min="min"
                              :max="max"
                              step="10"
                              @input="updateHighprice($event.target.value)")
      span.min.is-pulled-left {{ min }} ₽
      span.max.is-pulled-right {{ max }} ₽
    app-switch(v-if="!sale")
    .sidearea
      label.subtitle.is-5(for="type") Тип
      .control.has-icons-left
        .select.is-medium
          select#type(@input="setType($event.target.value)")
            option(v-for="type in typeProducts",
              :key="type",
              :selected="type === typeProductSelected",
              :value="type") {{ type | usall}}
          .icon.is-small.is-left
            i.fa.fa-caret-right
    .sidearea.is-hidden-mobile
      h4.subtitle.is-5 Контакты
      a.button.is-light.is-marginless-mobile(
                                href="callto:+78612312340",
                                rel="noopener")
                span.icon
                  i.fab.fa.fa-phone
                span 8(861)231-23-40
      a.button.is-light.is-marginless-mobile(
                                href="callto:+78612312664",
                                rel="noopener")
                span.icon
                  i.fab.fa.fa-phone
                span 8(861)231-26-64
      a.button.is-light.is-marginless-mobile(
                                href="mailto:2312340@kas23.ru",
                                rel="noopener")
                span.icon
                  i.fab.fa.fa-envelope
                span 2312340@kas23.ru
      
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Switch from '@/components/Switch'

const { mapActions, mapGetters } = createNamespacedHelpers('product')

export default {
  name: 'Sidebar',
  components: {
    AppSwitch: Switch
  },
  props: {
    sale: {
      type: Boolean,
      default: false
    },
    pricerange: {
      type: [Number, String],
      default: 10000
    }
  },
  data() {
    return {
      min: 8000,
      max: 34000
    }
  },
  filters: {
    usall: value => (value=='all')?'Все':`${value}`
  },
  methods: {
    ...mapActions(['updateHighprice', 'setCategory','setType'])
  },
  computed: {
    ...mapGetters(['categories', 'categorySelected','typeProducts', 'typeProductSelected'])
  }
}
</script>

<style lang="stylus" scoped>
  aside
    float left
    width 19.1489%
    padding 1.5rem
    position sticky

  .sidearea
    border-bottom 1px solid #ccc
    padding 20px 0

    &:first-of-type
      padding-top 0
      padding-bottom 40px

    &:last-of-type
      border none
      padding-bottom 0

    .subtitle
      padding-bottom 10px
      margin-bottom 0
      display block

  span
    font-family 'Barlow', sans-serif

  .min,
  .max
    font-size 12px
    color #565656
    
  input[type=range] 
  	box-sizing border-box
  	font-size 16px
  	line-height 1
  	height 2em
  	background-color transparent
  	cursor pointer
  	-webkit-appearance none
  	width 100%
  	border: 10px solid transparent;
  input[type=range]::-webkit-slider-thumb 
  	-webkit-appearance none
  	-webkit-appearance none
  	width 2em
  	height 2em
  	margin-top 0
  	background-color #f4a00d
  	border-radius 1em
  	border 2px solid rgba(255, 255, 255, 0.5)
  	cursor pointer
  input[type=range]:focus 
  	outline none
  input[type=range]::-ms-track 
  	width 100%
  	cursor pointer
  	background transparent
  	border-color transparent
  	color transparent
  	background transparent
  	border-color transparent
  	color transparent
  input[type=range]::-moz-range-thumb 
  	width 2em
  	height 2em
  	margin-top 0
  	background-color #f4a00d
  	border-radius 1em
  	border 2px solid rgba(255, 255, 255, 0.5)
  	cursor pointer
  input[type=range]::-ms-thumb 
  	width 2em
  	height 2em
  	margin-top 0
  	background-color #f4a00d
  	border-radius 1em
  	border 2px solid rgba(255, 255, 255, 0.5)
  	cursor pointer
  input[type=range]:hover 
  	&::-webkit-slider-thumb 
  		border-color rgba(255, 255, 255, 0.7)
  	&::-moz-range-thumb 
  		border-color rgba(255, 255, 255, 0.7)
  	&::-ms-thumb 
  		border-color rgba(255, 255, 255, 0.7)
  input[type=range]:active 
  	&::-webkit-slider-thumb 
  		border-color #ffffff
  	&::-moz-range-thumb 
  		border-color #ffffff
  	&::-ms-thumb 
  		border-color #ffffff
  input[type=range]::-webkit-slider-runnable-track 
  	width 100%
  	cursor pointer
  	height 1em
  	border-bottom 2px solid rgba(255, 255, 255, 0.5)
  	background-color transparent
  input[type=range]::-moz-range-track 
  	width 100%
  	cursor pointer
  	height 1em
  	border-bottom 2px solid rgba(255, 255, 255, 0.5)
  	background-color transparent
  	
  .range 
  	position relative
  	width 550px
  	height 5px
  	input 
  		width 100%
  		position absolute
  		top 2px
  		height 0
  		-webkit-appearance none
  		&::-webkit-slider-thumb 
  			-webkit-appearance none
  			width 18px
  			height 18px
  			margin -8px 0  0
  			border-radius 50%
  			background #37adbf
  			cursor pointer
  			border 0 !important
  		&::-moz-range-thumb 
  			width 18px
  			height 18px
  			margin -8px 0  0
  			border-radius 50%
  			background #37adbf
  			cursor pointer
  			border 0 !important
  		&::-ms-thumb 
  			width 18px
  			height 18px
  			margin -8px 0  0
  			border-radius 50%
  			background #37adbf
  			cursor pointer
  			border 0 !important
  		&::-webkit-slider-runnable-track 
  			width 100%
  			height 2px
  			cursor pointer
  			background #b2b2b2
  		&::-moz-range-track 
  			width 100%
  			height 2px
  			cursor pointer
  			background #b2b2b2
  		&::-ms-track 
  			width 100%
  			height 2px
  			cursor pointer
  			background #b2b2b2
  			width 100%
  			cursor pointer
  			background transparent
  			border-color transparent
  			color transparent
  		&:focus 
  			background none
  			outline none  
  			
  		.tick 
      	position relative
      	width 2px
      	height 30px
      	background-color #fff
      	-webkit-transform rotate(35deg)
      	-ms-transform rotate(35deg)
      	-o-transform rotate(35deg)
      	transform rotate(35deg)
      	&:after 
      		content ""
      		position absolute
      		bottom 5.5px
      		left -13px
      		width 2px
      		height 15px
      		background-color #fff
      		-webkit-transform rotate(115deg)
      		-ms-transform rotate(115deg)
      		-o-transform rotate(115deg)
      		transform rotate(115deg)
      		-webkit-transform-origin bottom
      		-moz-transform-origin bottom
      		-ms-transform-origin bottom
      		-o-transform-origin bottom
      		transform-origin bottom
    
</style>
