const animals = () => Promise.resolve({
  data: [
    {
      name: 'Arctic Fox',
      habitat: 'Arctic tundra',
      life_span: 6,
    },
    {
      name: 'Timber Rattlesnake',
      habitat: 'rocky hilltops, swamps',
      life_span: 20,
    },
  ],
});

export default animals;
