<template>
  <div>
    <table class="table dataTable">
      <thead>
        <tr>
          <th>Type</th>
          <th v-for="index in 7" :key="index">{{index}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">occ</td>
          <td v-for="occCard in selectedHand.occ" :key="occCard" scope="row">
            <img :src="occCard" style="max-height:100%; max-width:100%" alt />
          </td>
        </tr>
        <tr>
          <td scope="row">min</td>
          <td v-for="minorCard in selectedHand.minor" :key="minorCard" scope="row">
            <img :src="minorCard" style="max-height:100%; max-width:100%" alt />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["selectedHand"]
};
</script>

<style>
</style>