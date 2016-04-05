angular.module('common.constant')
  .constant('BROADCAST', (function() {
    var events = [
      'tiledObjectList_CalculateMarginBetweenBox'
    ];
    var result = {};
    for (var i = 0; i < events.length; i++) {
      result[events[i]] = events[i];
    }
    return result;
  })());