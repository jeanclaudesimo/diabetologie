import { FAQ } from '@/types';

export const faqs: FAQ[] = [
  // Allgemeine Fragen
  {
    id: 'was-ist-diabetes',
    question: 'Was ist Diabetes und welche Typen gibt es?',
    answer: 'Diabetes mellitus ist eine Stoffwechselerkrankung, bei der der Blutzuckerspiegel dauerhaft erhöht ist. Es gibt hauptsächlich zwei Typen: Typ-1-Diabetes ist eine Autoimmunerkrankung, bei der die Bauchspeicheldrüse kein Insulin mehr produziert. Typ-2-Diabetes entsteht meist durch Insulinresistenz und ist oft mit Übergewicht verbunden. Zusätzlich gibt es Schwangerschaftsdiabetes (Gestationsdiabetes), der während der Schwangerschaft auftritt.',
    category: 'general'
  },
  {
    id: 'symptome-diabetes',
    question: 'Welche Symptome hat Diabetes?',
    answer: 'Typische Symptome sind starker Durst, häufiges Wasserlassen, Müdigkeit, Gewichtsverlust, schlecht heilende Wunden und verschwommenes Sehen. Bei Typ-1-Diabetes treten die Symptome oft plötzlich auf, bei Typ-2-Diabetes entwickeln sie sich schleichend. Viele Menschen mit Typ-2-Diabetes haben anfangs keine Symptome.',
    category: 'general'
  },
  {
    id: 'hba1c-wert',
    question: 'Was bedeutet der HbA1c-Wert?',
    answer: 'Der HbA1c-Wert (Langzeitblutzucker) zeigt den durchschnittlichen Blutzuckerwert der letzten 8-12 Wochen. Er wird in Prozent oder mmol/mol angegeben. Bei Menschen ohne Diabetes liegt er unter 5,7% (39 mmol/mol). Bei Diabetes wird meist ein Zielwert von 6,5-7,5% (48-58 mmol/mol) angestrebt, abhängig von individuellen Faktoren.',
    category: 'general'
  },
  {
    id: 'diagnose-ablauf',
    question: 'Wie wird Diabetes diagnostiziert?',
    answer: 'Die Diagnose erfolgt durch Blutzuckermessungen. Nüchtern-Blutzucker über 126 mg/dl oder ein HbA1c über 6,5% (48 mmol/mol) weisen auf Diabetes hin. Zusätzlich kann ein oraler Glukosetoleranztest (oGTT) durchgeführt werden. Bei uns in der Praxis führen wir alle notwendigen Untersuchungen durch und besprechen ausführlich die Befunde mit Ihnen.',
    category: 'general'
  },

  // Behandlung
  {
    id: 'cgm-funktionsweise',
    question: 'Wie funktioniert ein CGM-System?',
    answer: 'Ein CGM-System (Kontinuierliches Glukose-Monitoring) misst über einen kleinen Sensor unter der Haut alle paar Minuten den Glukosewert im Unterhautfettgewebe. Die Werte werden an ein Empfangsgerät oder Smartphone übertragen. Sie sehen nicht nur den aktuellen Wert, sondern auch Trends (steigt/fällt der Zucker) und erhalten Warnungen bei zu hohen oder niedrigen Werten. Der Sensor wird alle 10-14 Tage gewechselt.',
    category: 'treatment'
  },
  {
    id: 'insulinpumpe-geeignet',
    question: 'Für wen ist eine Insulinpumpe geeignet?',
    answer: 'Eine Insulinpumpe eignet sich besonders für Menschen mit Typ-1-Diabetes, bei häufigen Unterzuckerungen, stark schwankenden Blutzuckerwerten oder dem Wunsch nach mehr Flexibilität im Alltag. Auch für Kinder und Schwangere ist eine Pumpe oft vorteilhaft. Voraussetzung ist die Bereitschaft, sich intensiv mit der Therapie auseinanderzusetzen. Wir beraten Sie gerne, ob eine Pumpentherapie für Sie sinnvoll ist.',
    category: 'treatment'
  },
  {
    id: 'schulung-dauer',
    question: 'Wie lange dauert eine Diabetes-Schulung?',
    answer: 'Eine Basis-Schulung umfasst in der Regel 5 Termine à 90 Minuten, verteilt über mehrere Wochen. Intensivierte Insulin-Schulungen können 4-5 Tage dauern. Insulinpumpen-Schulungen sind ebenfalls intensiver mit 3-5 Tagen. Die genaue Dauer hängt von der Therapieform und Ihren individuellen Bedürfnissen ab. Schulungen werden von den Krankenkassen übernommen.',
    category: 'treatment'
  },
  {
    id: 'medikamente-typ2',
    question: 'Welche Medikamente gibt es bei Typ-2-Diabetes?',
    answer: 'Neben Metformin als Basismedikament gibt es moderne Wirkstoffe wie SGLT-2-Hemmer und GLP-1-Agonisten, die nicht nur den Blutzucker senken, sondern auch Herz und Nieren schützen. Bei Bedarf können auch Insulin oder Kombinationen eingesetzt werden. Wir wählen die Medikamente individuell nach Ihren Bedürfnissen, Begleiterkrankungen und Zielen aus.',
    category: 'treatment'
  },

  // Praxis
  {
    id: 'ersttermin-ablauf',
    question: 'Wie läuft der erste Termin ab?',
    answer: 'Beim Ersttermin nehmen wir uns viel Zeit für Sie (ca. 45-60 Minuten). Wir besprechen Ihre Krankengeschichte, aktuelle Beschwerden und bisherige Behandlung. Dann führen wir eine körperliche Untersuchung durch und messen wichtige Werte wie HbA1c und Blutdruck. Anschließend erstellen wir gemeinsam einen individuellen Behandlungsplan und beantworten all Ihre Fragen.',
    category: 'practice'
  },
  {
    id: 'mitbringen-ersttermin',
    question: 'Was muss ich zum ersten Termin mitbringen?',
    answer: 'Bitte bringen Sie mit: Versichertenkarte, Überweisungsschein (falls vorhanden), aktuelle Medikamentenliste, Vorbefunde und Arztbriefe, Blutzucker-Tagebuch oder CGM-Daten falls vorhanden, Liste mit Fragen. Kommen Sie nüchtern zum Termin, damit wir Nüchtern-Blutzucker und andere Werte bestimmen können.',
    category: 'practice'
  },
  {
    id: 'wartezeit-termin',
    question: 'Wie lange sind die Wartezeiten auf einen Termin?',
    answer: 'Für Routinetermine bekommen Sie in der Regel innerhalb von 1-2 Wochen einen Termin. Notfalltermine bei akuten Problemen vergeben wir noch am selben oder nächsten Tag. Als Privatpatient oder Selbstzahler haben Sie oft noch kürzere Wartezeiten. Rufen Sie uns einfach an, wir finden eine Lösung.',
    category: 'practice'
  },
  {
    id: 'notfall-erreichbarkeit',
    question: 'Was mache ich bei einem diabetischen Notfall?',
    answer: 'Bei schwerer Unterzuckerung mit Bewusstlosigkeit oder sehr hohen Werten mit Erbrechen rufen Sie bitte den Notarzt (112). Bei weniger dringenden Problemen außerhalb der Sprechzeiten erreichen Sie uns über unsere Notfall-Hotline. Während der Sprechzeiten sind wir jederzeit telefonisch erreichbar. In unseren Schulungen lernen Sie, Notfälle zu erkennen und richtig zu handeln.',
    category: 'practice'
  },

  // Kosten
  {
    id: 'kosten-behandlung',
    question: 'Was kostet die Behandlung?',
    answer: 'Für gesetzlich Versicherte übernimmt die Krankenkasse alle Kosten der Diabetes-Behandlung, einschließlich Schulungen, CGM-Systeme (bei Indikation) und Insulinpumpen. Sie zahlen nur die gesetzlichen Rezeptgebühren für Medikamente und Hilfsmittel. Privatversicherte rechnen wir nach der Gebührenordnung für Ärzte (GOÄ) ab.',
    category: 'costs'
  },
  {
    id: 'cgm-kostenuebernahme',
    question: 'Übernimmt die Krankenkasse ein CGM-System?',
    answer: 'Ja, bei entsprechender Indikation übernehmen alle gesetzlichen Krankenkassen die Kosten für CGM-Systeme. Voraussetzungen sind meist: intensivierte Insulintherapie (mindestens 4x täglich spritzen) oder Insulinpumpe, und der Nachweis, dass die Blutzucker-Einstellung verbessert werden muss. Wir unterstützen Sie bei der Beantragung und Kommunikation mit Ihrer Krankenkasse.',
    category: 'costs'
  },
  {
    id: 'schulung-kosten',
    question: 'Muss ich für Schulungen bezahlen?',
    answer: 'Nein, strukturierte Diabetes-Schulungen werden von allen gesetzlichen Krankenkassen vollständig übernommen. Sie benötigen dafür keine Überweisung. Auch Auffrischungs-Schulungen und Angehörigen-Schulungen sind kostenfrei. Für Privatversicherte rechnen wir nach GOÄ ab, hier übernehmen die meisten Versicherungen die Kosten.',
    category: 'costs'
  },
  {
    id: 'hilfsmittel-zuzahlung',
    question: 'Wie hoch sind die Zuzahlungen für Hilfsmittel?',
    answer: 'Für Hilfsmittel wie Teststreifen, Lanzetten, Pens oder Pumpenzubehör zahlen Sie 10% des Preises, mindestens 5€ und maximal 10€ pro Verordnung. Bei chronischen Erkrankungen wie Diabetes gilt eine Belastungsgrenze von 1% des Bruttoeinkommens pro Jahr. Nach Erreichen dieser Grenze können Sie sich von Zuzahlungen befreien lassen.',
    category: 'costs'
  }
];
