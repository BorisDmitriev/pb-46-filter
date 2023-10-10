# Array Methode .filter

- Arbeite in der bereitgestellten Datei `index.js`.
#### 1. Schreibe eine Funktion `filterRange(arr, a, b)`, die ein Array `arr` annimmt, nach Elementen mit Werten größer oder gleich `a` und kleiner oder gleich `b` sucht und ein Array zurückgibt, das nur passende Werte enthält.

* Die Funktion sollte das Array nicht verändern. Sie sollte ein neues Array zurückgeben.

Zum Beispiel:
```js
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (passende Werte)

console.log( arr ); // 5,3,8,1 (nicht verändert)
```

#### 2. Schreibe eine Funktion `filterRangeInPlace(arr, a, b)`, die ein Array `arr` erhält und daraus alle Werte außer denen entfernt, die zwischen `a` und `b` liegen. Der Test lautet: a ≤ arr[i] ≤ b.

* Die Funktion sollte nur das ursprüngliche Array verändern. Sie sollte nichts zurückgeben. (Hinweis: Hier nicht filter benutzen, sondern "von Hand" lösen.)

Zum Beispiel:
```js
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // entfernt alle Zahlen außer 1 bis 4

console.log( arr ); // [3, 1]
```
