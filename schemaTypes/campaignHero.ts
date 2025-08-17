import { Rule } from '@sanity/types'

export const campaignHero = {
  name: 'campaignHero',
  title: 'Campaign Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'Main hero title (e.g., "Paul Sun")',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Position subtitle (e.g., "Candidate for Albert Eden Pukutupapa Ward")',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief campaign description',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'View My Policies'
    },
    {
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Get Involved'
    },
    {
      name: 'candidateImage',
      title: 'Candidate Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};