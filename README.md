# Galician Syllabler v0.0.1
Split galician language words into syllables.

# Usage

```js
const syl = require('gl-syllabler');

syl('palabra');
```

The result should be:

```js
{ syllables: [ 'pa', 'la', 'bra' ],
  totalSyllables: 3,
  positions: [ 0, 2, 4 ],
  tonicSyllable: 1,
  stress: '0/1/0' }
```


# License

Port and adaptation by Berto Yáñez <berto@ber.to>

This is a port to Javascript of "Separador de Sílabas del Español" adapted to galician.

Hernández-Figueroa, Z; Rodríguez-Rodríguez, G; Carreras-Riudavets, F (2009).
Separador de sílabas del español - Silabeador TIP.
Available at http://tip.dis.ulpgc.es