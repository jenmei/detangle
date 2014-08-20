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
        { data: { id: 'e' } }
      ],

      edges: [
        { data: { id: 'a"e', weight: 1, source: 'a', target: 'e' } },
        { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
        { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
        { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
        { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
        { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
        { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }
      ]
    },

    layout: {
      name: 'breadthfirst',
      directed: true,
      roots: '#a',
      padding: 10
    },

    ready: function(){
      var cy = this;

//      $$.elesfn.bfs = $$.elesfn.breadthFirstSearch;
//      $$.elesfn.dfs = $$.elesfn.depthFirstSearch;

      var repo = cy.elements().bfs('#a', function(){}, true);

      var i = 0;
      var highlightNextEle = function(){
        repo.path[i].addClass('highlighted');

        if( i < repo.path.length ){
          i++;
          setTimeout(highlightNextEle, 1000);
        }
      };

      // kick off first highlight
      highlightNextEle();


      var actions = {
      };

      $(window).keypress(function(e) {
        var key = e.which;
        console.log(String.fromCharCode(key));
      });
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
