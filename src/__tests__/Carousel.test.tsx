import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Carousel from '../components/Carousel/Carousel';

test("lets users click on thumbnails to make them the hero", async () => {
    const images = ["0.jpg", "1.jpg", "2.jpg"];
    const component = render(<Carousel images={images} />);

    const componentThumbnail:any = await component.findByTestId("thumbnail");

    expect(componentThumbnail.src).toContain(images[0]);

    for(let i = 0; i < images.length; i++) {
        const image = images[i];
        const thumb = await component.findByTestId(`thumbnail${i}`);
        thumb.click();

        expect(componentThumbnail.src).toContain(image);
        expect(thumb.classList).toContain('active');
    }
});