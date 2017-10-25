import { StarryskyPage } from './app.po';

describe('starrysky App', () => {
  let page: StarryskyPage;

  beforeEach(() => {
    page = new StarryskyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
