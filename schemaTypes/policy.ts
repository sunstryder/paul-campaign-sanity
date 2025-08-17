import { Rule } from '@sanity/types'

export const policy = {
  name: 'policy',
  title: 'Policy',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Policy Title',
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
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide React icon name (e.g., "DollarSign", "Car", "Building2")',
      options: {
        list: [
          { title: 'Dollar Sign', value: 'DollarSign' },
          { title: 'Trending Down', value: 'TrendingDown' },
          { title: 'Car', value: 'Car' },
          { title: 'Leaf', value: 'Leaf' },
          { title: 'Building 2', value: 'Building2' },
          { title: 'Users', value: 'Users' },
          { title: 'Target', value: 'Target' },
          { title: 'Shield', value: 'Shield' }
        ]
      }
    },
    {
      name: 'color',
      title: 'Color Gradient',
      type: 'string',
      options: {
        list: [
          { title: 'Red', value: 'from-red-500 to-red-600' },
          { title: 'Green', value: 'from-green-500 to-green-600' },
          { title: 'Blue', value: 'from-blue-500 to-blue-600' },
          { title: 'Emerald', value: 'from-emerald-500 to-emerald-600' },
          { title: 'Purple', value: 'from-purple-500 to-purple-600' },
          { title: 'Orange', value: 'from-orange-500 to-orange-600' }
        ]
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(1)
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ]
};