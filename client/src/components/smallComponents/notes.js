deckReducer{
    hasCommander: false;
    commander_id: null;
    colorIdentity: [] => [...]
    commanderCard : null {__dirname, img}
    the99: [{id & img} ] -> push your cards into this array
    decksize: +1 etc..
deck completed when decksize= 100
}

the UI has to have a save button in create

if decksize is not 100, dont show it on Homepage.

the save button will save it all and send to backend -> req.body

database: user collection: {_id:1001}

go check sadnan's firebase repo.

{
    "object": "list",
    "total_cards": 1,
    "has_more": false,
    "data": [
      {
        "object": "card",
        "id": "1fa48620-4c3d-4f75-be1f-c12c4aa59f51",
        "oracle_id": "efe9c3e0-7315-408e-9903-9d25a681039b",
        "multiverse_ids": [
          466980
        ],
        "mtgo_id": 73351,
        "arena_id": 70011,
        "tcgplayer_id": 192551,
        "name": "Golos, Tireless Pilgrim",
        "lang": "en",
        "released_at": "2019-07-12",
        "uri": "https://api.scryfall.com/cards/1fa48620-4c3d-4f75-be1f-c12c4aa59f51",
        "scryfall_uri": "https://scryfall.com/card/m20/226/golos-tireless-pilgrim?utm_source=api",
        "layout": "normal",
        "highres_image": true,
        "image_uris": {
          "small": "https://c1.scryfall.com/file/scryfall-cards/small/front/1/f/1fa48620-4c3d-4f75-be1f-c12c4aa59f51.jpg?1592517637",
          "normal": "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/f/1fa48620-4c3d-4f75-be1f-c12c4aa59f51.jpg?1592517637",
          "large": "https://c1.scryfall.com/file/scryfall-cards/large/front/1/f/1fa48620-4c3d-4f75-be1f-c12c4aa59f51.jpg?1592517637",
          "png": "https://c1.scryfall.com/file/scryfall-cards/png/front/1/f/1fa48620-4c3d-4f75-be1f-c12c4aa59f51.png?1592517637",
          "art_crop": "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/1/f/1fa48620-4c3d-4f75-be1f-c12c4aa59f51.jpg?1592517637",
          "border_crop": "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/1/f/1fa48620-4c3d-4f75-be1f-c12c4aa59f51.jpg?1592517637"
        },
        "mana_cost": "{5}",
        "cmc": 5.0,
        "type_line": "Legendary Artifact Creature — Scout",
        "oracle_text": "When Golos, Tireless Pilgrim enters the battlefield, you may search your library for a land card, put that card onto the battlefield tapped, then shuffle your library.\n{2}{W}{U}{B}{R}{G}: Exile the top three cards of your library. You may play them this turn without paying their mana costs.",
        "power": "3",
        "toughness": "5",
        "colors": [],
        "color_identity": [
          "B",
          "G",
          "R",
          "U",
          "W"
        ],
        "keywords": [],
        "legalities": {
          "standard": "legal",
          "future": "not_legal",
          "historic": "legal",
          "pioneer": "legal",
          "modern": "legal",
          "legacy": "legal",
          "pauper": "not_legal",
          "vintage": "legal",
          "penny": "not_legal",
          "commander": "legal",
          "brawl": "banned",
          "duel": "legal",
          "oldschool": "not_legal"
        },
        "games": [
          "arena",
          "paper",
          "mtgo"
        ],
        "reserved": false,
        "foil": true,
        "nonfoil": true,
        "oversized": false,
        "promo": false,
        "reprint": false,
        "variation": false,
        "set": "m20",
        "set_name": "Core Set 2020",
        "set_type": "core",
        "set_uri": "https://api.scryfall.com/sets/4a787360-9767-4f44-80b1-2405dc5e39c7",
        "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Am20&unique=prints",
        "scryfall_set_uri": "https://scryfall.com/sets/m20?utm_source=api",
        "rulings_uri": "https://api.scryfall.com/cards/1fa48620-4c3d-4f75-be1f-c12c4aa59f51/rulings",
        "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Aefe9c3e0-7315-408e-9903-9d25a681039b&unique=prints",
        "collector_number": "226",
        "digital": false,
        "rarity": "rare",
        "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
        "artist": "Joseph Meehan",
        "artist_ids": [
          "6befd6d5-7f8d-4b7c-87e3-5511391a3359"
        ],
        "illustration_id": "1aa28b44-b3d0-45e2-8466-3de1ca606e59",
        "border_color": "black",
        "frame": "2015",
        "frame_effects": [
          "legendary"
        ],
        "full_art": false,
        "textless": false,
        "booster": true,
        "story_spotlight": false,
        "edhrec_rank": 911,
        "preview": {
          "source": "Wizards of the Coast",
          "source_uri": "https://magic.wizards.com/en/articles/archive/card-preview/when-core-and-commander-combine-2019-06-18",
          "previewed_at": "2019-06-18"
        },
        "prices": {
          "usd": "5.29",
          "usd_foil": "29.20",
          "eur": "2.08",
          "tix": "6.12"
        },
        "related_uris": {
          "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=466980",
          "tcgplayer_decks": "https://decks.tcgplayer.com/magic/deck/search?contains=Golos%2C+Tireless+Pilgrim&page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "edhrec": "https://edhrec.com/route/?cc=Golos%2C+Tireless+Pilgrim",
          "mtgtop8": "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Golos%2C+Tireless+Pilgrim"
        },
        "purchase_uris": {
          "tcgplayer": "https://shop.tcgplayer.com/product/productsearch?id=192551&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
          "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Core-2020/Golos-Tireless-Pilgrim?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
          "cardhoarder": "https://www.cardhoarder.com/cards/73351?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
        }
      }
    ]
  }