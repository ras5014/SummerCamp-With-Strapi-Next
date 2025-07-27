import type { Attribute, Schema } from '@strapi/strapi';

export interface BlocksHeroSection extends Schema.Component {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Attribute.Component<'elements.link'>;
    heading: Attribute.String;
    image: Attribute.Media<'images'>;
    logo: Attribute.Component<'elements.logo'>;
    theme: Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface BlocksInfoBlock extends Schema.Component {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info Block';
  };
  attributes: {
    content: Attribute.RichText;
    cta: Attribute.Component<'elements.link'>;
    headline: Attribute.String;
    image: Attribute.Media<'images'>;
    reversed: Attribute.Boolean & Attribute.DefaultTo<false>;
    theme: Attribute.Enumeration<['turquoise', 'orange']>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
  };
}

export interface ElementsLogo extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    logoText: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
