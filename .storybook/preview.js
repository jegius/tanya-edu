/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import {ButtonComponent} from '../src/components/button/button-component';

[
  ButtonComponent,
].map((component) => customElements.define(component.name, component));
