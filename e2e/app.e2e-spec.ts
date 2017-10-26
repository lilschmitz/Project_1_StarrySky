import { StarrySkyPage } from './app.po';

describe('starry-sky App', () => {
  let page: StarrySkyPage;

  beforeEach(() => {
    page = new StarrySkyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
