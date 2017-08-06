import { CommonHttpPage } from './app.po';

describe('common-http App', () => {
  let page: CommonHttpPage;

  beforeEach(() => {
    page = new CommonHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
