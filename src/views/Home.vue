<template>
  <div>
      <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
      <px-assets-table v-if="isLoading==false" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  components: { PxAssetsTable },
    name: 'Home',
    component: {
        PxAssetsTable,
    },
    data () {
        return {
            isLoading: false,
            assets: []
        }
    },

    created () {
        this.isLoading = true;
        api.getAssets().then(assets => (this.assets = assets)).finally(() => this.isLoading = false)
        const html = document.documentElement // returns the html tag
        html.setAttribute('lang', 'en-US')
    }
}
</script>

<style scoped>

</style>