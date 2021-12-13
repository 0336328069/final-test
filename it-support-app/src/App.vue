<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import {Public_layout} from "@/constants"
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router"
export default ({
  setup() {
    const route=useRoute();
    return{
      layout:computed(()=> (route.meta.layout || Public_layout) + "-layout")
    };
  },
})
</script>

