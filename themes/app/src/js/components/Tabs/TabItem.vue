<template>
  <div v-show="selected"
       role="tabpanel"
       tabindex="0"
       :aria-labelledby="nameToLowercase"
       :id="`${nameToLowercase}-tab`"
    >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab',
    props: {
      name: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      nameToLowercase() {
        return this.name.toLowerCase().replace(/ /g, '-');
      },
    },
  };
</script>
