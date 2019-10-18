# Agricola-game-analysis-plugin
農家樂線上版優化分析系統
參考資料來源
http://playagricola.com/Agricola/publicgames.php

目標：提供更易使用的遊戲紀錄分析介面，包含選牌紀錄，玩家與牌組的強度排名，提升線上農家樂的易用性

Main function:
1. crawler + proxy server
  priority queue:決定爬蟲跟client馬上需求的資料
  須從資料來源爬取3x萬筆資料來作為牌組語玩家強度的計算
2. api server
3. presentations
4. card Elo
5. playerElo

optional: replay流程優化
