<template>
    <div>
        <div class="tabs__nav">
            <div class="tabs__nav-list" role="tablist">
                <button
                    role="tab"
                    ref="tabs"
                    v-for="(tab, key) in tabs"
                    v-on:keyup.left="selectTab(key - 1)"
                    v-on:keyup.right="selectTab(key + 1)"
                    @click="selectTab(key)"
                    :aria-controls="`${tab.nameToLowercase}-tab`"
                    :aria-selected="selected === key"
                    :class="['h5 btn--link tabs__nav-link', {'tabs__nav-link--active': selected === key}]"
                    :id="`${tab.nameToLowercase}`"
                    :key="key"
                    :tabindex="selected === key ? 0 : -1"
                >{{tab.name}}</button>
            </div>
            <select class="tabs__select"
                aria-label="Select tab"
                @change="selectTab(selected)"
                v-model="selected"
            >
                <option v-for="(tab, key) in tabs" :key="key" :value="key">
                  {{tab.name}}
                </option>
            </select>
        </div>
        <div class="tabs__content">
            <slot :selected="selected"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'tabs',
    data() {
      return {
        selected: 0, // initial tab selected
        tabs: [],
      };
    },
    created() {
      this.tabs = this.$children;
    },
    methods: {
      /**
       * Select the correct tab.
       * Used for click and left/right arrow events
       * @param key
       */
      selectTab(key) {
        // If navigating left from the first tab, go to the last tab
        if (key < 0) {
          this.selected = this.tabs.length - 1;
        // If navigating right from the last tab, go back to the first tab
        } else if (key >= this.tabs.length) {
          this.selected = 0;
        } else {
          this.selected = key;
        }

        this.$refs.tabs[this.selected].focus();
      },
    },
  };
</script>

<style lang="scss">
  .tabs__nav-list {
    display: none;
  }

  .tabs__nav-link {
    &--active {
      &:hover,
      &:focus {
        cursor: default;
      }
    }
  }

  @media (min-width: 768px) { // stylelint-disable-line scss/media-feature-value-dollar-variable
    .tabs__nav-list {
      display: flex;
    }

    .tabs__select {
      display: none;
    }
  }
</style>
