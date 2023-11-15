const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 3, name: 'quq', price: 13 }
  ];

  const name = prompt('enter a name of an item, we will try and find it',
  'foo');

  const found = items.find(item => item.name === name);
  if(found) {
    console.log('we found it');
    console.log(found);
  } else {
    console.log('we could not find an item with name ${name}');
  }

