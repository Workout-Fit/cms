import { Collection } from 'payload'

export const exercises: Collection = {
  slug: 'exercises',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'id',
      type: '',
    },
  ],
}
