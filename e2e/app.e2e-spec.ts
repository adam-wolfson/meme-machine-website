import { AdamSitePage } from './app.po';

describe('adam-site App', () => {
  let page: AdamSitePage;

  beforeEach(() => {
    page = new AdamSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
