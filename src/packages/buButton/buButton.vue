<template>
  <div>
      <button @click="clickHandler" type="button" class="btn" :class="class">
        <slot name="default"></slot>
      </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  class:{
    type:String,
    default:'',
    required:false
  }
})
const emits = defineEmits(['click'])
const clickHandler = (e:MouseEvent)=>{
  emits('click',e)
  alert("hi,customUI")
}
</script>
<script lang="ts">
export default {
  name:"BuButton"
}
</script>
<style scoped>
.btn{
  background-color: cornflowerblue;
  color: #fff;
  border: 1px solid cornflowerblue;
}
</style>