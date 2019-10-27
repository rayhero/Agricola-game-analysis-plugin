import cheerio from 'cheerio'
const agricolaDomainName = 'http://playagricola.com/Agricola'

export function getDraftInfoFromBody(body) {
    const $ = cheerio.load(body);

    // playersDesc:
    // 0: "newczrush's starting draft pile was:"
    // 1: "jayjaylee2929's starting draft pile was:"
    // 2: "lucifer7775's starting draft pile was:"
    // 3: "hank123's starting draft pile was:"
    // 4: "newczrush's SELECTED hand was:"
    // 5: "jayjaylee2929's SELECTED hand was:"
    // 6: "lucifer7775's SELECTED hand was:"
    // 7: "hank123's SELECTED hand was:"
    let playersDesc = $('#starthands u').map(function () {
        return $(this).text();
    }).get()

    // players:
    // 0: newczrush
    // 1: jayjaylee2929
    // 2: lucifer7775
    // 3: hank123
    const playerNum = 4
    let players = [];
    for (let i = 0; i < playerNum; i++) {
        players.push(playersDesc[i].split('\'s')[0])
    }

    // Output:
    // 0: "xminor-CourtyardGarden_1507_7"
    // 1: "xminor-SwimmingStudio_2763_5"
    // 2: "xminor-Shears_5393_7"
    // 3: "eminor-basket"
    // 4: "xminor-BoarField_7229_2"
    // 5: "kminor-sawmill"
    // 6: "eminor-dovecote"
    // 7: "kminor-milkingstool"
    // 8: "xminor-GrainElevator_647_12"
    // 9: "occ-x1CrapsShooter_6154_2"
    // 10: "occ-o1childprodigy"
    // 11: "occ-cz1informer"
    // 12: "occ-x3ClayCurator_7326_3"
    // 13: "occ-x1VegetableImporter_5695_2"
    // 14: "occ-x1MasterHuntsman_4809_4"
    // 15: "occ-x1FarmEducator_6513_6"
    // 16: "occ-x1FarmWorker_8269_2"
    // 17: "occ-x1SmallscaleFarmer_4129_1"
    // 18: "iminor-animalfeed"
    // 19: "xminor-LotusRoots_8563_1"
    // 20: "xminor-StoryBooks_7012_6"
    // 21: "xminor-FruitTreeHouse_4296_2"
    // 22: "xminor-FertilityShrine_2006_7"
    // 23: "xminor-Investments_5739_9"
    // ....
    let cardLinks = $('#starthands a').map(function () {
        // javascript:zoomIn("../Images/gminorsickle.jpg")
        let link = $(this).attr('href');
        link = link.replace(`javascript:zoomIn("..`, agricolaDomainName);
        link = link.replace(`")`, '');
        return link
    }).get()

    const draftNum = 9;
    const selectedNum = 7;
    let startingHands = []
    let selectedHands = []
    for (let i = 0; i < players.length; i++) {
        startingHands.push({
            player: players[i],
            minor: cardLinks.slice((2 * i) * draftNum, (2 * i + 1) * draftNum),
            occ: cardLinks.slice((2 * i + 1) * draftNum, (2 * i + 2) * draftNum)
        })

        let selectedHandsIndex = cardLinks.length - 4 * 2 * selectedNum
        selectedHands.push({
            player: players[i],
            minor: cardLinks.slice((2 * i + 1) * selectedNum + selectedHandsIndex, (2 * i + 2) * selectedNum + selectedHandsIndex),
            occ: cardLinks.slice((2 * i) * selectedNum + selectedHandsIndex, (2 * i + 1) * selectedNum + selectedHandsIndex)
        })
    }

    let draftInfo = { startingHands, selectedHands }
    return draftInfo;
}