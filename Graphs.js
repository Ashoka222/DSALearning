// =============== GRAPH REPRESENTATION USING ADJACENCY LIST ===============
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

// Graph Representation usage example
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
console.log(graph.adjacencyList); // Output: { A: [ 'B' ], B: [ 'A' ] }

// =============== GRAPH TRAVERSAL USING DFS ===============
function dfs(graph, node, visited = new Set()) {
  if (!visited.has(node)) {
    console.log(node);
    visited.add(node);
    for (let neighbor of graph[node]) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Graph Traversal usage example
let graphDFS = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

dfs(graphDFS, "A"); // Output: A B D C E
