<template>
 <p
          class="mt-1 d-flex timestampshow"
        >

            <span>
              <font-awesome-icon :icon="['fas', 'clock']" class="mr-2" />
            {{timestamp | time_converter}}
            </span>

            <span>
              <font-awesome-icon :icon="['fas', 'user']" class="mr-2"/>
            <a class="" :href="'/users/'+createdbyuser">{{createdbyuser}}</a>
            </span>

            <slot name="extradet"></slot>
        </p>
</template>

<script>
export default {
  name: 'TimeAndUserDetail',
  props: {
    timestamp: {
      type: Number
    },
    createdbyuser: {
      type: String,
      default: 'Admin'
    }
  }
}
</script>

<style lang="scss">
.timestampshow span:not(:last-child) {
  margin-right: 2rem;
}
</style>
