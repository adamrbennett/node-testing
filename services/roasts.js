const roasts = [
  {
    id: 'light',
    type: 'light',
    origin: 'Honduras'
  },
  {
    id: 'medium',
    type: 'medium',
    origin: 'Guatemala'
  },
  {
    id: 'dark',
    type: 'dark',
    origin: 'Columbia'
  }
];

module.exports = {
  getAll: () => {
    return roasts;
  },

  getById: (id) => {
    return roasts.find(r => r.id === id);
  }
}
