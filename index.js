// Write your code in this file!

function scuberGreetingForFeet (someDistance) {
  if (someDistance <=400) {
    return ('This one is on me!') }
  if (someDistance >2000) {
    return ('I will gladly take your thirty bucks.') }
  if (someDistance >2500) {
      return ('No can do.') }
}


function ternaryCheckCity(someCity) {
  if (somecity = 'NYC') {
    return ('Ok, sounds good.')
  }
}



describe('ternaryCheckCity()', function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity('Pittsburgh')).to.equal('No go.');
    });
  });
