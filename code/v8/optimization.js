// shape a 
let a= {x : 34}

//shape b
let b1 = { x: 10, y: 10}
let b2 = { x: 5, y: 30}
// ovde nema potrebe da se pravi novo mesto u memoriji za shape b2, moze da se iskoristi shape  od b1 samo sa drugim vrednostima

// shape c
b2.z = 1


/////////////////////////////////////////

function load(a) {
    return a.key
}

let first = {key:'first'}
let iAmFastBeacuseIhaveSameStructureAsFirst = {key: 'second'}
let iAmSlowBecauseIHaveNewStructureWithFooKey = { foo: 'slow'}

load(first)
load(iAmFastBeacuseIhaveSameStructureAsFirst)
load(iAmSlowBecauseIHaveNewStructureWithFooKey)

///////////////////////////////////////////

function add(a, b) {
    return a + b
}

add(3,3)
add(4,5)
// ovde ce IC (inline cache) izgledati ovako jer imamo istu strukturu i tipove [{ slot: 0, icType: LOAD, value: MONO(I) }]
// ovde moze da uleti optimizujuci kompajler i da pretpostavi da svi tipovi uvek biti int

add(4, "somethingNew")
// buduci da string nismo imali, dodajemo u polje za moguce vrednosti [{ slot: 0, icType: LOAD, value: POLY[I,S] }]
// ovde cemo morati da deoptimizujemo kod ako smo to uradili u prethodnom koraku, na ovom mestu gubimo na performansama
