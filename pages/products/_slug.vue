<template lang="pug">
  .container.has-text-centered
    .columns.is-vcentered
      .column.is-5
        picture.image.is-square
          source(:data-srcset="`/${item.img}.webp`", type="image/webp")
          img.lazyload(:data-srcset="`/${item.img}.png`", :alt="`фото ${item.name}`")

      .column.is-6.is-offset-1
        h1.title.is-2 {{ item.name }}
        
        .content
          p {{item.description}}
          hr
          p.is-size-6 <strong>Цена :</strong> {{ item.price }} ₽
          br
          p.has-text-centered
            button.button.is-medium.is-warning(@click="addItem(item)", aria-label="Купить")
              span.icon
                i.fa.fa-shopping-cart
              span Купить
          vk
          
</template>

<script>
import vk from "@/components/CommentsVk";
import { createNamespacedHelpers } from 'vuex'
import { slug } from '@/helpers'

const { mapGetters } = createNamespacedHelpers('product')

const getAllProducts = store => store.getters['product/allProducts']

const isProductNameSameAsSlug = (store, params) =>
  getAllProducts(store)
    .some( ({ name }) => slug(name) === params.slug)

export default {
  components: {
    vk,
  },
  fetch({ store, error, params }) {
    !store.state.products && store.dispatch('product/setProductsRef')
    !isProductNameSameAsSlug(store, params) && error({ statusCode: 404, message: 'Товары не найдены' })
  },
  computed: {
    ...mapGetters(['productFromSlugParamRoute']),
    item() {
      return this.productFromSlugParamRoute(this.$route.params.slug)
    }
  },
  methods: {
    addItem(item) {return this.$store.dispatch('cart/addItem', item)}
  },
  head() {
    return this.item
      ? {
          title: `${this.item.name}`
        }
      : false
  }
}
</script>
