function foo() {
  console.log('foo');
  bar();
}

function bar() {
  foo('hello');
  baz();
}
