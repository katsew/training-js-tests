describe ("DOM Test with jQuery", function (){
  
  beforeEach (function (){
    // localhost:9876/base/...
    jasmine.getFixtures().fixturesPath = '/fixture';
    loadFixtures ('test003.html');
  });

  it ('Test 003 html', function (){
    expect ($('#test')).not.toHaveClass('test1');
  });

  it ('Test 003 html text', function (){
    expect ($('#test')).toHaveText('This is a test');
  });

});