const { signEmail } = require('../src/index.js');

function testSignEmail() {
  const result = signEmail('hello');
  if (result !== 'Signed: hello') {
    throw new Error(`Expected 'Signed: hello' but got '${result}'`);
  }
  console.log('✅ signEmail test passed');
}

testSignEmail();
