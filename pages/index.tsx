import { MainPage } from '@layouts/main-page';
import { createPage } from '@app';
import { $$homePage, Home } from '@pages/home';

const { Page } = createPage({
  component: Home,

  layout: MainPage,

  gip: $$homePage.enter
});

export default Page;