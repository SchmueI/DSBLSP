function translate_german(){

    /**
     * index.html
     */

    console.log(document.querySelector("#welcomeText") != null)
    if (document.querySelector("#textTitle") != null) document.getElementById("textTitle").innerHTML="Digitales Schwarzes Brett";
    if (document.querySelector("#welcomeText") != null) document.getElementById("welcomeText").innerHTML="Willkommen";
    if (document.querySelector("#introText") != null) document.getElementById("introText").innerHTML="Dies ist das DSB Dashboard. Du kannst die Software jetzt benutzen! Wenn Du Schwierigkeiten mit dem Start hast, schau Dir den \"Anleitung\" Bereich an. Keine Sorge, es ist sehr eifnach! " 
    if (document.querySelector("#Login-Head") != null) document.getElementById("Login-Head").innerHTML="Anmelden";
    if (document.querySelector("#Login-Explain") != null) document.getElementById("Login-Explain").innerHTML=""+
        "🔒&emsp;Um das DSB Dashboard benutzen zu können, musst du dich als Nutzer anmelden.<br>"+
        "🔑&emsp;Bitte gib die Daten ein, die dir dein Administrator zur Verfügung gestellt hat.<br>"+
		"🧙🏼‍♂️&emsp;Wenn du noch keine Zugangsdaten erhalten hast, oder deine Daten verlegt hast, wende dich an den Administrator.";
    if (document.querySelector("#username-label") != null) document.getElementById("username-label").innerHTML="Nutzername";
    if (document.querySelector("#usrname") != null) document.getElementById("usrname").placeholder="👤 Nutzername";
    if (document.querySelector("#password-label") != null) document.getElementById("password-label").innerHTML="Passwort";
    if (document.querySelector("#pssword") != null) document.getElementById("pssword").placeholder="🔑 Passwort";
    if (document.querySelector("#Login-Submit") != null) document.getElementById("Login-Submit").innerHTML="Anmelden"
    if (document.querySelector("#headText") != null) document.getElementById("headText").innerHTML="Live Übertragung";
    if (document.querySelector("#messageText") != null) document.getElementById("messageText").innerHTML="Nachricht";
    if (document.querySelector("#msg") != null) document.getElementById("msg").placeholder="Nachricht eingeben";
    if (document.querySelector("#durText") != null) document.getElementById("durText").innerHTML="Anzeigedauer";
    if (document.querySelector("#onedayText") != null) document.getElementById("onedayText").innerHTML="Einen Tag lang anzeigen";
    if (document.querySelector("#onehalfdayText") != null) document.getElementById("onehalfdayText").innerHTML="Anderthalb Tage lang anzeigen";
    if (document.querySelector("#twodaysText") != null) document.getElementById("twodaysText").innerHTML="Zwei Tage lang anzeigen";
    if (document.querySelector("#twohalfdayText") != null) document.getElementById("twohalfdayText").innerHTML="Zweieinhalb Tage lang anzeigen";
    if (document.querySelector("#threedayText") != null) document.getElementById("threedayText").innerHTML="Drei Tage lang anzeigen";
    if (document.querySelector("#weekText") != null) document.getElementById("weekText").innerHTML="Eine Woche lang anzeigen";
    if (document.querySelector("#sizeText") != null) document.getElementById("sizeText").innerHTML="Schriftgröße";
    if (document.querySelector("#normText") != null) document.getElementById("smallText").innerHTML="Klein";
    if (document.querySelector("#normText") != null) document.getElementById("normText").innerHTML="Normal";
    if (document.querySelector("#greatText") != null) document.getElementById("greatText").innerHTML="Groß";
    if (document.querySelector("#greatestText") != null) document.getElementById("greatestText").innerHTML="Überschrift";
    if (document.querySelector("#schedText") != null) document.getElementById("schedText").innerHTML="Planen";
    if (document.querySelector("#nowText") != null) document.getElementById("nowText").innerHTML="Jetzt senden";
    if (document.querySelector("#sched1hourText") != null) document.getElementById("sched1hourText").innerHTML="In einer Stunde senden";
    if (document.querySelector("#sched12hourText") != null) document.getElementById("sched12hourText").innerHTML="In zwölf Stunden senden";
    if (document.querySelector("#sched1dayText") != null) document.getElementById("sched1dayText").innerHTML="In einem Tag senden";
    if (document.querySelector("#sched2dayText") != null) document.getElementById("sched2dayText").innerHTML="In zwei Tagen senden";
    if (document.querySelector("#sched3dayText") != null) document.getElementById("sched3dayText").innerHTML="In drei Tagen senden";
    if (document.querySelector("#sched1weekText") != null) document.getElementById("sched1weekText").innerHTML="In einer Woche senden";
    if (document.querySelector("#sendText") != null) document.getElementById("sendText").innerHTML="Senden";
    if (document.querySelector("#advancedText") != null) document.getElementById("advancedText").innerHTML="Erweitert";
    if (document.querySelector("#timetableconfigText") != null) document.getElementById("timetableconfigText").innerHTML="Tagespläne konfigurieren"
    if (document.querySelector("#sundayText") != null) document.getElementById("sundayText").innerHTML="Sonntag";
    if (document.querySelector("#mondayText") != null) document.getElementById("mondayText").innerHTML="Montag";
    if (document.querySelector("#tuesdayText") != null) document.getElementById("tuesdayText").innerHTML="Dienstag";
    if (document.querySelector("#wednesdayText") != null) document.getElementById("wednesdayText").innerHTML="Mittwoch";
    if (document.querySelector("#thursdayText") != null) document.getElementById("thursdayText").innerHTML="Donnerstag";
    if (document.querySelector("#fridayText") != null) document.getElementById("fridayText").innerHTML="Freitag";
    if (document.querySelector("#saturdayText") != null) document.getElementById("saturdayText").innerHTML="Samstag";
    if (document.querySelector("#actionText") != null) document.getElementById("actionText").innerHTML="Erweiterte Funktionen";
    if (document.querySelector("#ereaseText") != null) document.getElementById("ereaseText").innerHTML="Alles löschen";
    if (document.querySelector("#ereaseDescText") != null) document.getElementById("ereaseDescText").innerHTML="Mit diesem Knopf wird die gesamte Tafel gesäubert.";
    if (document.querySelector("#deleteText") != null) document.getElementById("deleteText").innerHTML="Letzten Eintrag löschen";
    if (document.querySelector("#deleteDescText") != null) document.getElementById("deleteDescText").innerHTML="Mit diesem Knopf wird die zuletzt gesendete Nachricht gelöscht.";
    if (document.querySelector("#howtoText") != null) document.getElementById("howtoText").innerHTML="Anleitung";
    if (document.querySelector("#howdescText") != null) document.getElementById("howdescText").innerHTML=""+
        "👋&emsp;Willkommen beim Schwarzen Brett! Diese Software soll so einfach wie möglich sein. <br>"+
        "💌&emsp;Du hast eine Nachricht zu teilen? Super! Gib sie einfach ein und klick \"Senden\". <br>"+
		"👀&emsp;Die Mitteilung wird sofort für jeden zu sehen sein.<br>"+
		"🔧&emsp;Du kannst die Nachricht mit gedrückter Maustaste auf dem Bildschirm verschieben. <br>"+
		"🗑️&emsp;Mit einem Doppelklick werden Nachrichten wieder entfernt.<br>"+
		"📅&emsp;Wenn die Nachricht nicht manuell gelöscht wird, passiert das automatisch nach zwei Tagen.";
    if (document.querySelector("#startText") != null) document.getElementById("startText").innerHTML="🚀&emsp;Das wars! Du kannst sofort loslegen!";
    if (document.querySelector("#moreText") != null) document.getElementById("moreText").innerHTML="Du willst mehr?";
    if (document.querySelector("#moredescText") != null) document.getElementById("moredescText").innerHTML=""+
        "🤹&emsp;Wenn Du noch mehr Einstellungen willst, hab ich da was für dich: <br>"+
        "🦚&emsp;Klick einfach auf \"Erweitert\" unterhalb des Senden-Knopfes um alle Einstellungen zu sehen<br>"+
        "📚&emsp;Wenn Du Hilfe brauchst, schau Dir die folgenden Artikel an.";
    if (document.querySelector("#scheduleTitleText") != null) document.getElementById("scheduleTitleText").innerHTML="Nachrichten Planen";
    if (document.querySelector("#scheddescText") != null) document.getElementById("scheddescText").innerHTML="Dieser Artikel wird Dir zeigen, wie Du den Zeitraum deiner Nachrichten kontrollieren kannst.";
    if (document.querySelector("#learn1more") != null) document.getElementById("learn1more").innerHTML="Mehr erfahren";
    if (document.querySelector("#timetableTitleText") != null) document.getElementById("timetableTitleText").innerHTML="Tagespläne bearbeiten";
    if (document.querySelector("#timetabledescText") != null) document.getElementById("timetabledescText").innerHTML="Lerne wie Du die wöchentlichen Informationen des Tagesplans auf der rechten Seite bearbeitest.";
    if (document.querySelector("#learn2more") != null) document.getElementById("learn2more").innerHTML="Mehr erfahren";

    if (document.querySelector("#confsimple") != null) document.getElementById("confsimple").innerHTML="Die Konfiguration ist einfach.";
    if (document.querySelector("#redMoreSched") != null) document.getElementById("redMoreSched").innerHTML="Mehr lesen oder zurück zum Dashboard";
    if (document.querySelector("#b2d") != null) document.getElementById("b2d").innerHTML="Zurück zum Dashboard.";
    if (document.querySelector("#b2dText") != null) document.getElementById("b2dText").innerHTML="Klick hier, um zurück zur DSB Software zu gelangen und Eingaben vorzunehmen.";
    if (document.querySelector("#b2dLink") != null) document.getElementById("b2dLink").innerHTML="Zurück zum Dashboard.";

    /**
     * schedule.html
     */
    if (document.querySelector("#schedTitle") != null) document.getElementById("schedTitle").innerHTML="DSB | Planen von Nachrichten";
    if (document.querySelector("#headSched") != null) document.getElementById("headSched").innerHTML="Wie man Nachrichten plant";
    if (document.querySelector("#descSched") != null) document.getElementById("descSched").innerHTML="Wähle wann und für wie lang Nachrichten angezeigt werden.";
    if (document.querySelector("#howSched") != null) document.getElementById("howSched").innerHTML=""+
        "💌&emsp;Schreibe eine hübsche Nachricht, die Du teilen willst. <br>"+
        "👀&emsp;Finde den \"Erweitert\" link unter dem \"Senden\" Knopf. <br>"+
		"🔧&emsp;Dir wird die Standard-Einstellung angezeigt.";
    if (document.querySelector("#chDurTitle") != null) document.getElementById("chDurTitle").innerHTML="Die Anzeigedauer einer Nachricht ändern";
    if (document.querySelector("#chDur") != null) document.getElementById("chDur").innerHTML=""+
        "👷🏼‍♂️&emsp;Wenn du die Anzeigedauer deiner Nachricht ändern möchtest,<br>"+
        "🔧&emsp;Dann klick auf das Auswahlmenü direkt unter dem Label \"Anzeigedauer\"<br>"+
		"🎣&emsp;Such dir aus den Auswahloptionen die Dauer aus, die dir am besten passt.<br>"+
		"🚀&emsp;Das wars! Wenn du auf Senden klickst, wird die Nachricht mit neuer Anzeigedauer verschickt.<br>"+
		"<br>"+
		"🤹&emsp;Du kannst den Effekt natürlich mit anderen Effekten kombinieren!";
    if (document.querySelector("#chDateTitle") != null) document.getElementById("chDateTitle").innerHTML="Das Datum deiner Nachricht ändern";
    if (document.querySelector("#chDate") != null) document.getElementById("chDate").innerHTML=""+
        "👷🏼‍♂️&emsp;Wenn du eine Nachricht planen möchtest, sodass sie später angezeigt wird<br>"+
        "🔧&emsp;Dann klick auf das Auswahlmenü direkt unter dem Label \"Planen\"<br>"+
		"🎣&emsp;Such dir aus den Auswahloptionen den Zeitpunkt aus, der dir am besten passt.<br>"+
		"🚀&emsp;Das wars! Wenn du auf Senden klickst, wird die Nachricht am gewünschten Datum angezeigt.<br>"+
		"<br>"+
		"🤹&emsp;Du kannst den Effekt natürlich mit anderen Effekten kombinieren!";
    if (document.querySelector("#redMoreSchedText") != null) document.getElementById("redMoreSchedText").innerHTML="Nun hast du gelernt, wie du Nachrichten planen kannst! Wenn du noch Fragen hast, wende dich an deinen Administrator. Du kannst jetzt entweder zurück zum Dashboard gehen und dein neues Wissen anwenden, oder etwas über das Benutzen des Stundenplans lernen.";
    
    /**
     * timetable.html
     */

    if (document.querySelector("#timeTitle") != null) document.getElementById("timeTitle").innerHTML="DSB | Tagesplan bearbeiten";
    if (document.querySelector("#headTime") != null) document.getElementById("headTime").innerHTML="Tagespläne";
    if (document.querySelector("#descTime") != null) document.getElementById("descTime").innerHTML="Wie man die wöchentlichen Einträge des Tagesplans auf der rechten Seite bearbeitet.";
    if (document.querySelector("#howTime") != null) document.getElementById("howTime").innerHTML=""+
        "👀&emsp;Finde den \"Erweitert\" link unter dem \"Senden\" Knopf. <br>"+
		"🔎&emsp;Nachdem du auf \"Erweitert\" geklickt hast, siehst du den  \"Tagespläne konfigurieren\" Link";
    if (document.querySelector("#chTime") != null) document.getElementById("chTime").innerHTML="Die Tagespläne bearbeiten";
    if (document.querySelector("#chTimeDesc") != null) document.getElementById("chTimeDesc").innerHTML=""+
        "👨🏼‍🔬&emsp;Nun siehst du die gesamte Woche aufgeschlüsselt nach Wochentagen in einer tabellarischen Liste.<br>"+
        "🔧&emsp;Du kannst jedes Eingabefeld nach deinen Wünschen bearbeiten.<br>"+
		"🖌&emsp;Achte dabei auf die korrekte Syntax! Die beiden Zellen einer Spalte werden mit einem Komma getrennt.<br>"+
		"👮🏼‍♂️&emsp;Folglich kannst du im Text einer Zelle kein Komma benutzen.<br>"+
        "<br>"+
		"🚀&emsp;Das wars! Deine Änderungen werden bereits beim Schreiben übernommen<br>";
    if (document.querySelector("#redMoreTimeText") != null) document.getElementById("redMoreTimeText").innerHTML="Nun hast du gelernt, wie du die Tagespläne benutzt! Wenn du noch Fragen hast, wende dich an deinen Administrator. Du kannst jetzt entweder zurück zum Dashboard gehen und dein neues Wissen anwenden, oder etwas über das Planen von Nachrichten lernen.";

}
