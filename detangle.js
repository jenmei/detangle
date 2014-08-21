$(function(){ // on dom ready

  $('#cy').cytoscape({
    style: cytoscape.stylesheet()
      .selector('node')
      .css({
        'content': 'data(id)'
      })
      .selector('edge')
      .css({
        'target-arrow-shape': 'triangle',
        'width': 4,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd'
      })
      .selector('.highlighted')
      .css({
        'background-color': '#61bffc',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      }),

    elements: {
      nodes: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'c' } },
        { data: { id: 'd' } },
        { data: { id: 'e' } },
        { data: { id: 'f' } },
        { data: { id: 'g' } },
        { data: { id: 'h' } },
        { data: { id: 'i' } },
        { data: { id: 'j' } },
        { data: { id: 'k' } },
        { data: { id: 'l' } },
        { data: { id: 'm' } },
        { data: { id: 'n' } },
        { data: { id: 'o' } },
        { data: { id: 'o' } },
        { data: { id: 'p' } },
        { data: { id: 'q' } },
        { data: { id: 'r' } },
        { data: { id: 's' } },
        { data: { id: 't' } },
        { data: { id: 'u' } }
      ],

      edges: [
        { data: { id: 'ac', weight: 1, source: 'a', target: 'c' } },
        { data: { id: 'cm', weight: 1, source: 'c', target: 'm' } },
        { data: { id: 'mn', weight: 1, source: 'm', target: 'n' } },
        { data: { id: 'no', weight: 1, source: 'n', target: 'o' } },
        { data: { id: 'op', weight: 1, source: 'o', target: 'p' } },
        { data: { id: 'nq', weight: 1, source: 'n', target: 'q' } },
        { data: { id: 'qt', weight: 1, source: 'q', target: 't' } },
        { data: { id: 'tu', weight: 1, source: 't', target: 'u' } },
        { data: { id: 'qr', weight: 1, source: 'q', target: 'r' } },
        { data: { id: 'rs', weight: 1, source: 'r', target: 's' } },
        { data: { id: 'cd', weight: 1, source: 'c', target: 'd' } },
        { data: { id: 'dg', weight: 1, source: 'd', target: 'g' } },
        { data: { id: 'gf', weight: 1, source: 'g', target: 'f' } },
        { data: { id: 'de', weight: 1, source: 'd', target: 'e' } },
        { data: { id: 'ef', weight: 1, source: 'e', target: 'f' } },
        { data: { id: 'fh', weight: 1, source: 'f', target: 'h' } },
        { data: { id: 'hi', weight: 1, source: 'h', target: 'i' } },
        { data: { id: 'ab', weight: 1, source: 'a', target: 'b' } },
        { data: { id: 'bl', weight: 1, source: 'b', target: 'l' } },
        { data: { id: 'lk', weight: 1, source: 'l', target: 'k' } },
        { data: { id: 'kj', weight: 1, source: 'k', target: 'j' } },
        { data: { id: 'jh', weight: 1, source: 'j', target: 'h' } }
      ]
    },

    layout: {
      name: 'breadthfirst',
      directed: false,
      roots: '#a',
      padding: 10
    },

    ready: function(){
      window.cy = this;

//      $$.elesfn.bfs = $$.elesfn.breadthFirstSearch;
//      $$.elesfn.dfs = $$.elesfn.depthFirstSearch;

      var repo = cy.elements().bfs('#a', function(){}, true);

//      var i = 0;
//      var highlightNextEle = function(){
//        repo.path[i].addClass('highlighted');
//
//        if( i < repo.path.length ){
//          i++;
//          setTimeout(highlightNextEle, 1000);
//        }
//      };

      // kick off first highlight
//      highlightNextEle();


//      var actions = {
//      };

//      $(window).keypress(function(e) {
//        var key = e.which;
//        console.log(String.fromCharCode(key));
//      });
    }
  });

}); // on dom ready

//$(function() {
//  $(window).keypress(function(e) {
//    var key = e.which;
//    console.log(key);
//  });
//});


/*
click: select
-: collapse
+: expand
f: toggle filter
c: create a child node
up: move up
down: move down
left: move left (sibling)
right: right (sibling)

 */


angular.module('detangle', [])
  .controller('detangleCtrl', function ($scope) {

    function parentsFor(node) {

    }

    function setStart(start) {
      $scope.start = start;
      $scope.current = start;
      $scope.parents = parentsFor(start);
      $scope.previous = null;
    }

    setStart('a');

    $scope.selectNode = function (node) {
      console.log('clicked:', node)
    };
    $scope.setStart = setStart;
});