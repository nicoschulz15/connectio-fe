import uuid from 'uuid/v1';

const data = [
  {
    id: uuid(),
    title: 'Test Adset 1',
    items: [
      {
        id: uuid(),
        title: 'World',
        value: '125K',
        isLocked: true
      },
      {
        id: uuid(),
        title: 'House',
        value: '452',
        isLocked: false
      },
      {
        id: uuid(),
        title: 'Numbers',
        value: '340',
        isLocked: false
      }
    ]
  },
  {
    id: uuid(),
    title: 'Test Adset 2',
    items: [
      {
        id: uuid(),
        title: 'Hetzner',
        value: '125K',
        isLocked: true
      },
      {
        id: uuid(),
        title: 'Digital',
        value: '452',
        isLocked: false
      },
      {
        id: uuid(),
        title: 'Cats',
        value: '340',
        isLocked: false
      }
    ]
  },
  {
    id: uuid(),
    title: 'Test Adset 3',
    items: [
      {
        id: uuid(),
        title: 'Samsung',
        value: '125K',
        isLocked: true
      },
      {
        id: uuid(),
        title: 'Cola',
        value: '452',
        isLocked: false
      },
      {
        id: uuid(),
        title: 'Sprite',
        value: '340',
        isLocked: false
      }
    ]
  },
  {
    id: uuid(),
    title: 'Test Adset 4',
    items: [
      {
        id: uuid(),
        title: 'Students',
        value: '125K',
        isLocked: true
      },
      {
        id: uuid(),
        title: 'Tea',
        value: '452',
        isLocked: false
      },
      {
        id: uuid(),
        title: 'Coffee',
        value: '340',
        isLocked: false
      }
    ]
  },
  {
    id: uuid(),
    title: 'Test Adset 5',
    items: [
      {
        id: uuid(),
        title: 'Cup',
        value: '125K',
        isLocked: true
      },
      {
        id: uuid(),
        title: 'Hero',
        value: '452',
        isLocked: false
      },
      {
        id: uuid(),
        title: 'Band',
        value: '340',
        isLocked: false
      }
    ]
  },
  {
    id: uuid(),
    title: 'Test Adset 6',
    items: [
      {
        id: uuid(),
        title: 'Minimal',
        value: '125K',
        isLocked: true
      },
      {
        id: uuid(),
        title: 'Maos',
        value: '452',
        isLocked: false
      },
      {
        id: uuid(),
        title: 'Soft',
        value: '340',
        isLocked: false
      }
    ]
  }
];

export default data;
