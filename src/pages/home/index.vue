<template>
  <div class="hello">
    {{name}}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  data(){
    return {
      name: "home"
    }
  },
  computed: {
    ...mapState({})
  },
  methods: {
    ...mapActions({})
  },
  mounted() {},
  components: {}
};
</script>

<style scoped lang="scss">

</style>
