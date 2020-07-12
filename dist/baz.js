function foo() {
  console.log('foo');
  bar();
}

function bar() {
  foo('hello');
  baz();
}

function baz(msg) {
  console.log(msg);
  alert(msg);
}

function bar2() {
  foo('hello');
  baz();
}

function bar3() {
  foo('hello');
}

function bar4() {
  foo('hello');
}
