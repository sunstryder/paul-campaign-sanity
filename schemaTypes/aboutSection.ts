import { Rule } from '@sanity/types'

export const aboutSection = {
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Highlight Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Map Pin', value: 'MapPin' },
                  { title: 'Users', value: 'Users' },
                  { title: 'Award', value: 'Award' },
                  { title: 'Target', value: 'Target' },
                  { title: 'Briefcase', value: 'Briefcase' },
                  { title: 'Heart', value: 'Heart' }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: 'candidateImage',
      title: 'Candidate Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'communityImage',
      title: 'Community Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};