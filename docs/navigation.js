export const nodes={
street:{title:'An afternoon in Kasukabe',area:'OUTSIDE THE GATE',desc:'The Noharas are home. Follow the marker to the wooden gate.',pos:[1,1.68,14.5],look:[0,3.3,1],links:['gate'],map:[135,325]},
gate:{title:'You found the right house.',area:'THE GARDEN GATE',desc:'野原 — Nohara. Ring the bell, or let yourself in.',pos:[3.5,1.68,7.9],look:[3.3,1.65,3.5],links:['street','porch','garden-path'],map:[208,275]},
porch:{title:'Someone’s at the door.',area:'FRONT PORCH',desc:'A pair of shoes at the entrance. A familiar voice from inside.',pos:[3.4,1.68,4.85],look:[2.9,1.5,1.6],links:['gate','entry'],map:[208,247]},
entry:{title:'おじゃまします. Come on in.',area:'THE GENKAN',desc:'Shoes off. Family time to the left, a whole second floor above.',pos:[2.6,1.94,2.8],look:[2.8,2.2,-.8],links:['porch','hall','stairs-base'],map:[203,214]},
hall:{title:'Which way first?',area:'THE BLUE HALLWAY',desc:'Head into the living room, take the blue stairs upstairs, or explore the bathroom.',pos:[2.45,1.94,1.75],look:[-.3,1.3,1.8],links:['entry','living','bath','stairs-base'],map:[205,181]},
living:{title:'A hero in the living room.',area:'LIVING ROOM',desc:'Shin-chan has a very important mission for today’s visitor.',pos:[.55,1.78,3.65],look:[-.9,1.05,1.9],links:['hall','living-window','dining'],map:[143,185]},
'living-window':{title:'Sunshine on the green carpet.',area:'LIVING ROOM · BY THE WINDOW',desc:'A drawing on the low table. Himawari quietly plotting her next discovery.',pos:[-3.75,1.65,2.95],look:[-1.2,1.1,2.6],links:['living','tatami'],map:[75,217]},
dining:{title:'A seat at the family table.',area:'KITCHEN · DINING TABLE',desc:'Red chairs, a little rice cooker, and something delicious on the stove.',pos:[-2.5,1.94,-.55],look:[-2.3,1.3,-2.8],links:['living','kitchen'],map:[90,120]},
kitchen:{title:'Almost ready. No sneaking bites.',area:'THE KITCHEN',desc:'Misae is cooking. You might be able to help with the afternoon snack.',pos:[-.25,1.94,-2.6],look:[-3.5,1.4,-1.2],links:['dining'],map:[140,65]},
tatami:{title:'The art of doing absolutely nothing.',area:'THE TATAMI ROOM',desc:'Hiroshi’s newspaper is open. His eyes may or may not be.',pos:[-5.7,1.8,.35],look:[-7,1.3,2],links:['living-window','veranda'],map:[20,185]},
bath:{title:'A deep breath. A deep bath.',area:'THE BATHROOM',desc:'Cool tiles and a deep soaking tub. A little pocket of quiet.',pos:[2.1,1.94,-2.5],look:[3.8,1.1,-3.2],links:['hall'],map:[205,65]},
'garden-path':{title:'Take the scenic route.',area:'THE FRONT GARDEN',desc:'Follow the hedge toward the little blue roof. Someone is waiting.',pos:[.4,1.68,5.6],look:[-5.8,.9,5.6],links:['gate','garden'],map:[130,275]},
garden:{title:'The best boy in Kasukabe.',area:'SHIRO’S GARDEN',desc:'A blue roof, a patch of grass, and a tail that never takes a break.',pos:[-4.3,1.62,6.25],look:[-5.8,.6,5.65],links:['garden-path','veranda'],map:[42,275]},
veranda:{title:'Let a little sunshine in.',area:'THE GARDEN VERANDA',desc:'The sliding window opens onto the tatami room. A cool breeze follows you in.',pos:[-7,1.65,4.8],look:[-7,1.4,1.8],links:['garden','tatami'],map:[22,247]},
'stairs-base':{title:'There’s more upstairs.',area:'THE BLUE STAIRCASE',desc:'Follow the blue steps. The family bedroom, playroom and balcony are waiting.',pos:[3.5,1.96,1.3],look:[3.5,3.45,-1],links:['entry','hall','stairs-mid'],map:[225,165]},
'stairs-mid':{title:'One step at a time.',area:'STAIRS · HEADING TO 2F',desc:'Keep going to the landing. You can always come back down.',pos:[3.5,3.55,-.2],look:[3.3,4.9,-2.3],links:['stairs-base','landing'],map:[230,120]},
landing:{floor:2,title:'Welcome to the second floor.',area:'2F · THE LANDING',desc:'A playroom to the left. The bedroom and balcony are farther along the hall.',pos:[2.3,5.17,-2.6],look:[-.8,4.65,-1.7],links:['stairs-mid','playroom','upper-hall'],map:[246,70]},
'upper-hall':{floor:2,title:'A quieter corner of the house.',area:'2F · UPSTAIRS HALL',desc:'Family futons through the doorway. Sunshine on the balcony beyond.',pos:[2.3,5.17,.65],look:[-.4,4.4,1.3],links:['landing','bedroom'],map:[246,180]},
playroom:{floor:2,title:'Top-secret hero business.',area:'2F · PLAY & STUDY ROOM',desc:'Tiny trains, well-loved books, and a box Shin-chan would rather you didn’t notice.',pos:[-1,5.17,-1.05],look:[-1.8,4.3,-2.5],links:['landing'],map:[115,80]},
bedroom:{floor:2,title:'Just five more minutes.',area:'2F · THE FAMILY BEDROOM',desc:'Soft futons, folded bedding, and a door opening onto the afternoon.',pos:[.85,5.17,1.1],look:[-1.8,4.2,1.25],links:['upper-hall','balcony'],map:[135,185]},
balcony:{floor:2,title:'A little above the everyday.',area:'2F · THE BALCONY',desc:'Laundry sways. The street is quiet. You can almost hear Shiro in the garden.',pos:[-1.1,5.17,3.35],look:[-2.5,2.7,10],links:['bedroom'],map:[125,260]}
};
export const nodeNames={veranda:'Step onto the veranda',street:'Back to the street',gate:'Go to the gate',porch:'Walk to the front door',entry:'Step inside',hall:'Continue down the hall',living:'Enter the living room','living-window':'Walk by the window',dining:'Into the kitchen',kitchen:'Look around the kitchen',tatami:'Visit the tatami room',bath:'See the bathroom','garden-path':'Explore the garden',garden:'Meet Shiro','stairs-base':'↑ Go upstairs · 2F','stairs-mid':'Continue up the stairs',landing:'Step onto the 2F landing','upper-hall':'Along the upstairs hall',playroom:'Explore the playroom',bedroom:'Enter the family bedroom',balcony:'Step onto the balcony'};
export const routes={
'living>dining':[[.1,1.84,1.12],[-1.9,1.94,.1]],
'stairs-mid>landing':[[3.5,4.95,-1.85],[3.5,5.17,-2.3]],
'bedroom>balcony':[[.7,5.17,2.4],[-1.1,5.17,2.45]],
'entry>stairs-base':[[3.5,1.94,2.3]]
};
export function pathBetween(from,to){const direct=routes[from+'>'+to],reverse=routes[to+'>'+from];return direct||reverse?.slice().reverse()||[]}
export const mapRooms={1:[['kitchen',45,45,110,80,'KITCHEN'],['living',45,145,110,80,'LIVING'],['hall',175,105,50,120,'HALL'],['bath',175,45,50,40,'BATH'],['tatami',7,145,24,80,'和室'],['stairs-base',235,115,65,90,'↑ STAIRS']],2:[['playroom',45,45,145,75,'PLAYROOM'],['bedroom',45,140,145,85,'BEDROOM'],['landing',210,45,65,75,'LANDING'],['upper-hall',210,140,65,85,'HALL'],['balcony',75,245,100,30,'BALCONY']]};

export function destinationLabel(from,to){if(from==='landing'&&to==='stairs-mid')return '↓ Go downstairs · 1F';if(from==='stairs-mid'&&to==='stairs-base')return 'Continue down the stairs';if(from==='stairs-base'&&to==='entry')return 'Back to the entry';return nodeNames[to]}
