import { ArtistaAlbumFrontPage } from './app.po';

describe('artista-album-front App', () => {
  let page: ArtistaAlbumFrontPage;

  beforeEach(() => {
    page = new ArtistaAlbumFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
