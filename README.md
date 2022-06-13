(German Text Below)
# DSBLSP
The DSBLSP is a open source project for an digital information display for schools or companies. There are a few other open and closed source solutions for this use but most of them offer more functions then actually needed.
Especially in schools most co-workes won't have enough time to learn how to work with a new digital tool. As its main function is to replace a physical blackboard and to be accessible from different devices, there is no reason to make it more complicated.
As the development continues, there will be detailed information on how to install and how to configure this software for your own use. However, this software was made for the german state school of Pforta (Landesschule Pforta) and may be ready to use in the WIP release.

Please note, that this software is in a very early development state. There is no guarantee for this software to be stable or secure. Use at own risk.
It is highly recomended to only use this or later versions of the software if you or your network admin has basic skills with NodeJS and a basic knowledge of web development. Please take a look at the source code to make sure if the program suites your needs of security.

## About
If you are running a company or a school, you should know the issues of sharing information in real-time with many people.
You can rely on channels or groups of different messengers. But you will soon have the problem of either low security standards
or legal problems, if you are restricted to use only own servers. Also it might be necessary to restrict your software
from being accessable in the world wide web. In other words: You need a software to provide a digital informational monitor
or display service.
![Demo for real-time processing](https://github.com/SchmueI/DSBLSP/demos/rtp.gif)
As you can see, this software is easy to use. With its native-like drag and drop system. Even people who are not used to use
modern technology would be able to use this Software in no time!

## Clone and run your own instance
The DSBLSP software was made for the german state school of Pforta (Landesschule Pforta). There might be different reasons to clone and use this server in an own instance.
All the Node.JS modules used to run this program come packed in this repo. So the only thing you have to do is to run `git clone https://github.com/SchmueI/DSBLSP` to clone the code
running the server works by using `node app.js` voilá! Your server is now running on port 2000 and can be reached in your browser by opening http://localhost:2000/
If you want to see the monitor, open http://localhost:2000/client/monitor.html

### Using the DSB Dashboard
When you are running the server and open the app in your browser (e.g. by opening http://localhost:2000/) you will see that there is a login prompt. You can use the following
credentials to access the DSB Software:  
Username: odradek  
Password: ODRADEK  
If you want to use this software not only for testing but in a real life environment, you should definetly define own credentials for the DSB software.
This can be currently done by changing the modules/users.js file. In any case you should be aware of the fact, that this software is a WIP product.
It is tested for the purpose to be run in a single school and has yet not the stability to be run in other use cases. Tho, I am pretty confident
that this software would run smoothly at any place. But use it on your own risk.

## License
Copyright (C) 2022  Schmuel Odradek  
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; version 3.
DSBLSP is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

# Deutsch (German Desctipion)
Das DSBLSP (Digitale Schwarze Brett der Landesschule Pforta) ist ein Projekt um digitale Informationstafeln für Schulen und Unternehmen anzubieten. Es gibt bereits vergleichbare Projekte, sowohl OpenSource als auch ClosedSource, jedoch bieten diese meist einen viel zu großen Funktionsumfang.
Besonders an Schulen gibt es häufiger das Problem, dass die Kollegen nicht die nötige Zeit und Energie aufbringen (können), um neue digitale Hilfsmittel zu meistern. Ein digitales Schwarzes Brett hat jedoch die Hauptfunktion, physische Tafeln zu ersetzen und die Information auf mehreren Geräten anzuzeigen. Es gibt keinen Grund, den Funktionsumfang künstlich auszudehnen.
Im Laufe der Entwicklung dieses Projektes werden sich hier Anleitungen zur Installation und Verwendung der Software finden. Dieses Programm wurde speziell für die Landesschule Pforta angefertigt, weshalb spätere Design-Entscheidungen bereits in Entwicklungsversionen darauf angepasst sein werden.

Bitte beachten Sie, dass diese Software in einem sehr frühen Entwicklungsstadium ist. Es gibt keine Garantie dafür, dass dieses Programm stabil und/oder sicher läuft. Nutzen Sie diese und spätere Versionen nur auf eigenes Risiko.
Es wird sehr empfohlen, die aktuelle oder neuere Version nur dann zu installieren, wenn Sie oder die von Ihnen beauftragte Person mit NodeJS und Web-Grundlagen vertraut ist. Bitte schauen Sie sich den Quellcode an und prüfen Sie eigenverantwortlich ob er Ihren Sicherheitsanforderungen entspricht.

## Klonen und eigene Instanz starten
Diese Software wurde speziell für die staatliche Landesschule Pforta in Sachsen-Anhalt entwickelt. Es mag dennoch verschiedene Gründe geben, dieses Projekt zu klonen und zu testen.
Alle Node.JS Module sind Teil dieses Repos. Du kannst deshalb mittels `git clone https://github.com/SchmueI/DSBLSP` den gesamten Server- und Client-Code klonen und hast ein lauffähiges
System vorliegen. Den Server kannst du entsprechend mit `node app.js` starten und voilá: Dein eigener Server läuft nun auf Port 2000 du kannst das Dashboard beispielsweise mittels http://localhost:2000/
öffnen. Den Monitor siehst du unter http://localhost:2000/client/monitor.html

### Das DSB Dashboard nutzen
Wenn du deinen eigenen Server startest und die App in deinem Browser beispielsweise auf http://loclahost:2000/ öffnest, siehst du ein Login-Fenster.
Du kannst die folgenden Zugangsdaten nutzen:   
Username: odradek  
Password: ODRADEK  
Solltest du diese Software nicht nur zum Testen benutzen, sondern in einer Lebensechten Umgebung einsetzen, dann empfehle ich dringend, eigene
Zugangsdaten zu definieren. Dies kannst du tun, indem du die modules/users.js Datei abänderst. In jedem Fall solltest du dir aber darüber bewusst
sein, dass diese Software ein Work-in-Progress Produkt ist. Sie ist auf die Landesschule Pforta zugeschnitten und funktioniert in diesem Anwendungs-Szenario
auch sehr gut. Eine Stabilität in anderen Fällen wurde noch nicht getestet. Ich bin zwar zuversichtlich, dass die Software auch in anderen Situationen
gut funktioniert, aber nutze sie trotzdem mit Vorsicht und auf eigenes Risiko.

## Lizenz
Copyright (C) 2022  Schmuel Odradek  
Diese Anwendung ist als freie Software herausgegeben: Jeder kann sie selbst veröffentlichen 
und dabei Veränderungen vornehmen, solang er sich an die Richtlinien der 
GNU General Public License hält. Diese Richtlinien werden durch die Free Software Stiftung herausgegeben 
und müssen entwededer Version 3 oder einer (aktuelleren) höheren Version entsprechen. 
Diese Anwendungen wird veröffentlicht in der Hoffnung, dass sie nützlich ist.  Jedoch wird KEINE GARANTIE übernommen - 
es wird auch nicht garantiert dass diese Anwendung MARKTREIF oder ANGEPASST AUF EINEN ZWECK ist. 
Weitere Infos hier unter <a href='https://www.gnu.org/licenses/gpl-3.0.de.html'>GNU General Public License</a>