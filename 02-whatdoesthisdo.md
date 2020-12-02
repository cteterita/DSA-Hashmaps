# 2. WhatDoesThisDo
DO NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.

```js
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
```

First, this code creates a HashMap and tries to hash two different values to two identical strings. The strings will hash to the same key, so only the second value (20) will be saved.

Next, it creates two more strings that are identical to the first two. Regardless of the fact that they're distinct objects in memory, they will still hash to the same value. Again, only the second value set (10) will be saved.

```js
    console.log(map1.get(str1)); // 20
    console.log(map2.get(str3)); // 10
```