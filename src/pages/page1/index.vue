<template>
  <div class="hello">
    {{name | filter1}}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "page1",
  data(){
    return {
      name: "page1"
    }
  },
  computed: {
    ...mapState({
      count: state => state.test.count
    })
  },
  methods: {
    ...mapActions(["increment", "request"])
  },
  mounted() {
    setTimeout(() => {
      this.request();
    }, 3000)
  },
  components: {}
};
</script>

<style scoped lang="scss">

</style>
