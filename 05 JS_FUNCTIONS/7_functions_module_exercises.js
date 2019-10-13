const exampleTestCases = [
    { name: 'first', args: [0, 1], expected: 1 },
    { name: 'second', args: [1, 1], expected: 2 },
    { name: 'third', args: [1, 0], expected: 1 },
    { name: 'fourth', args: [1, 3], expected: 4 }
  ];
  function example2_testCases(a, b) {
    console.log('a:', typeof a, ',', a);
    console.log('b:', typeof b, ',', b);
  
    const result = a + b;
    console.log('result:', typeof result, ',', result);
  
    return result;
  }
  evaluate(example2_testCases, exampleTestCases);