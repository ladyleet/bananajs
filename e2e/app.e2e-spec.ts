import { BananajavascriptPage } from './app.po';

describe('bananajavascript App', function() {
  let page: BananajavascriptPage;

  beforeEach(() => {
    page = new BananajavascriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
