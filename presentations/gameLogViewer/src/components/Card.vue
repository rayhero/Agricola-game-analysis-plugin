<template>
  <div class="container-fluid">
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
</template>
<script>
import { getDraftInfoFromUrl } from "../scripts/api";
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
      cardActiveClass:
        "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} selectCard",
      cardInActiveClass:
        "img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} "
    };
  },
  methods: {
    onChangeGameLogId: async function(id) {
      const url =
        "http://playagricola.com/Agricola/GameLogs/allturnserver.php?x=" + id;
      this.draftInfo = await getDraftInfoFromUrl(url);
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