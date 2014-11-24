describe ('test001', function (){
  it ('function add', function (){
    expect (plus (1, 1)).toBe (2);
  });

  it ('function minus', function (){
    expect (minus (4, 3)).toBe (1);
  });

  it ('undef', function (){
    expect (undef()).toBeUndefined();
  });

  it ('not undef', function (){
    expect (notUndef()).toBeDefined();
  });
});