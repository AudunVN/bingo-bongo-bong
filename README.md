# bingo-bongo-bong

Datapack with extra tasks and tweaks for playing the mod [Bongo](https://github.com/noeppi-noeppi/Bongo). Currently tested and working with `Bongo-1.19.2-3.2.0.jar`.

Intended to be played with PVP enabled and a world border at 1000 blocks out, giving a play area of 2000 x 2000 blocks. This is done to increase the likelihood of player encounters. Custom world generation is provided to attempt to make tasks more likely to be achievable within this reduced world size, but some tasks or task combinations may still be impossible or very difficult to complete depending on the specific world. Some examples here include things requiring green dye and/or cactus, or blocks requiring a combination of Silk Touch and a specific biome.

Exploration is key, but you probably do not want to aim too hard for something requiring a desert if all you see from your spawn is deep snow.

## Features

- World generation
  - World size and scale reduced, to fit more biomes and types of terrain in a smaller area
- Custom advancements
  - PVP advancements (hurt/kill/hook other players)
  - Exploration advancements (discover/visit certain structures, go to world border, loot chests)
  - Challenge advancements
    - Travel using nether portals (usually somebody else's after making your own)
    - Visit the build height limit
    - Take a bunch of damage (hopefully without dying)
    - Get killed by a mob/player (hopefully ending with a bingo, maybe not if you're playing with a random task locking on death)
- Bingo boards
  - Items and tasks in the default `pvp-60min-hard` board should cover more or less everything in 1.19.2 plus some of the custom advancements above. This should provide a lot more variety than the boards currently included with the `bingo` mod.

The default task set `pvp-60min-hard` should work fine with other map sizes, time limits and settings. Just note that it's playtested and balanced for a fairly experienced player to just about probably be able to complete a bingo in under 60 minutes depending on the exact board and world, so certain tasks requiring visiting the End or similar are not included. The inclusion of PVP-specific tasks likely also makes playing it without PVP enabled less than ideal.
