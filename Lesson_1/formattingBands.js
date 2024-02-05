/*
There are problems with this data.
- The band countries are wrong.
	- All the bands should have `'Canada'` as the country.
	- The band name should have all words capitalized.
	- Remove all dots from the band names.

Write a function that can process the input band Array and return an Array that
contains the fixed information:

Abstraction:
First modify all values of each `name` property
- split each value into a collection of words
  - split each word into a collection of letters
    - capitalize the first letter of each word and join them back together
    - if the word contains a `'.'`, replace that character with an empty string
  - join the words back together split by a space

Second, modify the countries of each band
- replace the value with `'Canada'`
*/
let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalizeString(string) {
  let initial = string[0].toUpperCase();
  let restOfString = string.slice(1, string.length);
  return initial + restOfString;
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ')
                       .map(word => capitalizeString(word))
                       .join(' ')
}

function updateBandCountry(band) {
  band.country = 'Canada';
}

function removeDotsInBandName(band) {
  band.name = band.name.replace(/\./g, '');
}

function processBands(bands) {
  return bands.map(band => {
    capitalizeBandName(band);
    updateBandCountry(band);
    removeDotsInBandName(band);
    return band;
  })
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]