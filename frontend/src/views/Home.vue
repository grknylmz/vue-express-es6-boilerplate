<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  beforeMount() {
    axios.get("/api/books").then((resp) => {
      console.log(resp.data);
    });
  },
};
</script>
