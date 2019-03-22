<template>
  <div class="col"><div id="vk_comments"></div></div>
</template>

<script>
import { injectVKOpenApi, initVK } from "./vknt.js";

export default {
  name: "vk-comments",
  props: {},
  mounted() {
    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        VK.Widgets.Comments("vk_comments", { limit: 5, attach: "*" });
      });
  }
};
</script>