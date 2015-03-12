"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks_external/src/tree/tree_benchmark";
var $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__;
var $__0 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__0.getIntParameter,
    bindAction = $__0.bindAction;
function main() {
  angular.bootstrap(document.querySelector('tree'), ['app']);
}
angular.module('app', []).directive('tree', function() {
  return {
    scope: {data: '='},
    template: '<span> {{data.value}}' + '  <span tree-if="data.left"></span>' + '  <span tree-if="data.right"></span>' + '</span>'
  };
}).directive('treeIf', ['$compile', '$parse', function($compile, $parse) {
  var transcludeFn;
  return {compile: function(element, attrs) {
      var expr = $parse(attrs.treeIf);
      var template = '<tree data="' + attrs.treeIf + '"></tree>';
      var transclude;
      return function($scope, $element, $attrs) {
        if (!transclude) {
          transclude = $compile(template);
        }
        var childScope;
        var childElement;
        $scope.$watch(expr, function(newValue) {
          if (childScope) {
            childScope.$destroy();
            childElement.remove();
            childScope = null;
            childElement = null;
          }
          if (newValue) {
            childScope = $scope.$new();
            childElement = transclude(childScope, function(clone) {
              $element.append(clone);
            });
          }
        });
      };
    }};
}]).config(['$compileProvider', function($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]).run(['$rootScope', function($rootScope) {
  var count = 0;
  var maxDepth = getIntParameter('depth');
  bindAction('#destroyDom', destroyDom);
  bindAction('#createDom', createDom);
  function destroyDom() {
    $rootScope.$apply(function() {
      $rootScope.initData = new TreeNode('', null, null);
    });
  }
  function createDom() {
    var values = count++ % 2 == 0 ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '-'];
    $rootScope.$apply(function() {
      $rootScope.initData = buildTree(maxDepth, values, 0);
    });
  }
}]);
var TreeNode = function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
($traceurRuntime.createClass)(TreeNode, {}, {});
function buildTree(maxDepth, values, curDepth) {
  if (maxDepth === curDepth)
    return new TreeNode('', null, null);
  return new TreeNode(values[curDepth], buildTree(maxDepth, values, curDepth + 1), buildTree(maxDepth, values, curDepth + 1));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks_external/src/tree/tree_benchmark.map

//# sourceMappingURL=./tree_benchmark.map