import assert from 'node:assert/strict';
import {nodes,nodeNames,pathBetween,mapRooms} from './docs/navigation.js';
const visited=new Set(['street']),queue=['street'];
while(queue.length){const id=queue.shift(),node=nodes[id];assert.equal(node.pos.length,3);assert.ok(node.pos.every(Number.isFinite));assert.equal(node.look.length,3);for(const next of node.links){assert.ok(nodes[next],`${id}: missing ${next}`);assert.ok(nodeNames[next],`${next}: missing accessible label`);assert.ok(nodes[next].links.includes(id),`${id} > ${next} has no return route`);if(!visited.has(next)){visited.add(next);queue.push(next)}}}
assert.equal(visited.size,Object.keys(nodes).length,'All rooms must be reachable from the street');
for(const id of ['landing','upper-hall','playroom','bedroom','balcony']){assert.equal(nodes[id].floor,2);assert.ok(nodes[id].pos[1]>4.8)}
for(let floor of [1,2])for(const [id] of mapRooms[floor])assert.equal(nodes[id].floor||1,floor,`${id} is on wrong map floor`);
assert.deepEqual(pathBetween('landing','stairs-mid'),pathBetween('stairs-mid','landing').slice().reverse());
assert.ok(nodes.entry.links.includes('stairs-base'));
console.log(`${visited.size} connected viewpoints; every walking route has a return; both floor maps and stair elevations verified.`);
