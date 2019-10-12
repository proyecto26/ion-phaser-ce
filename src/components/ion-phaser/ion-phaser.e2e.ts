import { newE2EPage } from '@stencil/core/testing';

describe('ion-phaser-ce', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ion-phaser-ce></ion-phaser-ce>');
    const element = await page.find('ion-phaser');
    expect(element).toHaveClass('hydrated');
  });
});
