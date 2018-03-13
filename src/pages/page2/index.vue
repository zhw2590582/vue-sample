<template>
  <div class="hello">
    {{name}}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "page2",
  data(){
    return {
      name: "page2"
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
