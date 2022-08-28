function generateText() {

const words = [
    'planetary',
    'intelligence',
    'systems',
    'international',
    'aesthetic',
    'pulse',
    'beat',
    'wave',
    'generation',
    'network',
    'electronic',
    'motion',
    'vibration',
    'synthesis',
    'fission',
    'fusion',
    'break',
    'core',
    'switch',
    'recursion',
    'transform',
    'transport',
    'transmission',
    'depth',
    'assemblage',
    'molecular',
    'rotate',
    'splice',
    'scale',
    'scalar',
    'topology',
    'vision',
    'polymer',
    'acid',
    'atomic',
    'vision',
    'sonic',
    'subterranean',
    'terrestrial',
    'inter',
    'intra',
    'drone',
    'auto',
    'proto',
    'technology',
    'phonic',
    'haptic',
    'automatic',
    'resistance',
    'amp',
    'observer',
    'perception',
    'conception',
    'meta',
    'material',
    'matter',
    'visitation',
    'energy',
    'break',
    'emergence',
    'infra',
    'cognition',
    'structure',
    'alliance',
    'coalition',
    'future',
    'mode',
    'artefact',
    'sensation',
    'exist',
    'exit',
    'enter',
    'repeat',
    'machinic',
    'unstable',
    'contingent',
    'vital',
    'circulate',
    'action',
    'particle',
    'solutions',
    'radical',
    'transmission',
    'collective',
    'micro',
    'macro',
    'reducer',
    'combinant',
    'function',
    'notion',
    'node',
    'modal',
    'infinite',
    'permutation',
    'experience',
    'nocturnal',
    'switch',
    'signal',
    'kinetic',
    'virtual',
    'value',
    'oneiric',
    'terminal',
    'affect',
    'effect',
    'access',
    'radial',
    'atmosphere',
    'hemisphere',
    'ion',
    'texture',
    'object',
    'floating',
    'schema',
    'synthesis',
    'synaptic',
    'animate',
    'arborescent',
    'fascial',
    'absent',
    'present',
    'hyperbolic',
    'power',
    'rapture',
    'punctum',
    'post',
    'edge',
    'filter',
    'user',
  ];
  
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  const shuffled = shuffle(words);
  return `${shuffled.pop()} ${shuffled.pop()}`;
}
  
  $('#generate').click(function(){
    console.log('clicked');
    // console.log(`${shuffled.pop()} ${shuffled.pop()}`);

    $('#disappearing').empty();
 $('#disappearing').append(generateText())
console.log('text');
  })
  