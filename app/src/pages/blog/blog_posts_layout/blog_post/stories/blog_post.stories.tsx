import React from 'react';
import { storiesOf } from '@storybook/react';

import { BlogPost } from '../blog_post';

import thumbail from './test_cover.png';

storiesOf('Pages/Blog/BlogPost', module)
  .add('Jumbotron (first post)', () => (
    <BlogPost
        title='Test Blog Post'
        pubDate='2019-03-04 14:22:27'
        link='#'
        thumbnail={thumbail}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis repellat tempore dignissimos modi accusamus cupiditate doloremque expedita impedit corrupti necessitatibus totam voluptatibus temporibus, quas ut molestiae sequi ipsa reiciendis dicta provident perferendis alias aspernatur? Dolorem laudantium optio doloribus molestiae quas. Magnam vero praesentium obcaecati at perspiciatis. Delectus sunt illum maxime? Laboriosam magnam obcaecati expedita aliquid natus tenetur nostrum suscipit quos error officia praesentium, rerum reiciendis quas culpa sunt similique ex, distinctio aut deleniti nam. Quis inventore qui ratione sequi debitis corporis doloremque consequuntur laboriosam beatae blanditiis culpa, illo incidunt adipisci voluptates facilis! Deleniti veritatis qui officiis architecto, inventore odit. Maxime odio ullam non aliquid commodi sequi expedita aspernatur consequuntur. Ab aliquam magnam doloremque suscipit eos nam quasi id reiciendis officia deleniti, quas labore nihil quaerat cum, quis fuga. Saepe velit esse veritatis harum amet reiciendis iusto maiores deleniti quae, consectetur facere aspernatur hic voluptate inventore magni blanditiis? Omnis quo corrupti mollitia quas ipsam expedita minima harum, vero molestias iusto consectetur aspernatur ut rerum enim, accusamus velit repudiandae iste recusandae officiis possimus ipsum corporis? Ut excepturi eveniet praesentium neque unde, maxime consectetur sequi impedit autem. Numquam corporis labore odio architecto optio corrupti eaque enim voluptas culpa minus, doloribus earum quibusdam qui dolor dicta excepturi expedita voluptatibus tempore maiores! Quae porro nostrum, fuga iusto blanditiis totam asperiores repellendus tempore, minus recusandae laudantium quod eius. Sit, consequuntur velit eius temporibus debitis illum officia ducimus at iste quod accusantium corporis a praesentium eligendi rem facere eum perferendis, voluptatibus aperiam ex doloremque modi. Expedita dignissimos nobis quam error libero voluptatum culpa. Libero est ut quis blanditiis error, sint fuga ex exercitationem odit voluptates soluta esse cumque explicabo et consequuntur veritatis totam atque iusto officiis illum illo iure eveniet enim. Unde nam quasi magnam, animi tempora totam exercitationem corrupti sit alias nemo, labore modi non?'
        categories={['category1', 'category2']}
        isJumbotron={true}
    />
  ))
  .add('Card (default)', () => (
    <BlogPost
        title='Test Blog Post'
        pubDate='2019-03-04 14:22:27'
        link='#'
        thumbnail={thumbail}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis repellat tempore dignissimos modi accusamus cupiditate doloremque expedita impedit corrupti necessitatibus totam voluptatibus temporibus'
        categories={['category1', 'category2']}
    />
  ))
  .add('With a very long description', () => (
    <BlogPost
        title='Test Blog Post'
        pubDate='2019-03-04 14:22:27'
        link='#'
        thumbnail={thumbail}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis repellat tempore dignissimos modi accusamus cupiditate doloremque expedita impedit corrupti necessitatibus totam voluptatibus temporibus, quas ut molestiae sequi ipsa reiciendis dicta provident perferendis alias aspernatur? Dolorem laudantium optio doloribus molestiae quas. Magnam vero praesentium obcaecati at perspiciatis. Delectus sunt illum maxime? Laboriosam magnam obcaecati expedita aliquid natus tenetur nostrum suscipit quos error officia praesentium, rerum reiciendis quas culpa sunt similique ex, distinctio aut deleniti nam. Quis inventore qui ratione sequi debitis corporis doloremque consequuntur laboriosam beatae blanditiis culpa, illo incidunt adipisci voluptates facilis! Deleniti veritatis qui officiis architecto, inventore odit. Maxime odio ullam non aliquid commodi sequi expedita aspernatur consequuntur. Ab aliquam magnam doloremque suscipit eos nam quasi id reiciendis officia deleniti, quas labore nihil quaerat cum, quis fuga. Saepe velit esse veritatis harum amet reiciendis iusto maiores deleniti quae, consectetur facere aspernatur hic voluptate inventore magni blanditiis? Omnis quo corrupti mollitia quas ipsam expedita minima harum, vero molestias iusto consectetur aspernatur ut rerum enim, accusamus velit repudiandae iste recusandae officiis possimus ipsum corporis? Ut excepturi eveniet praesentium neque unde, maxime consectetur sequi impedit autem. Numquam corporis labore odio architecto optio corrupti eaque enim voluptas culpa minus, doloribus earum quibusdam qui dolor dicta excepturi expedita voluptatibus tempore maiores! Quae porro nostrum, fuga iusto blanditiis totam asperiores repellendus tempore, minus recusandae laudantium quod eius. Sit, consequuntur velit eius temporibus debitis illum officia ducimus at iste quod accusantium corporis a praesentium eligendi rem facere eum perferendis, voluptatibus aperiam ex doloremque modi. Expedita dignissimos nobis quam error libero voluptatum culpa. Libero est ut quis blanditiis error, sint fuga ex exercitationem odit voluptates soluta esse cumque explicabo et consequuntur veritatis totam atque iusto officiis illum illo iure eveniet enim. Unde nam quasi magnam, animi tempora totam exercitationem corrupti sit alias nemo, labore modi non?'
        categories={['category1', 'category2']}
    />
  ))
  .add('With an invalid date time format (date will be hidden)', () => (
    <BlogPost
        title='Test Blog Post'
        pubDate='invalid'
        link='#'
        thumbnail={thumbail}
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis repellat tempore dignissimos modi accusamus cupiditate doloremque expedita impedit corrupti necessitatibus totam voluptatibus temporibus'
        categories={['category1', 'category2']}
    />
  ));
