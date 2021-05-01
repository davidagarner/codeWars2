// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// howManyLightsabersDoYouOwn("anyone else") === 0
// howManyLightsabersDoYouOwn("Zach") === 18
// howManyLightsabersDoYouOwn() === 0

///////////// Solution //////////////

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
  }

