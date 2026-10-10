(() => {
  const STORAGE_KEY = "aep-language";
  const de = {
  "Five shared-footprint levels: Publish Contract, Control Plane, peer Identity / Policy and Delivery adapters, Artifact Store, Experience Edge. The stack groups responsibilities; explicit dependency paths below distinguish actual relationships from spatial order. Surface details represent creator intent, ownership/lifetime/lifecycle, peer adapters, deployable artifacts and isolated origins.": "Fünf Ebenen mit gemeinsamer Grundfläche: Publish Contract, Control Plane, gleichrangige Identity-/Policy- und Delivery-Adapter, Artifact Store, Experience Edge. Der Stack gruppiert Verantwortlichkeiten; explizite Abhängigkeitspfade darunter unterscheiden tatsächliche Beziehungen von der räumlichen Ordnung. Flächendetails zeigen Creator-Intent, Ownership/Lifetime/Lifecycle, gleichrangige Adapter, auslieferbare Artefakte und isolierte Origins.",
  "ownership · lifetime · lifecycle": "Ownership · Lifetime · Lifecycle",
  "Inspect the platform": "Plattform inspizieren",
  "Assemble": "Zusammenführen",
  "Expand layers": "Ebenen auffächern",
  "One assembled platform": "Eine zusammengehörige Plattform",
  "Expand to inspect responsibilities.": "Auffächern, um Verantwortlichkeiten zu prüfen.",
  "Responsibility stack": "Verantwortungs-Stack",
  "Architecture view": "Architekturansicht",
  "View": "Ansicht",
  "Linear": "Linear",
  "Spatial": "Räumlich",
  "Pan to inspect the full stack · pinch to zoom": "Wischen, um den ganzen Stack zu erkunden · zum Zoomen aufziehen",
  "Shared adapter level": "Gemeinsame Adapter-Ebene",
  "Reference architecture responsibility stack": "Verantwortungs-Stack der Referenzarchitektur",
  "One platform · five responsibility levels": "Eine Plattform · fünf Verantwortungsebenen",
  "Identity / Policy · Delivery": "Identität / Policy · Delivery",
  "trusted enforcement · artifact activation": "Vertrauenswürdige Durchsetzung · Artefakt-Aktivierung",
  "immutable deployable output": "Unveränderbares auslieferbares Artefakt",
  "Actual relationships": "Tatsächliche Beziehungen",
  "Stack order is not call order.": "Stapelordnung ist keine Aufrufreihenfolge.",
  "Clients → Publish Contract → Control Plane": "Clients → Publish Contract → Control Plane",
  "Control Plane → Identity / Policy + Delivery": "Control Plane → Identität / Policy + Delivery",
  "Delivery → Artifact Store → Experience Edge": "Delivery → Artifact Store → Experience Edge",
  "Identity / Policy → Experience Edge": "Identität / Policy → Experience Edge",
  "Experience Edge → isolated origins": "Experience Edge → isolierte Origins",
  "Five shared-footprint levels: Publish Contract, Control Plane, peer Identity / Policy and Delivery adapters, Artifact Store, Experience Edge. The stack groups responsibilities; explicit dependency paths below distinguish actual relationships from spatial order.": "Fünf Ebenen mit gemeinsamer Grundfläche: Publish Contract, Control Plane, gleichrangige Identity-/Policy- und Delivery-Adapter, Artifact Store, Experience Edge. Der Stack gruppiert Verantwortlichkeiten; explizite Abhängigkeitspfade darunter unterscheiden tatsächliche Beziehungen von der räumlichen Ordnung.",

  "Agentic Experience Platform — Concept Experience": "Agentic Experience Platform — Konzept-Experience",
  "Skip to content": "Zum Inhalt springen",
  "Language": "Sprache",
  "English": "Englisch",
  "View controls": "Ansichtssteuerung",
  "One more thing: Nerd Shit Internals": "Noch eine Sache: Nerd Shit Internals",
  "Previous chapter": "Vorheriges Kapitel",
  "Next chapter": "Nächstes Kapitel",
  "Concept experience · v0.5": "Konzept-Experience · v0.5",
  "Software got fast.": "Software wurde schnell.",
  "Enterprise delivery didn’t.": "Enterprise Delivery nicht.",
  "Small internal software can now be created in minutes. Publishing it safely still often triggers the machinery of a long-lived enterprise application.": "Kleine interne Software lässt sich heute in Minuten erstellen. Sie sicher zu veröffentlichen, setzt trotzdem oft noch die Maschinerie einer langlebigen Enterprise-Anwendung in Gang.",
  "See the fast lane": "Fast Lane ansehen",
  "Under the hood": "Unter die Haube",
  "Creation versus enterprise bootstrap": "Erstellung versus Enterprise-Bootstrap",
  "Create useful software": "Nützliche Software bauen",
  "AI-assisted coding": "KI-unterstütztes Coding",
  "minutes": "Minuten",
  "Make it enterprise-reachable": "Im Enterprise erreichbar machen",
  "identity · hosting · routing · lifecycle · governance": "Identität · Hosting · Routing · Lifecycle · Governance",
  "too much bootstrap": "zu viel Bootstrap",
  "Question": "Frage",
  "What if publishing became almost as cheap as creating?": "Was, wenn Publishing fast so günstig würde wie das Erstellen?",
  "01 · The fast lane": "01 · Die Fast Lane",
  "Local idea → protected internal URL": "Lokale Idee → geschützte interne URL",
  "One small intent. The platform absorbs the repeated enterprise bootstrap.": "Ein kleiner Intent. Die Plattform absorbiert den wiederkehrenden Enterprise-Bootstrap.",
  "Publish path": "Publish-Pfad",
  "scroll to follow →": "scrollen, um zu folgen →",
  "Build": "Bauen",
  "artifact or generated UI": "Artefakt oder generierte UI",
  "Package": "Paketieren",
  "deployable artifact": "auslieferbares Artefakt",
  "one governed action": "eine gesteuerte Aktion",
  "Protect": "Schützen",
  "identity · audience · isolation": "Identität · Zielgruppe · Isolation",
  "Return": "Zurückgeben",
  "URL · owner · TTL": "URL · Owner · TTL",
  "publish intent": "Publish-Intent",
  "› “Publish this app for my team for the next 30 days.”": "› „Veröffentliche diese App für die nächsten 30 Tage für mein Team.“",
  "✓ Team access is covered.": "✓ Teamzugriff ist abgedeckt.",
  "✓ It will expire in 30 days.": "✓ Sie läuft in 30 Tagen ab.",
  "✓ Protected preview is ready.": "✓ Geschützte Preview ist bereit.",
  "Creator intent stays tiny.": "Der Creator-Intent bleibt winzig.",
  "Who owns it? Who can see it? How long should it live? Infrastructure detail stays behind the platform boundary.": "Wem gehört sie? Wer darf sie sehen? Wie lange soll sie leben? Infrastrukturdetails bleiben hinter der Plattformgrenze.",
  "Nerd depth": "Nerd-Tiefe",
  "CLI, MCP and portal should invoke the same deterministic publish action. The agent never needs raw production credentials.": "CLI, MCP und Portal sollen dieselbe deterministische Publish-Aktion aufrufen. Der Agent braucht nie rohe Produktions-Credentials.",
  "02 · Use-case view": "02 · Use-Case-Ansicht",
  "People ask. The platform does.": "Menschen fragen. Die Plattform erledigt.",
  "The happy path is self-service. The platform operator should not sit in the middle.": "Der Happy Path ist Self-Service. Der Plattform-Operator soll nicht dazwischen sitzen.",
  "Use-case diagram": "Use-Case-Diagramm",
  "actors → capabilities": "Akteure → Capabilities",
  "Platform use-case diagram": "Plattform-Use-Case-Diagramm",
  "Creators, agents, team users and service owners connect to publish, preview, share, extend, retire, promote and later assurance use cases.": "Creator, Agents, Teamnutzer und Service Owner verbinden sich mit Publish, Preview, Share, Extend, Retire, Promote und späteren Assurance-Use-Cases.",
  "SELF-SERVICE PLATFORM BOUNDARY": "SELF-SERVICE-PLATTFORMGRENZE",
  "creator": "Creator",
  "coding agent": "Coding-Agent",
  "team user": "Teamnutzer",
  "service owner": "Service Owner",
  "publish experience": "Experience veröffentlichen",
  "preview + share": "Preview + Teilen",
  "extend / retire": "Verlängern / Beenden",
  "Hypothesis": "Hypothese",
  "Later": "Später",
  "compose experience": "Experience komponieren",
  "validate / register": "Validieren / Registrieren",
  "operator maintains the platform — routine publish / share / retire stays self-service": "Der Operator wartet die Plattform — Routine-Publish / Share / Retire bleibt Self-Service",
  "03 · Graduation, not a conveyor belt": "03 · Graduation, kein Fließband",
  "Start small. Keep every outcome open.": "Klein starten. Jeden Ausgang offenhalten.",
  "policy": "Policy",
  "artifact → protected URL": "Artefakt → geschützte URL",
  "Creators and coding agents publish, preview, extend or retire. Coding agents may compose experiences. Team users preview and share. Service owners promote and later validate or register.": "Creator und Coding-Agenten veröffentlichen, inspizieren, verlängern oder beenden. Coding-Agenten können Experiences komponieren. Teamnutzer nutzen Preview und Teilen. Service Owner promovieren und können später validieren oder registrieren.",
  "Stay, iterate, retire or graduate. Every stage can be a valid destination.": "Bleiben, iterieren, beenden oder graduieren. Jede Stufe kann ein gültiges Ziel sein.",
  "Activity / graduation map": "Aktivitäts- / Graduation-Map",
  "yes / no / loop branches": "Ja / Nein / Loop-Verzweigungen",
  "Non-linear graduation map": "Nichtlineare Graduation-Map",
  "An idea can explore, retire, remain shared, remain operational, validate when needed, or become an enterprise service. Loops support iteration at each stage.": "Eine Idee kann explorieren, auslaufen, geteilt bleiben, operativ bleiben, bei Bedarf validieren oder zu einem Enterprise Service werden. Loops unterstützen Iteration auf jeder Stufe.",
  "Idea": "Idee",
  "worth trying": "einen Versuch wert",
  "publish · learn": "publishen · lernen",
  "recurring": "wiederkehrender",
  "value?": "Wert?",
  "owner · audience": "Owner · Zielgruppe",
  "operational": "operative",
  "dependency?": "Abhängigkeit?",
  "monitor · recover": "überwachen · wiederherstellen",
  "required?": "erforderlich?",
  "yes": "ja",
  "no recurring value": "kein wiederkehrender Wert",
  "no": "nein",
  "Stay shared": "Geteilt bleiben",
  "useful, not operational": "nützlich, nicht operativ",
  "Stay operational": "Operativ bleiben",
  "assurance not required": "Assurance nicht erforderlich",
  "CONDITIONAL": "BEDINGT",
  "evidence · gaps": "Evidenz · Lücken",
  "DURABLE": "DAUERHAFT",
  "register · integrate": "registrieren · integrieren",
  "iterate": "iterieren",
  "improve": "verbessern",
  "change safely": "sicher ändern",
  "close gap": "Lücke schließen",
  "Speed rule": "Geschwindigkeitsregel",
  "Do not pay the next-stage tax until the next stage is real.": "Zahle den Preis der nächsten Stufe erst, wenn diese Stufe real ist.",
  "forward path": "Vorwärtspfad",
  "loop / stay": "Loop / bleiben",
  "conditional": "bedingt",
  "Risk / authority applies at every stage": "Risiko / Autorität gilt auf jeder Stufe",
  "data · write authority · exposure · impact": "Daten · Schreibautorität · Exposition · Auswirkung",
  "Operational governance": "Operative Governance",
  "grows with maturity.": "wächst mit der Reife.",
  "Security governance": "Security Governance",
  "is triggered immediately by risk.": "wird durch Risiko sofort ausgelöst.",
  "04 · Sequence view": "04 · Sequenzansicht",
  "The agent shouldn’t learn the infrastructure.": "Der Agent sollte die Infrastruktur nicht lernen müssen.",
  "Intent in. Deterministic action out. A real preview comes back.": "Intent hinein. Deterministische Aktion heraus. Eine echte Preview kommt zurück.",
  "Sequence diagram": "Sequenzdiagramm",
  "human → agent → platform → preview": "Mensch → Agent → Plattform → Preview",
  "Agent publishing sequence diagram": "Sequenzdiagramm für Agent-Publishing",
  "Human asks an agent to publish; the agent invokes the platform; the platform deploys a preview and returns the result.": "Ein Mensch bittet einen Agenten zu veröffentlichen; der Agent ruft die Plattform auf; die Plattform deployt eine Preview und gibt das Ergebnis zurück.",
  "Human": "Mensch",
  "Platform": "Plattform",
  "publish for my team · 30d": "für mein Team publishen · 30 T.",
  "policy + deterministic action": "Policy + deterministische Aktion",
  "deploy preview": "Preview deployen",
  "preview ready": "Preview bereit",
  "URL · lifetime · status": "URL · Lebensdauer · Status",
  "platform action": "Plattformaktion",
  "› Publish the current preview.": "› Aktuelle Preview veröffentlichen.",
  "✓ Access rules applied.": "✓ Zugriffsregeln angewendet.",
  "✓ Preview published.": "✓ Preview veröffentlicht.",
  "✓ Result returned to the agent.": "✓ Ergebnis an den Agenten zurückgegeben.",
  "Steal:": "Mitnehmen:",
  "trivial authenticated publishing.": "triviales authentifiziertes Publishing.",
  "tiny deployment mental model.": "winziges Deployment-Mentalmodell.",
  "agent ↔ preview ↔ verify loop.": "Agent ↔ Preview ↔ Verify-Loop.",
  "05 · Success without reset": "05 · Erfolg ohne Reset",
  "When the tiny app becomes important, don’t start over.": "Wenn die kleine App wichtig wird, fang nicht von vorn an.",
  "Success can make software deeper or broader. Those are different moves.": "Erfolg kann Software tiefer oder breiter machen. Das sind unterschiedliche Bewegungen.",
  "Maturity": "Reife",
  "More assurance": "Mehr Assurance",
  "More assurance when policy, risk or business context requires it.": "Mehr Assurance, wenn Policy, Risiko oder Business-Kontext sie erfordern.",
  "Evidence continuity": "Evidenzkontinuität",
  "Source history, ownership, deployments, dependencies, access configuration and automated tests become inputs to formal assurance instead of being recreated manually.": "Quellhistorie, Ownership, Deployments, Abhängigkeiten, Zugriffskonfiguration und automatisierte Tests werden zu Inputs formaler Assurance, statt manuell neu erzeugt zu werden.",
  "Experience scope": "Experience-Scope",
  "More composition": "Mehr Komposition",
  "Isolated": "Isoliert",
  "Shared": "Geteilt",
  "Composed": "Komponiert",
  "Enterprise experience": "Enterprise Experience",
  "More coherence when user journeys cross app boundaries.": "Mehr Kohärenz, wenn User Journeys App-Grenzen überschreiten.",
  "Important distinction": "Wichtige Unterscheidung",
  "A developer portal and a composed business experience solve different problems, even if they share some technical primitives.": "Ein Developer Portal und eine komponierte Business Experience lösen unterschiedliche Probleme, selbst wenn sie technische Primitive teilen.",
  "06 · Component view": "06 · Komponentenansicht",
  "A thin seam, not a new infrastructure empire.": "Eine dünne Naht, kein neues Infrastruktur-Imperium.",
  "Own the contract. Reuse the commodity layers.": "Den Contract besitzen. Commodity-Layer wiederverwenden.",
  "Explore reference architecture →": "Referenzarchitektur erkunden →",
  "Component diagram": "Komponentendiagramm",
  "responsibility boundary": "Verantwortungsgrenze",
  "Human · Agent · Automation": "Mensch · Agent · Automation",
  "THIN CONTRACT": "SCHLANKER CONTRACT",
  "deterministic action": "deterministische Aktion",
  "PLATFORM RESPONSIBILITY": "PLATTFORMVERANTWORTUNG",
  "identity · routing · lifecycle · metadata": "Identität · Routing · Lifecycle · Metadaten",
  "static artifact serving": "statische Artefakt-Auslieferung",
  "ESCALATION": "ESKALATION",
  "runtime · state · capabilities": "Runtime · State · Capabilities",
  "Security boundary": "Security-Grenze",
  "Independent experiences need independent trust.": "Unabhängige Experiences brauchen unabhängiges Vertrauen.",
  "Origin separation is a security primitive for independently authored active web content.": "Origin-Trennung ist ein Security-Primitive für unabhängig erstellten aktiven Web-Content.",
  "shared origin": "gemeinsamer Origin",
  "isolated origins": "isolierte Origins",
  "Dogfooding scope today:": "Dogfooding-Scope heute:",
  "static delivery · repository source · automated Pages deployment · portable artifact.": "statische Delivery · Repository-Quelle · automatisiertes Pages-Deployment · portables Artefakt.",
  "Not yet proven here: enterprise SSO · TTL enforcement · owner policy · agent publishing · graduation.": "Hier noch nicht bewiesen: Enterprise SSO · TTL Enforcement · Owner Policy · Agent Publishing · Graduation.",
  "The working hypothesis": "Die Arbeitshypothese",
  "Make the first publish almost boring.": "Mach den ersten Publish fast langweilig.",
  "Then let successful software earn more runtime, more governance and more enterprise integration — without forcing the creator to pay for all of it on day one.": "Lass erfolgreiche Software dann mehr Runtime, mehr Governance und mehr Enterprise-Integration verdienen — ohne den Creator am ersten Tag für alles bezahlen zu lassen.",
  "Build freely.": "Frei bauen.",
  "Reuse intelligently.": "Intelligent wiederverwenden.",
  "Publish safely.": "Sicher veröffentlichen.",
  "Graduate deliberately.": "Bewusst graduieren.",
  "Concept experience v0.5 · source of truth remains the repository": "Konzept-Experience v0.5 · Source of Truth bleibt das Repository",
  "Concept experience v0.5 · source of truth remains the repository ·": "Konzept-Experience v0.5 · Source of Truth bleibt das Repository ·",
  "depth ·": "Tiefe ·",
  "story mode ·": "Story-Modus ·",
  "chapters": "Kapitel",
  "chapters ·": "Kapitel ·",
  "grid": "Raster",
  "design grammar": "Design-Grammatik",
  "Fast lane": "Fast Lane",
  "Use cases": "Use Cases",
  "Graduation map": "Graduation-Map",
  "Agentic loop": "Agentic Loop",
  "Success without reset": "Erfolg ohne Reset",
  "Working hypothesis": "Arbeitshypothese",
  "Fast lane publish flow": "Publish-Flow der Fast Lane",
  "Natural-language publish request and illustrative platform output": "Natürlichsprachiger Publish-Request und illustrative Plattformausgabe",
  "Illustrative machine-facing action": "Illustrative maschinenseitige Aktion",
  "Component diagram of the thin platform seam": "Komponentendiagramm der schlanken Plattformnaht",
  "A low-friction internal publishing model for humans and agents: publish fast, expire by default, graduate only when value is proven.": "Ein reibungsarmes internes Publishing-Modell für Menschen und Agenten: schnell veröffentlichen, standardmäßig auslaufen lassen und nur graduieren, wenn Wert bewiesen ist.",
  "Default lifecycle": "Standard-Lifecycle",
  "Publish quickly, keep the audience bounded, and let the experience expire unless someone extends or promotes it.": "Schnell veröffentlichen, die Zielgruppe begrenzen und die Experience auslaufen lassen, sofern sie niemand verlängert oder promotet.",
  "Default": "Standard",
  "finite lifetime": "begrenzte Lebensdauer",
  "Operational model": "Betriebsmodell",
  "lightweight": "leichtgewichtig",
  "Risk controls": "Risikokontrollen",
  "context-driven": "kontextgetrieben",
  "Demonstrated recurring value": "Nachgewiesener wiederkehrender Wert",
  "The experience earns persistence because people actually use it. Ownership becomes explicit and access can broaden.": "Die Experience verdient Persistenz, weil Menschen sie tatsächlich nutzen. Ownership wird explizit und der Zugriff kann breiter werden.",
  "Lifetime": "Lebensdauer",
  "persistent": "dauerhaft",
  "Evidence": "Evidenz",
  "usage + ownership": "Nutzung + Ownership",
  "Next trigger": "Nächster Trigger",
  "operational dependency": "operative Abhängigkeit",
  "Operational dependency": "Operative Abhängigkeit",
  "The software now matters to a recurring process. Monitoring, support expectations and stronger change controls become appropriate.": "Die Software ist jetzt für einen wiederkehrenden Prozess relevant. Monitoring, Support-Erwartungen und stärkere Change Controls werden angemessen.",
  "may escalate": "kann eskalieren",
  "Controls": "Kontrollen",
  "stronger": "stärker",
  "Principle": "Prinzip",
  "no rewrite required": "kein Rewrite nötig",
  "Policy-driven assurance": "Policy-getriebene Assurance",
  "When policy, risk or context requires formal assurance, existing engineering evidence becomes input to requirements, design, testing and validation.": "Wenn Policy, Risiko oder Kontext formale Assurance verlangen, wird bestehende Engineering-Evidenz zum Input für Anforderungen, Design, Tests und Validierung.",
  "Trigger": "Trigger",
  "policy / risk / context": "Policy / Risiko / Kontext",
  "Input": "Input",
  "provenance + tests": "Provenienz + Tests",
  "Rule": "Regel",
  "identify gaps explicitly": "Lücken explizit benennen",
  "Durable registered service": "Dauerhaft registrierter Service",
  "Where required, the application participates in established service, configuration and operational processes without turning the fast lane into those systems.": "Wo erforderlich, nimmt die Anwendung an etablierten Service-, Konfigurations- und Betriebsprozessen teil, ohne die Fast Lane in diese Systeme zu verwandeln.",
  "Registration": "Registrierung",
  "existing enterprise systems": "bestehende Enterprise-Systeme",
  "Ownership": "Ownership",
  "formal": "formal",
  "integrate, do not recreate": "integrieren, nicht neu bauen",
  "Chapter": "Kapitel",
  "Exit": "Beenden",
  "Reference Architecture — Agentic Experience Platform": "Referenzarchitektur — Agentic Experience Platform",
  "The provisional reference architecture for the Agentic Experience Platform: own the contract, borrow the machinery.": "Die provisorische Referenzarchitektur für die Agentic Experience Platform: den Contract besitzen, die Maschinerie leihen.",
  "Agentic Experience Platform overview": "Überblick über die Agentic Experience Platform",
  "Architecture view controls": "Steuerung der Architekturansicht",
  "Overview": "Überblick",
  "Architecture": "Architektur",
  "Reference architecture · v0.1.1": "Referenzarchitektur · v0.1.1",
  "Own the contract.": "Den Contract besitzen.",
  "Borrow the machinery.": "Die Maschinerie leihen.",
  "A thin internal publishing lane for deployable web experiences.": "Eine schlanke interne Publishing-Lane für auslieferbare Web Experiences.",
  "Logical model provisional · local baseline accepted": "Logisches Modell provisorisch · lokale Baseline akzeptiert",
  "Logical architecture": "Logische Architektur",
  "One owned seam.": "Eine eigene Naht.",
  "Commodity machinery around it.": "Commodity-Maschinerie darum.",
  "Responsibilities are separated so product meaning stays stable while infrastructure remains replaceable.": "Verantwortlichkeiten sind getrennt, damit Produktbedeutung stabil bleibt und Infrastruktur austauschbar.",
  "Responsibility map": "Verantwortungs-Map",
  "not deployment topology": "keine Deployment-Topologie",
  "mobile composition": "Mobile-Komposition",
  "Agentic Experience Platform reference architecture": "Referenzarchitektur der Agentic Experience Platform",
  "Human, agent, CLI and portal clients send publish intent into an owned Publish Contract and Control Plane. Identity and delivery adapters connect that core to borrowed infrastructure. Artifacts flow through storage and the Experience Edge into isolated published experience origins.": "Mensch-, Agent-, CLI- und Portal-Clients schicken Publish-Intent in einen eigenen Publish Contract und eine eigene Control Plane. Identity- und Delivery-Adapter verbinden diesen Kern mit geliehener Infrastruktur. Artefakte fließen durch Storage und die Experience Edge in isolierte Origins veröffentlichter Experiences.",
  "OWN · PRODUCT MEANING": "OWN · PRODUKTBEDEUTUNG",
  "ADAPT / BORROW · MACHINERY": "ADAPT / BORROW · MASCHINERIE",
  "intent in · result out": "Intent rein · Resultat raus",
  "identity · lineage · lifetime · lifecycle": "Identität · Lineage · Lifetime · Lifecycle",
  "Identity / Policy": "Identität / Policy",
  "Artifact Store": "Artefakt-Store",
  "routing · protection · origin isolation": "Routing · Schutz · Origin-Isolation",
  "protected URL": "geschützte URL",
  "Published experiences": "Veröffentlichte Experiences",
  "isolated origin": "isolierter Origin",
  "Own · product meaning": "Own · Produktbedeutung",
  "environment seams": "Umgebungs-Seams",
  "Adapt / Borrow · machinery": "Adapt / Borrow · Maschinerie",
  "trusted enforcement": "vertrauenswürdige Enforcement",
  "activation · routing": "Aktivierung · Routing",
  "deployable output": "auslieferbares Ergebnis",
  "trusted edge": "vertrauenswürdige Edge",
  "isolated": "isoliert",
  "product meaning": "Produktbedeutung",
  "commodity machinery": "Commodity-Maschinerie",
  "Responsibilities, not mandatory services.": "Verantwortlichkeiten, keine Pflicht-Services.",
  "The first physical implementation is now intentionally one ASP.NET Core deployable plus one test project. Split only when isolation, scaling, failure domains or ownership make it necessary.": "Die erste physische Implementierung ist bewusst ein ASP.NET-Core-Deployable plus ein Testprojekt. Erst aufteilen, wenn Isolation, Skalierung, Failure Domains oder Ownership es nötig machen.",
  "Physical baseline · v0.1": "Physische Baseline · v0.1",
  "One control plane.": "Eine Control Plane.",
  "Three ways in.": "Drei Wege hinein.",
  "The logical architecture stays modular. The first physical implementation deliberately does not.": "Die logische Architektur bleibt modular. Die erste physische Implementierung bewusst nicht.",
  "Local walking skeleton": "Lokales Walking Skeleton",
  "accepted baseline · not enterprise rollout": "akzeptierte Baseline · kein Enterprise-Rollout",
  "HUMAN": "MENSCH",
  "Web surface": "Web-Oberfläche",
  "MACHINE": "MASCHINE",
  "HTTP surface": "HTTP-Oberfläche",
  "S1/S2 path: Minimal API": "S1/S2-Pfad: Minimal API",
  "ONE ASP.NET CORE DEPLOYABLE": "EIN ASP.NET-CORE-DEPLOYABLE",
  "Shared application use cases": "Gemeinsame Application Use Cases",
  "relational metadata · EF Core": "relationale Metadaten · EF Core",
  "THIN SEAMS": "SCHLANKE SEAMS",
  "Borrow the machinery": "Maschinerie leihen",
  "identity": "Identität",
  "One deployable + one test project.": "Ein Deployable + ein Testprojekt.",
  "Split only when a real security, scaling, failure or ownership boundary earns it.": "Nur aufteilen, wenn eine echte Security-, Skalierungs-, Failure- oder Ownership-Grenze es verdient.",
  "Execution horizon": "Execution-Horizont",
  "Static first.": "Static zuerst.",
  "Not static‑bound.": "Nicht an Static gebunden.",
  "Future execution modes are preserved seams, not a roadmap the first workload must pay for.": "Künftige Execution-Modi sind erhaltene Seams, keine Roadmap, für die der erste Workload zahlen muss.",
  "NOW": "JETZT",
  "first delivery lane to prove": "erste Delivery-Lane zum Beweisen",
  "PRESERVED SEAM": "ERHALTENER SEAM",
  "bounded execution candidate": "Kandidat für begrenzte Execution",
  "arbitrary runtime candidate": "Kandidat für beliebige Runtime",
  "already-hosted service": "bereits gehosteter Service",
  "Bindings stay orthogonal: data · secrets · object storage · APIs · messaging.": "Bindings bleiben orthogonal: Daten · Secrets · Object Storage · APIs · Messaging.",
  "Rapid naming draft · Sparkery": "Rapid-Naming-Entwurf · Sparkery",
  "The life of a Sparklet.": "Das Leben eines Sparklet.",
  "Small thing. Real URL.": "Kleines Ding. Echte URL.",
  "A Sparklet is the friendly face of a published Experience — not a new domain object. The canonical contract underneath stays deliberately boring.": "Ein Sparklet ist die freundliche Oberfläche einer veröffentlichten Experience — kein neues Domain Object. Der kanonische Contract darunter bleibt bewusst langweilig.",
  "Fresh from the Sparkery": "Frisch aus der Sparkery",
  "concept simulation · not implemented": "Konzeptsimulation · nicht implementiert",
  "Some things are easier to see in the dark.": "Manche Dinge sieht man im Dunkeln leichter.",
  "lights": "Licht",
  "on": "an",
  "off": "aus",
  "tap the spark · it has somewhere to be": "Spark antippen · er hat ein Ziel",
  "Deployable artifact": "Auslieferbares Artefakt",
  "sparklet · 14s old": "Sparklet · 14 s alt",
  "You": "Du",
  "Audience": "Zielgruppe",
  "30 days": "30 Tage",
  "Born 14 seconds ago. Already has an owner.": "Vor 14 Sekunden geboren. Hat schon einen Owner.",
  "Everything behaving.": "Alles verhält sich.",
  "Reachability": "Erreichbarkeit",
  "reachable": "erreichbar",
  "Access": "Zugriff",
  "team applied": "Team angewendet",
  "Diagnostics": "Diagnostik",
  "no action": "keine Aktion",
  "now": "jetzt",
  "29d 23h left": "29 T. 23 Std. übrig",
  "expiry": "Ablauf",
  "keep the spark": "Spark behalten",
  "let it fade": "ausglimmen lassen",
  "only if it earns it": "nur wenn es sich das verdient",
  "Under the nickname": "Unter dem Spitznamen",
  "maps to the existing Experience + active Deployment semantics. Sparkery is presentation language; the API does not need whimsy.": "liegt weiterhin die bestehende Semantik aus Experience + aktivem Deployment. Sparkery ist Präsentationssprache; die API braucht keine Verspieltheit.",
  "The thin contract": "Der schlanke Contract",
  "Small enough to remember.": "Klein genug, um ihn sich zu merken.",
  "Creator intent stays stable even when the delivery machinery changes.": "Der Creator-Intent bleibt stabil, selbst wenn sich die Delivery-Maschinerie ändert.",
  "Result": "Resultat",
  "Still deliberately open": "Bewusst noch offen",
  "Storage substrate · concrete metadata database · identity/audience integration · URL/origin strategy · cleanup scheduler · agent authentication · exact inspect contract.": "Storage-Substrat · konkrete Metadatenbank · Identity-/Audience-Integration · URL-/Origin-Strategie · Cleanup-Scheduler · Agent-Authentifizierung · exakter Inspect-Contract.",
  "Open architecture questions ↗": "Offene Architekturfragen ↗",
  "Canonical sources": "Kanonische Quellen",
  "The page explains.": "Die Seite erklärt.",
  "The repository decides.": "Das Repository entscheidet.",
  "Reference Architecture v0.1.1": "Referenzarchitektur v0.1.1",
  "canonical model ↗": "kanonisches Modell ↗",
  "own · borrow · adapter · later ↗": "own · borrow · adapter · später ↗",
  "static first · future-safe ↗": "Static zuerst · zukunftssicher ↗",
  "first physical shape ↗": "erste physische Form ↗",
  "Current Frontier": "Aktuelle Frontier",
  "current truth ↗": "aktueller Stand ↗",
  "Reference Architecture v0.1.1 · Control Plane Baseline v0.1": "Referenzarchitektur v0.1.1 · Control Plane Baseline v0.1",
  "Back to Concept Experience →": "Zurück zur Konzept-Experience →",
  "Mobile reference architecture. Clients send publish intent into the owned Publish Contract and Control Plane. Identity and delivery adapters connect the core to borrowed machinery. The Experience Edge serves isolated published experiences.": "Mobile Referenzarchitektur. Clients schicken Publish-Intent in den eigenen Publish Contract und die eigene Control Plane. Identity- und Delivery-Adapter verbinden den Kern mit geliehener Maschinerie. Die Experience Edge liefert isolierte veröffentlichte Experiences aus.",
  "A human web surface and a machine HTTP surface enter the same ASP.NET Core application use cases, backed by relational metadata and thin infrastructure seams.": "Eine menschliche Web-Oberfläche und eine maschinelle HTTP-Oberfläche laufen in dieselben ASP.NET-Core-Application-Use-Cases, gestützt durch relationale Metadaten und schlanke Infrastruktur-Seams.",
  "Concept simulation showing a deployable artifact published as a Sparklet, inspected while live, and reaching a lifetime decision to extend, retire or graduate if justified.": "Konzeptsimulation: Ein auslieferbares Artefakt wird als Sparklet veröffentlicht, live inspiziert und erreicht anschließend eine Lifetime-Entscheidung: verlängern, auslaufen lassen oder — wenn begründet — graduieren.",
  "Turn Sparkery lights out": "Sparkery-Licht ausschalten",
  "Turn Sparkery lights back on": "Sparkery-Licht wieder einschalten",
  "Push this Sparklet to the runtime": "Diesen Sparklet in die Runtime schicken",
  "Publish contract summary": "Zusammenfassung des Publish Contract",
  "one more thing…": "noch eine Sache…",
  "identity · lineage · lifetime": "Identität · Lineage · Lifetime",
  "routing · protection": "Routing · Schutz",
  "origin isolation": "Origin-Isolation",
  "Clients": "Clients",
  "Clients publish through one owned Contract and Control Plane. Identity and delivery seams sit directly below the core. Delivery feeds an Artifact Store; identity and stored artifacts converge at the Experience Edge, which serves isolated published experience origins.": "Clients veröffentlichen über einen eigenen Contract und eine eigene Control Plane. Identity- und Delivery-Seams liegen direkt unter dem Kern. Delivery speist einen Artifact Store; Identity und gespeicherte Artefakte laufen an der Experience Edge zusammen, die isolierte Origins veröffentlichter Experiences ausliefert.",
  "result returned": "Ergebnis zurückgegeben",
  "recurring value?": "wiederkehrender Wert?",
  "continue ↓": "weiter ↓",
  "publish · learn · ↺ iterate": "publishen · lernen · ↺ iterieren",
  "owner · audience · ↺ improve": "Owner · Zielgruppe · ↺ verbessern",
  "operational dependency?": "operative Abhängigkeit?",
  "monitor · recover · ↺ change safely": "überwachen · wiederherstellen · ↺ sicher ändern",
  "assurance required?": "Assurance erforderlich?",
  "evidence · gaps · ↺ close gap": "Evidenz · Lücken · ↺ Lücke schließen",
  "when ready": "wenn bereit",
  "active / hypothesis": "aktiv / Hypothese",
  "Human asks an agent to publish; the agent invokes the platform; the platform deploys a preview, receives readiness, returns the result to the agent, and the agent returns it to the human.": "Ein Mensch bittet einen Agenten zu veröffentlichen; der Agent ruft die Plattform auf; die Plattform deployt eine Preview, erhält die Bereitschaft zurück, gibt das Ergebnis an den Agenten zurück und der Agent an den Menschen.",
  "Mobile lifecycle map. Explore can retire or continue to Share; Share can stay shared or continue to Operate; Operate can stay operational or continue to Validate when assurance is required; Validate can close gaps and lead to Enterprise.": "Mobile Lifecycle-Map. Explore kann beendet oder zu Share fortgeführt werden; Share kann geteilt bleiben oder zu Operate fortgeführt werden; Operate kann operativ bleiben oder bei erforderlicher Assurance zu Validate fortgeführt werden; Validate kann Lücken schließen und zu Enterprise führen."
};
  const reverseDe = new Map();
  const normalize = (value) => String(value ?? "").replace(/\s+/g, " ").trim();

  Object.entries(de).forEach(([english, german]) => {
    const normalized = normalize(german);
    if (!reverseDe.has(normalized)) reverseDe.set(normalized, english);
  });

  const textCanonical = new WeakMap();
  const attributeCanonical = new WeakMap();
  let titleCanonical = null;

  const readSavedLanguage = () => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "de" ? "de" : "en";
    } catch {
      return "en";
    }
  };

  let language = readSavedLanguage();

  const resolveCanonical = (current, stored = null) => {
    const normalized = normalize(current);
    if (Object.prototype.hasOwnProperty.call(de, normalized)) return normalized;
    if (reverseDe.has(normalized)) return reverseDe.get(normalized);
    return stored;
  };

  const render = (canonical) =>
    language === "de" && Object.prototype.hasOwnProperty.call(de, canonical)
      ? de[canonical]
      : canonical;

  const translateTextNode = (node) => {
    const current = node.nodeValue ?? "";
    const canonical = resolveCanonical(current, textCanonical.get(node));
    if (!canonical || !Object.prototype.hasOwnProperty.call(de, canonical)) return;

    textCanonical.set(node, canonical);
    const leading = current.match(/^\s*/)?.[0] ?? "";
    const trailing = current.match(/\s*$/)?.[0] ?? "";
    node.nodeValue = `${leading}${render(canonical)}${trailing}`;
  };

  const translateAttribute = (element, attribute) => {
    const current = element.getAttribute(attribute);
    if (current == null) return;

    let canonicalMap = attributeCanonical.get(element);
    if (!canonicalMap) {
      canonicalMap = new Map();
      attributeCanonical.set(element, canonicalMap);
    }

    const canonical = resolveCanonical(current, canonicalMap.get(attribute));
    if (!canonical || !Object.prototype.hasOwnProperty.call(de, canonical)) return;

    canonicalMap.set(attribute, canonical);
    element.setAttribute(attribute, render(canonical));
  };

  const updateLanguageRail = () => {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  };

  const apply = () => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    const canonicalTitle = resolveCanonical(document.title, titleCanonical);
    if (canonicalTitle && Object.prototype.hasOwnProperty.call(de, canonicalTitle)) {
      titleCanonical = canonicalTitle;
      document.title = render(canonicalTitle);
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });

    let node = walker.nextNode();
    while (node) {
      translateTextNode(node);
      node = walker.nextNode();
    }

    document
      .querySelectorAll("[aria-label], [title], [data-story-title], meta[name='description']")
      .forEach((element) => {
        for (const attribute of ["aria-label", "title", "data-story-title", "content"]) {
          if (element.hasAttribute(attribute)) translateAttribute(element, attribute);
        }
      });

    updateLanguageRail();
  };

  const setLanguage = (nextLanguage) => {
    language = nextLanguage === "de" ? "de" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage is a convenience only. The toggle still works without it.
    }
    apply();
  };

  window.sparkeryI18n = {
    apply,
    getLanguage: () => language,
    setLanguage,
    t: (english) => {
      const canonical = normalize(english);
      return language === "de" && Object.prototype.hasOwnProperty.call(de, canonical)
        ? de[canonical]
        : english;
    },
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  apply();
})();
