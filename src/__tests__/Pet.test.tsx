import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Pet from '../components/Pet/Pet';

test("displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet id={0} name='' animal='' breed='' images={[]} location='' />
    </StaticRouter>
  );

  const petThumbnail: any = await pet.findByTestId("thumbnail");

  expect(petThumbnail.src).toContain("none.jpg");
});

test("displays a non-default, correct thumbnails", async () => {
  const pet = render(
    <StaticRouter>
      <Pet id={0} name='' animal='' breed='' images={["1.jpg", "2.jpg"]} location='' />
    </StaticRouter>
  );

  const petThumbnail: any = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("1.jpg");

})