/// fetch resolver to be used for mocking the fetch api
export default function() {
    return Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            name: "Raise Dead",
            rarity: "Legendary",
            type: "Action",
            cost: 2,
            set: {
              "id": "cs",
              "name": "Core Set",
              "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
            },
            collectible: false,
            text: "Summon a random creature from each discard pile.",
            attributes: [
              "Endurance"
            ],
            unique: false,
            imageUrl: "https://images.elderscrollslegends.io/cs/raise_dead.png",
            id: "ce7be2e72d6b06a52e50bed01952801ca4ecfade"
          },
          {
            name: "Raise Dead1",
            rarity: "Legendary",
            type: "Action",
            cost: 2,
            set: {
              "id": "cs",
              "name": "Core Set",
              "_self": "https://api.elderscrollslegends.io/v1/sets/cs"
            },
            collectible: false,
            text: "Summon a random creature from each discard pile.",
            attributes: [
              "Endurance"
            ],
            unique: false,
            imageUrl: "https://images.elderscrollslegends.io/cs/raise_dead1.png",
            id: "ce7be2e72d6b06a52e50bed01952801ca4ecfade"
          }
        ])
   
    })
  }