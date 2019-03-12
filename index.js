// Write your code in this file!

function scuberGreetingForFeet (someDistance) {
  if (someDistance >= 400) {
    console.log ('This one is on me!')
  }
}

describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });
