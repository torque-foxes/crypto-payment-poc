<template>
    <transition leave-active-class="flyout-panel--leave" duration="300">
        <div class="flyout-panel"
            :class="{
                'flyout-panel--right': this.slideFrom == 'right',
                'flyout-panel--left': this.slideFrom == 'left',
            }"
            v-show="open"
            @keydown.esc="open ? $emit('close') : false"
            role="dialog">

            <transition
                enter-active-class="flyout-panel__background--enter"
                duration="300"
                >
                <div class="flyout-panel__background"
                    v-if="open"
                    role="presentation"
                    @click="$emit('close')">
                </div>
            </transition>

            <transition
                enter-active-class="flyout-panel__content--enter"
                leave-active-class="flyout-panel__content--leave"
                duration="300"
                >
                <div class="flyout-panel__content" v-if="open">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>

<style>
.flyout-panel {
    display: flex;
    align-items: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
}

.flyout-panel__background {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: #000;
    transition: opacity 300ms ease-in-out;
    opacity: 0.3;
}

.flyout-panel__background--enter,
.flyout-panel__background--leave {
    opacity: 0;
}

.flyout-panel__content {
    position: absolute;
    top: 0;
    z-index: 20;
    height: 100%;
    width: 100%;
    width: 320px;
}

/**
 * Slide in from the right
**/
.flyout-panel--right .flyout-panel__content {
    transition: right 300ms ease-in-out;
    right: 0;
}

.flyout-panel--right .flyout-panel__content--enter,
.flyout-panel--right .flyout-panel__content--leave {
    right: -100%;
}

/**
 * Slide in from the left
**/
.flyout-panel--left .flyout-panel__content {
    transition: left 300ms ease-in-out;
    left: 0;
}

.flyout-panel--left .flyout-panel__content--enter,
.flyout-panel--left .flyout-panel__content--leave {
    left: -320px;
}
</style>

<script>
export default {
  name: 'flyout-panel',
  props: {
      'open': {
          type: Boolean,
          default: false,
      },
      'slideFrom': {
          type: String,
          validator(val) {
              return ['right', 'left'].indexOf(val) !== -1;
          },
          default: "right",
      }
  },
};
</script>

