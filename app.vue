<template>
  <div class="div">
    <button class="mybutton" @click="show = !show" aria-label="show email address"><h3 class="hi">Hello world</h3></button>
    <ClientOnly>
      <p class="p">
        <transition>
          <a class="link" href="mailto:hi@philpicton.dev" v-if="show">hi@philpicton.dev</a>
        </transition>
      </p>
    </ClientOnly>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false
    }
  }
}
</script>
<style lang="postcss">
.hi {
  @apply text-6xl prose text-white hover:text-blue-300 transition-colors duration-200;
}
.p {
  @apply text-xl text-white mt-5 h-4;
}
.div {
  @apply flex flex-col items-center justify-center h-[100vh] bg-slate-600;
}
.link {
  @apply text-white hover:text-purple-200 transition-colors duration-200;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
