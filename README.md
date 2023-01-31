## Odnośniki
* [Informacje](#informacje)
* [Routes](#routes)
* [Setup](#setup)

## informacje
System licencji, napisany w node.js.
Posiada informacje, takie jak:
id licencji, typ licencji, właściciel licencji, czas wygaśnięcia.
Dodatkowo dołączyłem przykładowy plik html, który pozwala na generowanie, oraz client, na sprawdzanie, czy licencja istnieje.
	
## routes
* /license/check/<licencja> - informacje o licencji
* /panel - generowanie licencji, sama licencja pojawia sie w konsoli
* /createlicense - tworzenie licencji (post)
	
## Setup
Aby to odpalić, należy pobrać node.js.

```
$ npm i
$ node .
```
