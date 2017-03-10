import { NgQuizPage } from './app.po';

describe('ng-quiz App', () => {
  let page: NgQuizPage;

  beforeEach(() => {
    page = new NgQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
