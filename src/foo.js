function foo() {
  bar();
}

function bar(a) {
  foo(a, a);
}
