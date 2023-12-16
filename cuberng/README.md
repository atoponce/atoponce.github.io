# CubeRNG
A hardware random number generator (HWRNG) using 2×2×2, 3×3×3, 4×4×4, and 5×5×5 Rubik's Cubes.

## Motivation
There are a number of different methods you can execute by hand for generating cryptographically
secure randomness:

- Flipping coins
- Tossing dice
- [Shuffling playing cards][1]
- [Throwing paper segments][2]
- etc.

[1]: https://github.com/atoponce/deckware
[2]: https://defuse.ca/manual-random-number-generator.htm

This project takes advantage of the sheer number of permutations in a Rubik's Cube. The number of
unique permutations per cube is already known:

- 2×2×2: [3.674 million][3] 
- 3×3×3: [43.252 quintillion][4]
- 4×4×4: [7.401 quattuordecillion][5]
- 5×5×5: [282.870 trevigintillion][6]

[3]: https://en.wikipedia.org/wiki/Pocket_Cube#Permutations
[4]: https://en.wikipedia.org/wiki/Rubik's_Cube#Permutations
[5]: https://en.wikipedia.org/wiki/Rubik's_Revenge#Permutations
[6]: https://en.wikipedia.org/wiki/Professor%27s_Cube#Permutations

This means when sufficiently scrambled, each cube provides approximately the following in symmetric
security:

- 2×2×2: ~21 bits
- 3×3×3: ~65 bits
- 4×4×4: ~152 bits
- 5×5×5: ~247 bits

## Scrambling
The trick is knowing how many twists are required to sufficiently scramble a cube. Unfortunately, I
don't have that answer—at least not rigorously. However, I think we can get within ballpark of
at least making it sufficiently difficult for an adversary to precisely reproduce.

The shortest path to solving the worst case 3×3×3 cube is [20 moves][7], or 26 quarter turn twists.
This is known as "God's Number". This number states that no matter how the cube is scrambled, it can
be guaranteed to be solved within 20 moves or less.

[7]: https://www.cube20.org/

The World Cube Association as a program called [TNoodle][8] that applies 20 twists to a 3×3×3 cube
before the competitor can attempt solving it. In fact, the number of turns TNoodle performs on each
cube it supports is:

- 2×2×2: ~11 (average)
- 3×3×3: ~19 (average)
- 4×4×4: ~44 (average)
- 5×5×5: 60
- 6×6×6: 80
- 7×7×7: 100

[8]: https://github.com/thewca/tnoodle

However, scrambling a cube to be solved might not be the same as a sufficiently-scrambled cube for
security. Remember that the goal is to prevent an adversary from recreating the scrambled state.
[Some research][9] has been done here. The goal is to ensure that every cubelet can occupy every
possible position from the solved state as well as every possible orientation. For the 2×2×2 cube,
it appears that at least 20 moves are necessary.

[9]: https://theconversation.com/how-hard-is-it-to-scramble-rubiks-cube-129916

So instead, scrambling a cube for security might require 10+ additional moves past God's Number.
Something like:

- 2×2×2: 20 moves
- 3×3×3: 30 moves
- 4×4×4: 55 moves
- 5×5×5: 70 moves

## Execution
Once you've sufficiently scrambled your cube, record the facelet colors in the web app and press the
button to calculate a random number from that state. The project uses SHA-256 to whiten the raw data
before giving you your random number. Hashing with SHA-256 ensures that any biases present in the
permutation are removed.

The "test vectors" for the SHA-256 digest of a solved cube are:

- 2×2×2: 0x09cca8
- 3×3×3: 0x1397cb125ac75bd57
- 4×4×4: 0xe5de84cc8a7174f870b62113b98c5b90a3e9
- 5×5×5: 0x5f3a3d2d2199e13440dcb377f29029b51e59c1b2ae5d4c69bd9d692f96f52b

A solved cube is defined as:

- Up: white
- Left: orange
- Front: green
- Right: red
- Back: blue
- Down: yellow

## Caution
This project doesn't enforce that the cube is solvable from its scrambled state, although it does
enforce color count per cube. This means you could disassemble the cube, placing it in an unsolvable
scramble, record the colors in the web app, and calculate your random number.

But once you've received your random number, you will want to destroy the scrambled cube state. If
you can solve the cube, this would be the best approach. If you cannot solve it, then continue
scrambling the cube to erase the state, preventing an adversary from discovering it. Of course,
press the red "Clear cube" button or close your browser tab to prevent the digest from staying on
the screen for the same reason.

This project does not intentionally transmit anything over the network or store anything to disk.
