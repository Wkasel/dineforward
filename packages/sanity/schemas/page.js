// export default {
//   name: 'page',
//   title: 'Page',
//   type: 'document',
//   liveEdit: false,
//   // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
//   // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     },
//     {
//       title: 'Tags',
//       name: 'tags',
//       type: 'array',
//       of: [
//         {
//           type: 'string',
//         },
//       ],
//       options: {
//         layout: 'tags',
//       },
//     },
//     {
//       name: 'blurb',
//       title: 'Blurb',
//       type: 'localeString',
//     },
//     {
//       name: 'categories',
//       title: 'Categories',
//       type: 'array',
//       of: [
//         {
//           type: 'reference',
//           to: { type: 'category' },
//         },
//       ],
//     },
//     {
//       name: 'body',
//       title: 'Body',
//       type: 'localeBlockContent',
//     },
//     {
//       title: 'PageContent',
//       name: 'pageContent',
//       type: 'array',
//       of: [{ type: 'blockContent' }],
//     },
//   ],
// };

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      title: 'PageContent',
      name: 'pageContent',
      type: 'array',
      of: [{ type: 'blockContent' }],
    },
  ],
};
