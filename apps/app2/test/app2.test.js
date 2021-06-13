const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const App2 = require('../lib/app2-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new App2.App2Stack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
