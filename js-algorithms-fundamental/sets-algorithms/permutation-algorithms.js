// Permuation: an ordered combination of values

// Without repetitions
function getPermutations(options) {
  const permutations = [];

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutations(options.slice(1));

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];
  }

  return permutations;
}

const todoItems = ['Walk the dog', 'Clean the toilet', 'buy groceries', 'order food'];

console.log(getPermutations(todoItems));

//I don't understand this...
