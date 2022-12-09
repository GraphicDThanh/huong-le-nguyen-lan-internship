function f(input: boolean) {
  const a = 100;
  if (input) {
    // Still okay to reference 'a'
    const b = a + 1;
    return b;
  }
  // Error: 'b' doesn't exist here
  return b;
}
