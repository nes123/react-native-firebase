import { firebase } from '../lib';

describe.only('appcheck()', function () {
  describe('namespace', function () {
    it('accessible from firebase.app()', function () {
      const app = firebase.app();
      expect(app.appcheck).toBeDefined();
      expect(app.appcheck().app).toEqual(app);
    });
  });
});
