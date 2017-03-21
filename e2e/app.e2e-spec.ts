import { ReptilianPlanningPokerPage } from './app.po';

describe('reptilian-planning-poker App', () => {
  let page: ReptilianPlanningPokerPage;

  beforeEach(() => {
    page = new ReptilianPlanningPokerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
