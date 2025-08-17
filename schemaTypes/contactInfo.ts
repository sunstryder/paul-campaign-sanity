import { Rule } from '@sanity/types'
export const contactInfo = {
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'address',
      title: 'Address/Area',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url'
        }
      ]
    }
  ]
};
