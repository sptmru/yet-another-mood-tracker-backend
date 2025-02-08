export const MoodDefinition = {
  $id: 'Mood',
  type: 'object',
  name: 'Mood',
  properties: {
    id: { type: 'string' },
    date: { type: 'string' },
    rating: { type: 'number' },
    description: { type: 'string' },
    reasons: {
      type: 'array',
      items: {
        $ref: 'Reason#',
      },
    },
    createdAt: { type: 'string' },
  },
  required: ['date', 'rating'],
};
