<template>
  <div class="home">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Title</th>
            <th class="text-left">Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in books" :key="item.isbn">
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
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
      this.books = resp.data;
    });
  },
  data() {
    return {
      books: [],
    };
  },
};
</script>
