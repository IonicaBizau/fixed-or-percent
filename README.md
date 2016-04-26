
# fixed-or-percent [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/fixed-or-percent.svg)](https://www.npmjs.com/package/fixed-or-percent) [![Downloads](https://img.shields.io/npm/dt/fixed-or-percent.svg)](https://www.npmjs.com/package/fixed-or-percent) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the percent or fixed value.

## :cloud: Installation

```sh
$ npm i --save fixed-or-percent
```


## :clipboard: Example



```js
const fixedOrPercent = require("fixed-or-percent");

console.log(fixedOrPercent(42));
// 42

console.log(fixedOrPercent(10, 420));
// 10

console.log(fixedOrPercent("10%", 420));
// 42
```

## :memo: Documentation


### `fixedOrPercent(input, total)`
Gets the fixed or percent value.

#### Params
- **String|Number** `input`: The fixed or percent value (e.g. `42`, `"42%"`).
- **Number** `total`: The total value (used when having a percent value).

#### Return
- **Number** The fixed or percent value.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`compute-size`](https://github.com/IonicaBizau/compute-size#readme)—Helper tool for resizing the things.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
