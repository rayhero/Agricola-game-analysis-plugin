<template>
  <div class="container">
    <div class="row">
      <div>
        <input v-model="gameLogId" value="333911" style="display:inline" />
        <button
          @click="onChangeGameLogId(gameLogId)"
          class="btn btn-success"
          style="display:inline"
        >Load</button>
      </div>
    </div>

    <div>
      <h1>FinalScore</h1>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">54</td>
          <td>52</td>
          <td>51</td>
          <td>49</td>
        </tr>
      </tbody>
    </table>

    <div v-if="isLoaded">
      <div>
        <h1>Draft result</h1>
      </div>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          v-for="selectedHand in draftInfo.selectedHands"
          :key="selectedHand.player"
          class="nav-link"
          :href="'#' + selectedHand.player"
          data-toggle="tab"
        >{{selectedHand.player}}</a>
      </div>

      <div class="tab-content">
        <SelectedHand
          v-for="selectedHand in draftInfo.selectedHands"
          :key="selectedHand.player"
          class="tab-pane fade"
          :id="selectedHand.player"
          :selectedHand="selectedHand"
          role="tabpanel"
        ></SelectedHand>
      </div>
    </div>
  </div>
</template>
<script>
import { getDraftInfoById } from "../scripts/api";
import SelectedHand from "./SelectedHand";

export default {
  components: {
    SelectedHand
  },
  data() {
    return {
      draftNumber: 9,
      gameLogId: 333982,
      draftInfo: {},
      isLoaded: false,
      cardActiveClass:
        "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} selectCard",
      cardInActiveClass:
        "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} "
    };
  },
  methods: {
    onChangeGameLogId: async function(id) {
      this.draftInfo = await getDraftInfoById(id);
      this.isLoaded = true;
    }
  }
};
</script>

<style lang="stylus">
.selectCard {
  border-width: 2px;
  border-color: red;
  border-style: solid;
}
</style>