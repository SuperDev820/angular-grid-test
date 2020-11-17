import { AngularGridSamplePage } from './app.po';

describe('angular-grid-sample App', () => {
  let page: AngularGridSamplePage;

  beforeEach(() => {
    page = new AngularGridSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
