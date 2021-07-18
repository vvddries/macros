/*
* Locks all closed doors on the canvas
* Author: atropos, orcnog, vvddries
*/
canvas.scene.updateEmbeddedDocuments("Wall",canvas.scene.data.walls.map(w =>  {console.log(w.data.door); return {_id: w.id, ds: w.data.door === 1 ? 2 : 0}}));
