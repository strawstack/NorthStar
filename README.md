# NorthStar

A system for solving Advent of Code in the browser.

# How to Use

1. Navigate to [this link](https://strawstack.github.io/NorthStar/), right click, and bookmark the link.
2. Open an Advent of Code `puzzle page`. Example: https://adventofcode.com/2024/day/1
3. Open an Advent of Code `input page`. Example: (but you'll have to sign in) https://adventofcode.com/2024/day/1/input
4. Click the bookmark you created in `step 1`. This is a bookmarklet and will define functions on the page.
5. Paste the following code snippet in the console of the `input page`:

```js
northStar(() => {
    return document.body.querySelector("pre").innerHTML;
});
```

6. Copy the `peer_id` that gets pasted to the console.
7. Paste the following code snippet in the console of the `puzzle page` (replace <peer_id> with the value from `step 6`):


```js
northStar((data) => {
  console.log(data);
}, "<peer_id>");
```

8. Observe that the input was logged to the console by the statement in `step 7`.
9. Replace the `console.log(data)` from `step 7` with a working solution and log the answer.
10. Paste the answer in the solution box to solve an Advent of Code problem fully in the browser. 

# Demo Video

[Demo Video](#)

# Why use this?

The purpose of this repo is to allow one to solve an Advent of Code problem, but writting code in their browsers console. One could just open up the console and begin entering JS code, but they would not have access to the problem input. One could just copy/paste the input, but why do that when one can use `NorthStar` to connect two browser tabs together using a [p2p connection](https://peerjs.com/) to obtain the input data.

# Also...

This doesn't just work for Advent of Code. `NorthStar` can connect any two tabs. Replace the `return` statement in `step 5` to have a tab execute arbitrary code with access to the `DOM` when sending a response to other tabs that connect to it.
