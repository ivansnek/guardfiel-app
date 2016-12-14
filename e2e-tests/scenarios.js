'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /fiel when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/fiel");
  });


  describe('fiel', function() {

    beforeEach(function() {
      browser.get('index.html#!/fiel');
    });


    it('should render fiel when user navigates to /fiel', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial fiel/);
    });

  });

});
