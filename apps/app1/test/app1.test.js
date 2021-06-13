const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const App1 = require('../lib/app1-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new App1.App1Stack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
