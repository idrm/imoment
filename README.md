# imoment

An immutable wrapper around momentjs.

Install `moment` since it's a peer depenency of `imoment`

`npm install --save moment`

Install `imoment`

`npm install --save imoment`

Use `imoment` as a drop-in replacement for `moment`. E.g.

```
import imoment from 'imoment';

const im1 = imoment();
const im2 = im1.add(7, 'days');

console.log(im1.isSame(im2)); // should print out 'false'
```