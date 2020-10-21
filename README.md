# CalliopeBlumentopf
Calliope Mini Feuchtigkeitsmessung im Blumentopf

## Zutaten
 Du brauchst
* Calliope Mini
* Zwei kleine Kabel oder Drähte mit oder ohne Krokodilsklemmen
* Zwei Büroklammern
* Blumentopf (oder Becher, Glas, ...)
* Wasser

## Feuchtigkeit messen mit Strom
Mit dem Calliope kannst du super Feuchtigkeit von Erde messen. Wasser leitet Strom. Deswegen leitet auch nasse Erde Strom.
Trockene Erde nicht. Je nasser die Erde ist, um so mehr Strom kommt durch. Ist die Erde nur noch ganz leicht feucht, fließt nur ganz wenig Strom.

## Strom Messen mit dem Calliope Mini
Mit der Calliope Mini hat Anschlüsse, aus denen Strom fließt. Die Ecke, die mit + beschriftet ist zum Beispiel. Und der Calliope kann Strom messen. Zum Beispiel mit der Ecke, die mit 1 beschriftet ist.
Für den Computer ist Strom die die Stimme bei uns Menschen. Wir reden mit Tönen, Computer reden mit Strom. Und beim Strom gibt es gibt zwei Sprachen: Einmal kann man mit dem Strom mit an aus Signale geben. So ähnlich wie mit der Taschenlampe. Also AN und AUS.
Das nennt man digitale Kommunikation. Die Andere Art, wie man mit dem Computer sprechen kann, ist, wenn man am Strom die Spannung hoch und runter dreht. Die SPannung von Strom ist sowas die der Druck, mit dem Wasser aus dem Wassserhahn kommt. Indem man die Spannung hoch und runter dreht, kann man zum Beispiel Lampen heller und dunkler machen kann. Das diese Sprache nennt man analog.
Und mit [lese analogen Wert von Pin 1] kann der Calliope nachschauen, wie hoch die Spannung des angeschlossenen Stroms an P1 ist.

### Schon gewusst? Wie Computer mit 10 Fingern bis 1023 zählen können
Computer rechnen mit 1 und 0. Aber warum? Naja, du glaubst dass du mit deinen FIngern nur bis 10 zählen kannst?
Falsch! Du kannst mit 10 Fingern bis 1023 zählen. Und das geht so. Der erste Finger ist die 1. Jeder weitere Finger doppelt so viel wie der rechte Nachbar.
Also: 1 2 4 8 16 | 32 64 128 256 512. Bei einer 9 ist also der Finger 1 (kleiner Finger) und der Finger 8 (Zeigefinger) oben. 15 zählt man mit einer 8, einer 4, einer 2 und einer 1. Hier ist das toll erklärt. https://www.ardmediathek.de/tv/Die-Sendung-mit-der-Maus/Bis-1023-z%C3%A4hlen/Das-Erste/Video?bcastId=1458&documentId=39728814
Und weil ein Computer sich nummern mit Schaltern merkt, kann man sich mit dieser Binären art zu zählen mit
weniger Schaltern viel mehr merken. Wäre ja schlimm, wenn wir 1023 Finger bräuchten, um bis 1023 zu zählen. Jetzt weist du, warum Computer binär (Zweiersystem), also mit 1 und 0 rechnen und nicht im Zehnersystem (Decimalsystem) wie wir Menschen.

### Schon gewusst: 3,3 Volt sind 1023
Der Calliope Mini kann auf Pins einen Strom mit einer Spannung von 3,3 Volt. Der Calliope Mini hat einen Wandler, mit dem er Spannung (analoges Signal) messen und in die digitale Computersprache übersetzen kann. Der analog digital Wandler hat 10 Bit mit dem er zählen kann. Wie unsere zehnFfinger. ALso sind 0 Volt auch 0. Und 3,3 Volt, die höchste Zahl ist 1023, die höchste Zahl, die man mit 10 Bit (Fingern) rechnen kann. Wenn der A/D Wandler 511 anzeige (etwa die Hälfte von 1023), dann hat er eine Spannung von ca 1,5 Volt (die Hälfte von 3,3 Volt gemessen). Jetzt weißt du, warum der Calliope Mini bei lese analoge Werte irgendwas zwischen 0 und 1023 anzeigt.

## So baust du den Blumentopf

1. Eins der beiden Kabel schließt du an die Ecke 1 (Pin 1) und das anderen an Ecke 0  (Pin 0) deines Calliope an. Indem du die Drahtlitze durch das Loch fädelst und drumwickelst, mit Krokodilsklemmen, wenn dein Kabel welche hat, oder mit etwas Tesafilm die Drahtlitze drauf festkleben.
2. An das Ende der Kabel machst du jeweils eine Büroklammer. So berührt viel Metall die Erde
3. Jetzt steckst du beide Kabelenden mit den Büroklammern in die Erde. Schön weit auseinander.

## Die Programmierung
Wir programmieren mit dem Editor unter http://makecode.calliope.cc

Das wollen wir jetzt programmieren:
1. Auf Pin 2 soll jetzt Strom angemacht werden. Das findest du im Menü Pins unter FOrtgeschritten: [Schreibe digitale Werte von P0 auf 1]. Wie du oben gelernt hast, sind digitale Werte Strom, der an oder aus ist. Und mit 1 schreiben ist einschalten gemeint. Stromsprache halt. ! bedeutet an, 0 bedeutet aus. Wenn die Erde im Topf feucht ist, fließt jetzt Strom im Topf. Keine ANgst, das schadet der Plfanze nicht. Dafür ist der Strom viel zu klein. 
2. Jetzt wollen wir mit Pin 1 messen, wie viel Strom denn durch die Erde von einer Büroklammer zur anderen ankommt. Das geht mit [lese analogen Wert von P1]. Das Ergebnis kannst du dir anzeigen lassen mit [zeige nummer], dass du unter Grundlagen findest.

## Ab welchem Wert ist die Erde zu trocken?

Gute Frage. Das musst du ausprobieren. Mache einen Test mit trockener Erde und träufle Wasser darauf, bis du die Feuchtigkeit für gut befindest. Und dann miss mit dem Calliope nach.
Jetzt kannst du unter Logik einen Wenn Dann Sonst Block nehmen. Nehmen wir an, du hättest 500 gemessen. Wenn die Feuchtigkeit, also der analoge Wert [lese analogen Wert von P1] größer ist als 500, dann zeige einen lachenden Smiley. Sonst zeige einen weinenden Smiley.
Jetzt verstehst du den fertigen Code.

## Der fertige Code
https://makecode.com/_amkeigFe68h2
