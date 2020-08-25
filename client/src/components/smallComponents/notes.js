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