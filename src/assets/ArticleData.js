const ArticleData = {
    title: "Documenting Trajectories in Design Space: a Methodology for Applied Game Design Research",
    year: 2018,
    authors: [
        "Rilla Khaled",
        "Pippin Barr",
        "Jonathan Lessard",
    ],
    abstract: "Recent years have borne witness to an explosion of games research from diverse home disciplines. Much of this work concerns game design, but the games research community has yet to agree on practices and methods for examining game design that are simultaneously rigorously scholarly, flexible enough to accommodate a design-oriented perspective, and sufficiently knowledgeable of computation to engage with the materiality of games. In this paper, we outline such an approach. We focus on the question of an appropriate method for an academic game design research practice that is grounded in making and play while respecting recoverability and context. We demonstrate what game analysis based on such a method can reveal, drawing on the case of Pippin Barr’s *It is as if you were doing work*, and show how method and analysis in tandem can materialise tacit design knowledge, support balanced subjectivity, and illuminate the often abstract design problem space.",
    keywords: ["game design research", "game design", "design research", "design methods", "prototyping"],
    citation: "Rilla Khaled, Jonathan Lessard, and Pippin Barr. 2018. Documenting Trajectories in Design Space: a Methodology for Applied Game Design Research: Full Paper. In FDG18: *Foundations of Digital Games* 2018, August 7–10, 2018, Malmö, Sweden. ACM, New York, NY, USA, Article 4, 10 pages. https://doi.org/10.1145/3235765.3235767",

    sections: [
        {
            title: "Introduction",
            paragraphs: [
                "Game design is a complex, holistic and multidisciplinary practice implicating design, technology, and art to name the most obvious – but also marketing, management, psychology, history, and as many other fields as stakeholders might feel relevant. As such, it is no surprise that research concerning game design varies greatly in its methodologies and epistemological assumptions. In spite of this diversity, there is a widely shared (though not always explicit) recognition that making an actual game or testable prototype is useful to materialize the design questions, aesthetic issues, or technical problems that are being addressed by the research. These prototypes are frequently submitted to playtesting or other forms of more qualitative aesthetic interpretation.",

                "What is usually neglected, however, is the exposition and justification of the series of decisions that led to the specific design of a game. Perhaps the research question is whether one dialogue system is more \"immersive\" than another, but why are the characters speaking about this subject? Why are they in this environment? Why do they look like this? Would the playtests have had the same results if the context, platform, theme, genre, point-of-view, etc. had been different? Isolating a specific variable within a game is near-impossible as all its aspects make sense in relationship each other. We cannot abstract Mario’s jumping from his ability to punch upward, for example.",

                "Whenever a game (or game prototype) is created, whether in a formal research context or not, a trajectory is being chosen through a space of design possibilities. Our claim is that this process is research in itself. This is at least partly acknowledged in the advocating of prototyping as an exploratory technique in game design handbooks ([34] for example), but we ask: how can we yield the most value from this form of creation within an academic context? How can the prototyping and game-making going on in many game-design related research practices be made more self-aware, exposing research findings about design itself rather than black-boxing the creative process? Taking inspiration from design-oriented research agendas that have been taken up elsewhere in design fields, and notably within our reference field of Human-Computer Interaction (HCI), as well as the research practices of game designers outside of academia, we ask: *What methods can we use in an academic game design research practice that would support making and articulation of making while respecting recoverability and context?*",

                "Our contributions are as follows. First, we provide an in-depth assessment of the state of the art of design research in other, more advanced fields that have considered these same questions. Focusing on the HCI literature in particular, including its coverage of game HCI specifically, we provide a reference point for thinking about design itself as an object of scholarship. Second, we propose a game design research method that draws on prototyping theory and software development practice, emphasizing the methodical archiving of all stages of digital game prototyping alongside conscientious and regular design diary keeping by the game designer. From such repositories, one can draw on material evidence in the form of playable game builds, code, and documentation in order to make grounded claims about how game design happens and about the very nature of the design of play. Third, we use the method to document the making process of a critically acclaimed game, It is as if you were doing work [4]. Finally, we demonstrate what a design process analysis of a game developed in keeping with our method can look like, and discuss how both method and analysis in tandem can materialise tacit design knowledge, support balanced subjectivity, and illuminate the often abstract design problem space."
            ]
        },
        {
            title: "Background",
            paragraphs: [
                "Game design has been practiced for as long as games have existed, but game design research – or game design as rigorous academic research – has a younger history. In the early 2000s, while game studies was solidifying as a discipline chiefly in relation to humanities and social science-oriented perspectives [2, 30, 62], games and play, began to appear more regularly as topics of inquiry within computer science and HCI literature. Researchers examined the possibility of using game-like aesthetics and features to mask productivity purposes [21, 59], and began asking whether fun and pleasure might in and of themselves be experiences HCI practitioners should pursue alongside classic “usability” qualities [13, 20, 36, 42]. Precedents were laid for examining games from an HCI perspective, and the methods of HCI were appropriated to games to advance and support claims about play experiences. Scholars established ways to apply the think-aloud protocol to play [40], they devised heuristic evaluations for games derived from usability [27], and began collecting psychophysiological measures from players, deriving quantifications of play experience [47].",

                "An arbitrary sampling of game publications from the last two years includes: experiments converting off-the-shelf games into exergames [43], player studies of emotionally moving game experiences [16], experiments with social comparison visualisation strategies to enhance player performance [22], increasing gamification user retention via game updates [67], sense of agency in mid-air touchless interfaces [23], and tool support for making mobile VR maze games [35]. These papers by no means represent the full diversity of games research present in the video game research community, but each of these papers adopts most of the following methodological steps: formation of a hypothesis or research question around a game feature or experience variable, running of a practical experiment involving development or modding, deployment and testing with users usually for the purpose of collecting quantitative data, and reporting general design implications or guidelines.",

                "As Harrison et al. point out in \"The Three Paradigms of HCI\", there is not just one form or philosophy of HCI [39]. Crucially, whichever paradigm we find ourselves in informs and constrains the epistemologies our research perspectives rest on, the methods we have ready to hand, and correspondingly, the questions we ask. Thus, it can be difficult to conceive of, let alone investigate, questions that do not form an easy fit within our accepted epistemological and methodological backdrops.",

                "We propose that much of game research still largely situates itself within the second paradigm of HCI – a cognitivist mode where generalisable frameworks and rules are valued and controlled experimentation yields trustworthy results [39]. In this paradigm, we can perform rigorous experiments on quantifiable aspects of games, but we are unsure of how to treat highly contextual accounts of play experience or what to do with intangible and ever-changing aspects like game aesthetics and, indeed, game design. Thus we find numerous examples of game research that hone in on highly specific aspects of game design, compartmentalising them and investigating them as experimental variables, while disregarding how play is experienced outside of the lab: holistically and contextually. Of course there are exceptions, including [14, 48, 50], but they are in the minority. To clarify our position: groundbreaking and important work has been undertaken by our community in this way, but our mechanisms for supporting more contextually-focused accounts of game design research are still not strong.",

                "In other realms of design, such as the interaction design community the third paradigm, one that foregrounds context, situated perspectives, and tacit knowledge, is prominent (e.g. [17, 25, 26, 37, 54, 55, 68]). It is within this third paradigm that design-orientation in research [31] comes into its own, its agenda and assumptions finally coalescing into coherence. Design research, as we outline below, has been framed in numerous ways, but consistently foregrounds the following perspective: *design knowledge is contextual and tacit, residing somewhere between the making of things and in those things themselves.*",

                "In 1995, Frayling proposed three ways of thinking about configurations of art, design, and research. *Research into art and design* is research on historical, cultural, and social aspects of art and design, *research through art and design* is research arising as a result of art and design, and *research for art and design* is research where thinking is embodied in the artifact itself: the artifact itself serves as a material claim about design process and rhetoric [33]. Design scholars such as Buchanan and Norman have presented a complementary perspective on research for art and design, asserting that designs embody material claims and rhetorics, and that we reason about the intended use of objects via their physical designs [18, 53]. At the same time, cultural studies scholars argue that the way in which we make nuanced interpretations of phenomena is by considering them in cultural contexts [65].",

                "Frayling’s configurations of research, art, and design were introduced into HCI research by way of scholars such as Zimmerman et al. [68] and Dalsgaard [25]. Meanwhile, Fallman proposed related distinctions in the more specifically context of research in interaction design: research-oriented design, design that is driven by research, versus design-oriented research, research that is driven by design [31]. The former, research-oriented design, is a mainstay of practicing designers working to the needs of clients, and features problem-solving as its main objective. The latter, design-oriented research, overlaps with Frayling’s research through and for art and design and features problem-setting as its main objective. While all these terms have since been integrated into interaction design discourse as ways to characterise and categorise the relationship between design and research (e.g. [17, 26, 37, 54, 55]), these terms do not feature with much significance within the game literature.",

                "In keeping with Harrison et al.’s claim about questions being shaped by paradigms, we argue that this categorisation has not yet featured extensively within game research because contextuallyfocused accounts of game design cannot easily be accommodated by second paradigm game design research in terms of epistemology or method. Indeed, it turns out that similar problems plague game studies. Deterding asserts that game studies has grown but becomes increasingly narrow and less willing to engage with epistemologies and methods from diverse disciplines [28]. As a solution for facilitating epistemological plurality, he proposes a focus on design-orientation. He highlights HCI as an arena in which rich interdisciplinary scholarship takes place, where designed objects are recognised as complex cultural artifacts, and design is viewed both as a valuable mode of inquiry and a bridge between theory and practice. Surprisingly, though, Deterding does not point out game HCI research as an example where design serves this role, and instead identifies Ratto’s critical making practice [55] as a model [28]. Also in the context of game studies, Kultima similarly argues that design-orientation has not yet become integrated as a perspective, stating *“notions of ‘design’ and ‘design research’ are not explicitly reflected on the research papers within the academic field of game research” and “due to the absence of the academic counterparts for game design theories, game studies continues to use the early conceptions of the industry driven game design books”* [45].",

                "We believe that game design research has suffered as a result of being caught between epistemologies and disciplines that form only a partial fit to the concerns of design itself. Game design research shows no signs of slowing down but does not yet have deep foundations to rest on because it is unsure of what it is. Until it can truly embrace being design research proper, as opposed to research which leans on existing dominant HCI research traditions, many of the holistic game design research questions we could ask fall through the gaps of epistemologies. We can try to massage our research questions and methods to make sense within an existing HCI agenda, but it might make it difficult for us to ask all the design-related questions we might wish.",

                "Outside of academia, the notion that individuals hone knowledge about craft through craft – and may use the resulting outputs as material argument – is hardly controversial. As Schön has observed about professional craft in general, it is anchored in practice and intuition, and the problems tackled are often messy and ill-defined [58]. Yet messiness is not necessarily problematic: referring back to designed artifacts reifies and strengthens knowledge and observation. Mainstream events like the Game Developers Conference (GDC) and archives such as its vault [1] are a testament to this form of practice: a single annual iteration of GDC results in hundreds of hours of game design experts demonstrating and sharing their knowledge and experience while using designed artefacts (actual games) as evidence. Abstraction of design knowledge and design rules are valuable, but the value of this knowledge is intrinsically linked to the quality and qualities of the designed things they underpin. Likewise, game festivals like IndieCade rely on an intimate knitting between designed artefact and articulation: designers with games accepted into IndieCade end up developing, over many demonstrations, concise explanations that set apart what their game does, what their game is, and why their game is. Game jams, such as the 48 hour Global Game Jam, are pitched as the ultimate exercise in high speed crafting and the resulting artefact is taken to speak for itself. In online forums such as Twitter, publications such as RPS and Polygon, and platforms such as itch.io, the designed artefact becomes evermore important as a material argument: designers may not be able to have face-to-face conversation with the public, but the public can download and play their games to form and reflect on their opinions. In all these events that bring communities of game designers together to share and reflect on their craft, the designed artefact is never far from hand: making helps designers articulate, and articulating helps designers make. Knowledge simultaneously exists in the thing and in the articulation of the thing.",

                "As researchers of game design, we found ourselves asking: *why is it that game designers in the “real world” can make assertions about game design that we within academia we feel uneasy about making, unable to justify, and/or hard to get published?* Less colloquially, what is lacking in our methodological toolkit for researching game design that means we cannot ask and answer the same questions that our non-academic practitioner peers can?",

                "Our desire is to create an academic space for game design research that acknowledges the closely knit relationship between making and articulation, the special insights a maker has into their creations, but also the fragility of context. However, we also need something akin to rigour to be pursued in this form of research as otherwise the academic context affords nothing in addition to “real world” game design. Such rigour is misleading and perhaps even irrelevant in the context of design practice, however, a realm in which identical problems can rarely be replicated, designerly intuition is important, and aesthetic taste plays a significant steering role. Instead we align with the idea of *recoverability* as a design-friendly alternative to rigour that has been adopted from action research into design research, referring to the designer-researcher’s need to ensure that “the process is recoverable by anyone interested in subjecting the research to critical scrutiny” [38, 49].",

                "Let’s recall our primary research question: *What are the methods for an academic game design research practice that supports making and articulation of making, while respecting recoverability and context?* Building on this question, what can an analysis based on such a method look like and, more generally, what kind of design knowledge can we hope to find using such methods?"

            ],
        },
        {
            title: "A Method For Game Design Analysis",
            paragraphs: [
                "A conventional game design analysis might draw a bridge between a piece’s formal properties (mechanics) and its intended player experience (or aesthetic reception) [41]. While this is a valid exercise and can lead to interesting observations, what such an approach obscures is the actual design process of the game, something that is more or less invisible when looking only at the end result. It is easy to assume, for example, that the play experience of a game was intended from the beginning, and that its design consisted essentially in the problem-solving exercise of finding the right mechanics to reach the appropriate aesthetic destination. In fact, this is how we often teach game design: establish what game experience you want your players have, and iterate on the game’s design until it creates that experience [32, 34].",

                "Those of us who have undertaken game development, however, will quickly acknowledge that the real story is more complicated. The design process is a complex trajectory, with each decision serving as a balancing act between conflicting factors: humans, resources, computers, context, time, etc. [44]. A philosophical counterpart to the idea of a design trajectory is the space that trajectory passes through: the design problem space, or the space of possible design solutions. From the vantage point of the problem space, there is never just one possible solution, there are many [24, 46, 60].",

                "One way that designers make sense of a problem space is through prototyping, as prototypes can serve to materialise a point in the space and the constraints it interacts with. Prototypes essentially help us to traverse the design problem space by serving as steps along a path [24, 46]. If prototypes are the individual stepping stones, iteration is the force that propels us: the building of the total path itself. And, indeed, iteration and prototyping are highlighted as essential components of “best practice game design” in most writing on the subject [34, 57]. Crucially, however, there is important processual and designerly knowledge embedded not just in the prototypes that precede the end product, but in the decision-making process linking the first prototype to the final release. In reflecting on the overall design problem space, and the specific trajectory followed, we can recover valuable insights into the game design process both in the specific case and potentially also for games more generally.",

                "Prototyping theory also tells us, though, that the best prototype is the cheapest, fastest one to build that helps us answer a certain design question [46]. That is, prototypes have often been associated with disposability, developed with the understanding that they will be superseded by other, better, more advanced materialisations of the concepts they embody [19, 29]. Indeed, game companies zealously guard playable builds of their games until they are mostly polished. Even design process documentation can be hard to come by: documents published during development such as screenshots, concept art, and videos, are usually carefully curated promotional material. Independent game makers are often more generous on this front, many keeping development diaries, for example. While this documentation is a very useful (and still under utilized) source for analysis, it is still lacking in one respect: ultimately, games are experienced through play and so assessment through blog entries and screenshots can only go so far. So how might we give the playable aspects of the problem space materiality and recoverability?",

                "Taking inspiration from prototyping theory, software development practice, and qualitative research, our approach for giving the game design problem space materiality involves methodical and dedicated archiving of all stages of digital game prototyping, coupled with conscientious and regular design diary keeping by the game designer. Ideally, this archiving takes place in a publicly accessible online version control repository, such as GitHub or BitBucket. This makes it possible for individuals, who may be wholly external to the design team, to visit the source control and check out versions of the project from different moments in time as evidential complements to designers’ diaries.",

                "However, in order for such archives to be genuinely rich repositories of process knowledge that can be gleaned after the fact, our approach requires methodical use of commits, i.e. the version control process of checking significant blocks of work into a repository. Designers’ version control practices vary wildly: some commit even small changes, others only commit when a feature has been introduced that does not break the rest of the code, others still commit at the end of a work session, and so on. Our desire is to make the pattern of committing closer to what a visualisation of the design problem space might be, such that process decisions are recorded via commits, and can later be revisited through accessing old commits. As such, at a minimum we propose commits based on completed features, design questions, design hypotheses, competing versions and prototypes (via branches), as well as the ever practical “I changed my code and ran a test, and it did not break”. Notably, version control software mandates writing a “commit message” which can be leveraged for design research purposes by referencing not just technical elements of the commit, but also design implications and thinking. That is, the commit message, both in its one-liner and detailed forms, can be written in such a way as to give an understanding of design/research-relevant changes and decisions made as part of the commit**[^1]**",

                "A history of commits over time can give an understanding of the overall design space and how it has been traversed: its pressure points, its branching points, where decisions have been made, and where possible lines of inquiry have been pruned. Importantly, because these commits can be retrieved and, assuming only working builds are committed, played, it becomes possible to draw on material evidence in the form of game builds, code, and documentation when making claims about how game design happens and about the very nature of the design of play. This can either be done while the design project is proceeding – *in vivo*, or a “hot analysis” – or after the design project has completed – *postmortem*, or a “cold analysis”. We note that postmortems are already a mainstay of game industryoriented analyses of game development, and we knowingly reuse the term to fold our interpretations of hot and cold analyses into the same conceptual territory. With strong documentation, such analyses can be undertaken by the designer herself or by someone who has been entirely external to the creative component of the project.",

                "The methods used to inform the analysis draw on qualitative research approaches. We propose case study as a format, which is appropriate to use when there is no predetermined hypothesis, when the intention is to gather rich, detailed data in an authentic setting, and when a holistic understanding of the phenomena is sought, in keeping with the idea that much of what we can know about human behaviour is best understood as lived experience in the social context [66]. Other possible formats include grounded theory [61] and digital ethnography [15]. Whichever format is used, the researcher should seek to focus on design taking place in context, and propositions must be based on evidence present in the repository.",

                "![Figure 1: An example of Git commits from It is as if you were doing work](https://raw.githubusercontent.com/estineali/assets/refs/heads/main/prose/Figure1.png) **Figure 1: An example of Git commits from It is as if you were doing work**",

                "![Figure 2: An example of process entries from It is as if you were doing work](https://raw.githubusercontent.com/estineali/assets/refs/heads/main/prose/Figure2.png) **Figure 2: An example of process entries from It is as if you were doing work**",

                "In the following section, we present an example of a cold case analysis of the game *It is as if you were doing work* [4] (or *Work* for short). *Work* is a free, browser-based game developed by Pippin Barr, an author of this paper, and is accompanied by a publicly available GitHub repository featuring code (see figure 1), process documentation (see figure 2), and press materials, and is also the subject of numerous design diary entries Barr maintained throughout Work’s development process [7]. An often overlooked truth of design research is that the motivation to extract design knowledge from the work of other designers often hinges on its perceived qualities, good or otherwise. *Work* has been played by approximately 200,000 players at the time of writing, and has received many positive reviews in well-known online publications, including *Vice* [64], *The Verge* [63], *Engadget* [56], *Boing Boing* [11], and *Tech Crunch* [12]. Based on its positive reception, coupled with the rigorous documentation Barr engaged in throughout the process of making *Work*, we use it as a candidate to demonstrate how game design analysis can be undertaken based on builds, code, and documentation.",

                "The analysis itself was written by another author of this paper, not Barr himself. While the analyst had no specific question in mind on beginning the analysis, his intent was to identify key moments in the design trajectory that can yield game design-relevant insights. Additionally, the analyst had little knowledge of the end result of Barr’s design prior to undertaking the analysis as he had not played the game at that time. His approach was to follow Barr’s design process, continuously comparing Barr’s writing with contemporaneous prototype builds extracted from the GitHub repository.",

            ],
        },
        {
            title: "A Design Process Analysis Of 'It Is As If You Were Doing Work'",
            paragraphs: [
                "*Work* was released by Pippin Barr in July 2017. It presents itself as an application designed to give a sense of purpose to the idle humans of a near future in which all work has been delegated to robots [10]. It takes the form of an early Windows-style desktop environment with modern office-like tasks to be performed through the manipulation of conventional GUI elements, such as sliders, radio buttons, and text boxes (see figure 3). The game was noticed by a number of generalist and specialized publications, most picking up on the game’s social commentary: *“A job simulator designed to make you feel useful, chasing your existential anguish. Horrible, isn’t it?”* [64], translated from French).",

                "![Figure 3: It is as if you were doing work* during play](https://raw.githubusercontent.com/estineali/assets/refs/heads/main/prose/Figure3.png) **Figure 3: *It is as if you were doing work* during play**",

                "## **4.1 A UI Game**",
                "A key finding in looking at the design process of *Work* is that the post-work satire (arguably the most salient aspect of the released game) is completely absent from the project’s inception. Barr’s first entry states his new project’s basic idea as: *“A game made entirely of small (WarioWare-esque) activities from our daily life of using computers. So, for instance, you might be challenged to drag a folder into the trash, or move a slider to a specific setting”* [3]. This brief statement is already very rich with game designerly thinking. For one, Barr begins from an observation of a human behaviour (here the trivial yet omnipresent use of standardized graphic user interface elements) and asks the question of how this activity could be thought of as a game. This is one of the most basic yet fruitful game design operations: *I see that people move toward destinations – what if they were challenged to get somewhere before others? What if they had to jump over small fences in the process?* Game designers are always on the lookout for activities that have not yet been appropriated for the realm of games. The proof that this is key to Barr’s thinking about his project is that before he had settled for a title, he often refers to his project as the “UI game”.",

                "Another typical game design approach is to think in terms of other games or game genres to articulate aspects of the project. Games are rarely entirely novel, and the parts that are derived from pre-existing designs can be summarily communicated by referring to examples (especially since game design is still very much in the process of standardizing terms to refer to typical forms). One of the first things Barr says of his project is that it is “WarioWare-esque”, by which he probably wants to evoke a series of mechanically varied, randomly selected mini-challenges prompting players to quickly understand what the actions they need to perform as in the game *WarioWare* [52]. If GUI manipulation was the core activity targeted by Barr, *WarioWare* was his reference in thinking the framing of that activity as a hectic series of mini tableaux.",

                "In his “basic idea” statement, Barr judges it useful to embody his design intuitions in concrete, low-level examples: *drag a folder to trash, move a slider to a specific setting* [3]. These examples are extremely important as Barr is already visualising his future game in action. He can see the pop-up window with some text and a slider awaiting to be slid. There are countless other ways to imagine what a “UI-game” could be, but this is his mental image. This will both help him operationalize his design process (*I need a window, text, and a slider*) but is also already causing the abstract idea to sediment in a specific form. As these thinking examples follow him, they will act as a closing force, restricting the design space. It is not a bad thing: designing is in a way the process of progressively reducing that space to one single possibility. One simply needs to be aware of that effect. It is telling that the slider example will in fact make its way to the released game.",

                "Barr’s first diary entry thus already gives a glimpse of typical game design reasoning and operations. Ideas are harvested from observation. Just like the master painter’s eye is trained to spot the interesting lighting conditions or the facial expression of a model that will lead to a complete painting, the game designer notices activities or situations that can be modelled meaningfully in a ludic structure. Hybridization is another common game design operation, relieving both designers and players of the burden of re-thinking (and re-learning) a completely new game structure by working from familiar patterns: *what if we took X but replaced Y with Z?* This requires game literacy: a large repertoire of ludic structures and components to draw from, juggle with, and reorganize. Finally, a game designer needs the capacity to imagine a game not yet made in action, so as to anchor abstract ideas in material form.",


                "## **4.2 The Problem of Language**",

                "In his March 27th diary entry, as Barr is picking up speed in the development of this game, he brings up what he calls *“the question of language”* [3]. Now that he has an actual GUI window to work with (see figure 4), he simply acknowledges that these usually contain text, which begs the very material question of: what text? Barr seems to want to avoid this question (probably to keep the focus on the “UI game” and not so much on whatever content might create the context of these operations) by imagining non-text alternatives such as *“emoji or ‘censored’ unicode block elements”*. This leads him to thinking in terms of an alien language that could be rendered as strings of varying non-letter characters such as in figure 5.",

                "![Figure 4: Early screenshot of It is as if you were doing work with placeholder text \[9\]](https://raw.githubusercontent.com/estineali/assets/refs/heads/main/prose/Figure4.png) **Figure 4: Early screenshot of It is as if you were doing work with placeholder text \[9\]**",

                "![Figure 5: An example of the “alien writing” version of It is as if you were doing work from commit 51b5f5d883f146b8d232f706e4cac802b33a6783, March 21st 2017 \[8\]](https://raw.githubusercontent.com/estineali/assets/refs/heads/main/prose/Figure5.png) **Figure 5:An example of the “alien writing” version of It is as if you were doing work from commit [51b5f5d883](https://github.com/pippinbarr/itisasifyouweredoingwork/commit/51b5f5d883f146b8d232f706e4cac802b33a6783), March 21st 2017 [8]**",

                "The following entries show how the seemingly decorative question of how to dress up the core mechanics of the game begins to steer the project in new directions. Barr is concerned that the alien language might beg to be deciphered, that players will bite on this mystery, perhaps overlooking the GUI play. He juggles with ideas to discourage such an interpretation: *“perhaps animating the characters?”* He considers dropping it in favour of generic labels such as “Radio 1” and “Radio 2” and “Button” but regrets that it would end up *“missing out on the cool language thing”*. We see that in the process of solving the design problems raised by his initial question, Barr has stumbled upon a formal idea that is now exerting its own pull. The default visual settings of the JQuery library Barr is using is yet another factor of influence. The Unicode blocky characters look even more alien in white on dark grey than they would in more desktop-like styles.",

                "![Figure 6: Partial capture of array of pre-written content phrases in It is as if you were doing work \[6\].](https://raw.githubusercontent.com/estineali/assets/refs/heads/main/prose/Figure6.png) **Figure 6: Partial capture of array of pre-written content phrases in *It is as if you were doing work* \[6\].**",

                "We can easily imagine a very different Work game building up from here that would still be hinging on the mechanics of familiar GUI elements, but as a foundation to support a decrypting/discovery gameplay: *What do these buttons mean? What is this an interface to? How can I work it to do something?* On March 31st, Barr backtracks completely from the alien language idea and opts for a more traditional early Windows aesthetic [5]. His reasoning is that it was *“detracting from being able to think of it in a humorous way”* and *“pulling away from the original idea of a person pretending to work”* [3]. His new answer to the “content” problem is to resort to *“business-y wording and phrases generated through Tracery”* (eventually, the list of prewritten phrases visible in figure 6).",

                "This episode in the game’s development highlights how much influence seemingly disparate elements of design can have on one another. The notion that a game’s abstract mechanics and their visual or narrative elements can be considered entirely separately does not hold. In the design process, every input – whether systemic, technical, visual – exerts a force on the resulting artefact; and these effects are cumulative as they inform decisions further down the line. Next, we will see just such a dynamic take place with the game’s narrative premise.",

                "## **4.3 Finding a Narrative**",

                "In his first post, Barr was already pondering the narrative potential of this project: *“One twist would be to incorporate narrative into the texts and imagery in the game, so that over time it becomes apparent it’s also a story”* [3]. Barr’s interest lay in the fact that *“...you could tie the UI actions as metaphors for content in the story and vice versa”*. This thread of thinking ends up not being followed-up in later development, perhaps because of the early realization that: *“...it would obviously massively complicate how the game would be able to work in terms of randomising things”*.",

                "Eight months later, as the core elements of the game are now functional, Barr consider the bigger picture: the *“meta-interface/narrative/aesthetic of this game”*. Interestingly, a player character story suddenly appears fully formed:",

                " ```‘the player’ is a person who lives in the near future of fully automated work and a living wage. They have no obligations day to day, but they remember the concept of working and the idea that having a job and doing work (on a computer) gave them value in society. They want to continue to have that feeling, but there’s nothing for them to actually do, so this game “It is as if you were doing work” exists to allow them to have that feeling - the semblance of doing work without the actual productivity. [3]```",

                "There is no discussion as to how this setting came about, with the exception of a need to establish a framing context for the player’s activities in the game: playing at working.Part of the elegance of this solution is its economy: it requires no additional design work.Everything remains as it was, except there is now a need to convey the piece’s fictive backdrop.Eventually, this will be reduced to a diegetically grounded “About” document left on the desktop to be read by the player, shown in figure 7.",

                "**Figure 7: “About” screen from final build for *It is as if you were doing work*** ![Figure 7: “About” screen from final build for It is as if you were doing work](https://raw.githubusercontent.com/estineali/assets/refs/heads/main/prose/Figure7.png) ",

                "This late adoption of a background story could be interpreted as an argument favouring the superficial contribution of narrative to games. However, press coverage demonstrates the contribution of the story to *Work’s* interpretation: *“I’ve been playing It Is As If You Were Doing Work on the same computer I use to do work during work hours, and I don’t quite know what’s real anymore. Time to hit this button marked ‘publish’ and see if I get any promotion points.”* [63]. Its influence on the design process should not be underestimated either.",

                "Once Barr had committed to this story, it became a core structuring factor in following design decisions. For example, a lingering concern seemed to be the balancing of difficulty. A week earlier, he had written, *“how hard is this meant to be??”* [3]. Level of difficulty is always a hard question for a designer to answer, as it is arbitrary and hinges on a clear understanding of the quality of experience being sought. Early versions of *Work* rely on a succession of prompts, as opposed to a single desktop environment, enforcing an intense pace on players. Dialog boxes asking the player to click a single button can be dealt with quickly, but others that require typing a specific sentence or setting a spinner to a given number require sufficient time and effort that completion is interrupted by new dialogs appearing. As they pile up, the play experience soon becomes overwhelming and stressful. This hectic rhythm remains in keeping with Barr’s initial *WarioWare* reference, materialising an aesthetic of intense productivity. The fast-paced versions of the game could in fact be interpreted as a very literal take on Janet Murray’s provocation that we can read Tetris as *“the enactment of the overtasked lives of Americans”* [51].",

                "There are multiple factors that Barr finds difficult to settle: *Should it be more of a continuous grind, or punctual, more intense challenges? How should actions be rewarded? Should players be punished for errors or simply be stalled until they succeed? How hectic should the pace be? At what interval should pop-up tasks appear? What is a good length for each task?* Ultimately these design questions are answered by making them consistent with the chosen narrative: *this should feel like office work, so a level of effort is necessary, but the fictional application is ultimately designed to soothe, and so should not be too stressful*. Barr chooses to not punish players, with errors simply leading to an opportunity to try again, but still requests a certain intensity from them, exploiting the ubiquitous familiarity of multi-tasking in contemporary computer-assisted work."
            ],
        },
        {
            title: "Discussion",
            paragraphs: [
                "## **5.1 Externalising tacit knowledge**",

                "The analysis presented above is but one example of how an analysis of Barr’s *Work* game based on code, builds, and documentation as sourced from *Work*’s repository might have turned out. The specific observations raised rest not only on material evidence but also on the designerly expertise, experiences, and game literacy of the analyst – that is, his tacit knowledge. Within design studies, tacit knowledge has been recognised as being difficult to articulate and consciously access [58]. We see a core value of such analyses lying in the facilitation of *materialising tacit design knowledg* – both that of analyst and also of the designer (who may be one and the same). An effective analysis of this format relies on claims that may be informed by tacit knowledge but then must be justified in reference to specific builds and materials. In particular, it now becomes easier to make justified claims about how design priorities may have shifted over a design process, interrelationships between design elements, design aesthetics, design obsessions, the influence of external factors (such as politics within game design communities or the dynamics of crowdsourced financing), how narratives about design become entrenched, and public perception.",

                "In recent years, there have been related efforts from the interaction design HCI community to recoup processual design knowledge. One of these is Dalsgaard and Halskov’s *process reflection tool*, an online project documentation tool focused on facilitating reflection on design decision points [26]. Gaver writes about *design workbooks*, assemblages of design proposals, mostly for understanding early stage design [37]. Bowers proposes the *annotated portfolio*, a kind of “family resemblances” style of design analytical writing that is undertaken on a group of works to elucidate features of the shared design problem space [17]. All of these efforts are philosophically related to our own, though none are focused on games and particularly, the importance of playing a game in order to reflect on its meaning and to draw specific observations. This is what we seek to make possible: to enable game design researchers to draw *specific* design observations on the basis of rich documentation and playable time-relevant builds.",

                "## **5.2 Subjectivity and Interpretation**",

                "A standard critique of qualitative research is that it can be overly subjective, either as a result of being based on too few data points or because the researcher himself may be biased in particular ways. While there are existing ways to respond to this critique, our method facilitates another response: in the ideal case, all of a game’s process and development materials have been made publicly accessible in an online repository. Game design analyses that are based on documented materials and repository builds can be challenged by other design researchers, who can use the very same publicly available data to formulate their own analyses**[^2]**. Indeed, having multiple interpretations of a game’s design can only serve to enrich the thinking that surrounds it. These analyses can themselves be stored in the repositories, thus being readily accessible to the game design community at large.",

                "## **5.3 'Hot' and 'Cold' Analysis**",

                "A critical quality of any rigorous methodology is that both its process and results be legible to outside observers. That the analysis presented in this paper was performed by someone more or less completely unfamiliar even with the game itself stands as a strong endorsement of the method of documentation discussed here. Notably, the analyst was able to follow and to engage deeply with the design process, providing a ‘cold’ reading of that process. Such readings are important not least of all because of the lack of stakes the analyst has in the work they are analysing – it is not important to make the game look good or appear more intelligent than it was, for example. A ‘cold’ analysis is thus trustworthy in a particular way.",

                "With that said, although it was not explored in this paper, we also see value in the alternative approach of a ‘hot’ reading of work by the creator themselves. While there is naturally a risk of being “too close” to the material, this must be balanced against the very real advantage of the actual designer’s depth of knowledge and insight into their own creation. The designer is far more likely to uncover detailed and specific elements of their own design, simply because they have already spent a great deal of their time contemplating it. Whereas with a ‘cold’ analysis the recoverability provided by the method helps the analyst by providing the material for their work, for a ‘hot’ analysis it is equally as valuable in providing external justification of the analysis generated. While we cannot simply trust the designer to be an objective observer of their work, the method here offers them the ability to support their arguments with the available evidence, and so make a claim to rigour that might otherwise elude them.",

                "## **5.4 What might have been**",

                "The large part of the analysis of *Work* offered here focused on a history-oriented chronology of the game’s design and development process, moving from early intuitions all the way through to a final release. While this is perhaps the most clearly accessible mode of inquiry made available by the chronological structuring of the version control system, at least one other intriguing possibility emerged in the analysis. Specifically, we see more than once that the analysis touches on design directions that were *not* followed in the course of the game’s creation: the creator moved away from the frenetic nature of *WarioWare*, he decided not to use his “alien language” approach to representing content, and eventually he replaced a non-narrative approach with a very specific narrative framing for the player activity relatively late in the process.",

                "While these ideas may not have made it to the final released version of *Work*, they help to illustrate a strong benefit of the recoverability offered by version control: those versions of the game *continue to exist* and are accessible. As we see in the analysis above, these particular moments in the development process do not simply represent ‘false steps’ that needed to be corrected to move forward, they represent points in the larger design space navigated by this game that are *of interest in themselves*. In particular, each of these ‘roads not taken’ offers a glimpse of a path leading off toward distinct approaches to leverage UI elements as the centre-point of game design and, in doing so, *illustrate what this game’s design process was exploring*. The ‘alien language’ commit of *Work* may not even be reasonably said to be ‘the same game’ as the final release, but it is from the *same design space*, and so illuminates that space in ways that the final game cannot on its own."
            ],
        },
        {
            title: "Conclusion",
            paragraphs: [
                "The design of games is the solving of imagined problems. Unlike productivity applications, which are designed to minimise challenge and maximise usability, the design work involved in designing games must navigate these concepts more carefully: too much reliance on familiar design tropes, for instance, can be a death blow. Generalisable game design patterns have their place, but we seek to support game design researchers in making specific, nuanced observations about the game design process, play, and games as they may exist “in the wild”. In this paper, we have introduced a design-oriented game research method drawing on prototyping theory and software development practice that supports such observations, showed it in use for the game *It is as if you were doing work*, and shared an example of what an analysis based on Work’s materials can look like. While *game design* must likely remain a more or less subjective and artistic act, with the method we offer here, we hope that *game design research* can continue to reach for insight into the processes and spaces that game designers explore."
            ],
        },
        {
            title: "Footnotes",
            paragraphs: [
                "*[^1]: As we accumulate projects documented following this approach (which we call MDMA), we hone best practices for its various parameters and document them here: http://www.gamesasresearch.com/mdma.*",

                "*[^2]: We invite readers of this paper to examine the archived materials of Work and come to their own conclusions, for example*",
            ]
        }
    ],
    bibliography: [
        {
            id: 1,
            title: "2017. GDC Vault. (2017). [https://www.gdcvault.com/](https://www.gdcvault.com/) ",
        },
        {
            id: 2,
            title: "Espen Aarseth. 2001. Computer Game Studies, Year One. [http://gamestudies.org/0101/editorial.html](http://gamestudies.org/0101/editorial.html). Game Studies 1, 1 (July 2001). "
        },
        {
            id: 3,
            title: "Pippin Barr. 2016-2017. ‘It is As If You Were Doing Work’ Process Diary. (2016-2017). [https://github.com/pippinbarr/itisasifyouweredoingwork/tree/master/process/README.md](https://github.com/pippinbarr/itisasifyouweredoingwork/tree/master/process/README.md)"
        },
        {
            id: 4,
            title: "Pippin Barr. 2017. It is As If You Were Doing Work. (2017). [https://pippinbarr.github.io/itisasifyouweredoingwork/](https://pippinbarr.github.io/itisasifyouweredoingwork/) "
        },
        {
            id: 5,
            title: "Pippin Barr. 2017. ‘It is As If You Were Doing Work’ [Commit c0a887d89](https://github.com/pippinbarr/itisasifyouweredoingwork/commit/c0a887d890ffd2a0b2b2dbc34aa1a214f9d3b3e4) (2017)."
        },
        {
            id: 6,
            title: "Pippin Barr. 2017. ‘It is as if you were doing work’ data.js file. (2017). [https://github.com/pippinbarr/itisasifyouweredoingwork/blob/master/js/data.js](https://github.com/pippinbarr/itisasifyouweredoingwork/blob/master/js/data.js)"
        },
        {
            id: 7,
            title: "Pippin Barr. 2017. ‘It is As If You Were Doing Work’ GitHub Repository. (2017). [https://github.com/pippinbarr/itisasifyouweredoingwork](https://github.com/pippinbarr/itisasifyouweredoingwork) "
        },
        {
            id: 8,
            title: "Pippin Barr. 2017. ‘It is as if you were doing work’ screenshot of UI with alien text. (2017). [Commit 51b5f5d88](https://github.com/pippinbarr/itisasifyouweredoingwork/commit/51b5f5d883f146b8d232f706e4cac802b33a6783)"
        },
        {
            id: 9,
            title: "Pippin Barr. 2017. ‘It is as if you were doing work’ screenshot of UI with placeholder text. (2017). [https://github.com/pippinbarr/itisasifyouweredoingwork/blob/master/process/images/Screen%20Shot%202017-01-05%20at%2012.03.57.png](https://github.com/pippinbarr/itisasifyouweredoingwork/blob/master/process/images/Screen%20Shot%202017-01-05%20at%2012.03.57.png) "
        },
        {
            id: 10,
            title: "Pippin Barr. 2017. Press Kit for ‘It Is As If You Were Doing Work’. (2017). [https://github.com/pippinbarr/itisasifyouweredoingwork/tree/master/press/README.md](https://github.com/pippinbarr/itisasifyouweredoingwork/tree/master/press/README.md) "
        },
        {
            id: 11,
            title: "Rob Beschizza. 2017. It Is As If You Were Doing Work is a browser game celebrating Windows 3-era cubicle drudgery. (2017). [https://boingboing.net/2017/07/04/it-is-as-if-you-were-doing-wor.html](https://boingboing.net/2017/07/04/it-is-as-if-you-were-doing-wor.html)"
        },
        {
            id: 12,
            title: "John Biggs. 2017. New game simulates the old grind. (2017). [https://techcrunch.com/2017/07/06/new-game-simulates-the-old-grind/](https://techcrunch.com/2017/07/06/new-game-simulates-the-old-grind/) "
        },
        {
            id: 13,
            title: "Mark Blythe, Kees Overbeeke, Andrew Monk, and Peter Wright. 2003. Funology: From Usability to Enjoyment. Springer Netherlands. "
        },
        {
            id: 14,
            title: "Mark Blythe, Jamie Steane, Jenny Roe, and Caroline Oliver. 2015. Solutionism, the Game: Design Fictions for Positive Aging. In Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems (CHI ’15). ACM, New York, NY, USA, 3849–3858. [https://doi.org/10.1145/2702123.2702491](https://doi.org/10.1145/2702123.2702491) "
        },
        {
            id: 15,
            title: "Tom Boellstorff, Bonnie Nardi, Celia Pearce, and T. L. Taylor. 2012. Ethnography and Virtual Worlds: A Handbook of Method. Princeton University Press. "
        },
        {
            id: 16,
            title: "Julia Ayumi Bopp, Elisa D. Mekler, and Klaus Opwis. 2016. Negative Emotion, Positive Experience?: Emotionally Moving Moments in Digital Games. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (CHI ’16). ACM, New York, NY, USA, 2996–3006. [https://doi.org/10.1145/2858036.2858227](https://doi.org/10.1145/2858036.2858227) "
        },
        {
            id: 17,
            title: "John Bowers. 2012. The Logic of Annotated Portfolios: Communicating the Value of ’Research Through Design’. In Proceedings of the Designing Interactive Systems Conference (DIS ’12). ACM, New York, NY, USA, 68–77. [https://doi.org/10.1145/2317956.2317968](https://doi.org/10.1145/2317956.2317968) "
        },
        {
            id: 18,
            title: "Richard Buchanan. 1985. Declaration by Design: Rhetoric, Argument, and Demonstration in Design Practice. Design Issues 2, 1 (1985), 4–22. [https://doi.org/10.2307/1511524](https://doi.org/10.2307/1511524) "
        },
        {
            id: 19,
            title: "Marion Buchenau and Jane Fulton Suri. 2000. Experience Prototyping. In Proceedings of the 3rd Conference on Designing Interactive Systems: Processes, Practices, Methods, and Techniques (DIS ’00). ACM, New York, NY, USA, 424433. [https://doi.org/10.1145/347642.347802](https://doi.org/10.1145/347642.347802) "
        },
        {
            id: 20,
            title: "John M. Carroll and John M. Thomas. 1988. FUN. SIGCHI Bull. 19 (January 1988), 21–24. Issue 3. [https://doi.org/10.1145/49108.1045604](https://doi.org/10.1145/49108.1045604) "
        },
        {
            id: 21,
            title: "Dennis Chao. 2001. Doom As an Interface for Process Management. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI ’01). ACM, New York, NY, USA, 152–157. [https://doi.org/10.1145/365024.365078](https://doi.org/10.1145/365024.365078) "
        },
        {
            id: 22,
            title: "Lucas Colusso, Gary Hsieh, and Sean A. Munson. 2016. Designing Closeness to Increase Gamers’ Performance. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (CHI ’16). ACM, New York, NY, USA, 3020–3024. [https://doi.org/10.1145/2858036.2858206](https://doi.org/10.1145/2858036.2858206) "
        },
        {
            id: 23,
            title: "Patricia Ivette Cornelio Martinez, Silvana De Pirro, Chi Thanh Vi, and Sriram Subramanian. 2017. Agency in Mid-air Interfaces. In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI ’17). ACM, New York, NY, USA, 2426–2439. [https://doi.org/10.1145/3025453.3025457](https://doi.org/10.1145/3025453.3025457) "
        },
        {
            id: 24,
            title: "Nigel Cross. 2011. Design Thinking: Understanding How Designers Think and Work. Bloomsbury Publishing. "
        },
        {
            id: 25,
            title: "Peter Dalsgaard. 2010. Research in and Through Design: An Interaction Design Research Approach. In Proceedings of the 22Nd Conference of the ComputerHuman Interaction Special Interest Group of Australia on Computer-Human Interaction (OZCHI ’10). ACM, New York, NY, USA, 200–203. [https://doi.org/10.1145/1952222.1952265](https://doi.org/10.1145/1952222.1952265) "
        },
        {
            id: 26,
            title: "Peter Dalsgaard and Kim Halskov. 2012. Reflective Design Documentation. In Proceedings of the Designing Interactive Systems Conference (DIS ’12). ACM, New York, NY, USA, 428–437. [https://doi.org/10.1145/2317956.2318020](https://doi.org/10.1145/2317956.2318020) "
        },
        {
            id: 27,
            title: "Heather Desurvire, Martin Caplan, and Jozsef A. Toth. 2004. Using Heuristics to Evaluate the Playability of Games. In CHI ’04 Extended Abstracts on Human Factors in Computing Systems (CHI EA ’04). ACM, New York, NY, USA, 15091512. [https://doi.org/10.1145/985921.986102](https://doi.org/10.1145/985921.986102)"
        },
        {
            id: 28,
            title: "Sebastian Deterding. 2017. The Pyrrhic Victory of Game Studies. Games and Culture 12, 6 (2017), 521–543. [https://doi.org/10.1177/1555412016665067](https://doi.org/10.1177/1555412016665067) "
        },
        {
            id: 29,
            title: "Steven P. Dow, Kate Heddleston, and Scott R. Klemmer. 2009. The Efficacy of Prototyping Under Time Constraints. In Proceedings of the Seventh ACM Conference on Creativity and Cognition (C&#38;C ’09). ACM, New York, NY, USA, 165–174. [https://doi.org/10.1145/1640233.1640260](https://doi.org/10.1145/1640233.1640260) "
        },
        {
            id: 30,
            title: "Markku Eskelinen. 2001. The Gaming Situation. [http://www.gamestudies.org/0101/eskelinen/](http://www.gamestudies.org/0101/eskelinen/). Game Studies 1, 1 (July 2001). "
        },
        {
            id: 31,
            title: "Daniel Fallman. 2007. Why Research-Oriented Design Isn’t Design-Oriented Research: On the Tensions Between Design and Research in an Implicit Design Discipline. Knowledge, Technology & Policy 20, 3 (01 Oct 2007), 193–200. [https://doi.org/10.1007/s12130-007-9022-8](https://doi.org/10.1007/s12130-007-9022-8) "
        },
        {
            id: 32,
            title: "Mary Flanagan and Helen Nissenbaum. 2014. Values at Play in Digital Games. The MIT Press. "
        },
        {
            id: 33,
            title: "Christopher Frayling. 1993. Research in Art and Design. Royal College of Art. "
        },
        {
            id: 34,
            title: "Tracy Fullerton. 2008. Game Design Workshop, Second Edition: A Playcentric Approach to Creating Innovative Games (Gama Network Series) (2 ed.). Morgan Kaufmann. "
        },
        {
            id: 35,
            title: "Wei Gai, Chenglei Yang, Yulong Bian, Chia Shen, Xiangxu Meng, Lu Wang, Juan Liu, Mingda Dong, Chengjie Niu, and Cheng Lin. 2017. Supporting Easy Physicalto-Virtual Creation of Mobile VR Maze Games: A New Genre. In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI ’17). ACM, New York, NY, USA, 5016–5028. [https://doi.org/10.1145/3025453.3025494](https://doi.org/10.1145/3025453.3025494) "
        },
        {
            id: 36,
            title: "Bill Gaver. 2002. Designing for Homo Ludens. i3 Magazine (June 2002), 2–5. "
        },
        {
            id: 37,
            title: "William Gaver. 2011. Making Spaces: How Design Workbooks Work. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI ’11). ACM, New York, NY, USA, 1551–1560. [https://doi.org/10.1145/1978942.1979169](https://doi.org/10.1145/1978942.1979169) "
        },
        {
            id: 38,
            title: "Danny Godin and Mithra Zahedi. 2014. Aspects of Research through Design. In Proceedings of the Design, Research, Society Conference 2014. Umea, Sweden. "
        },
        {
            id: 39,
            title: "Steve Harrison, Deborah Tatar, and Phoebe Sengers. 2007. The Three Paradigms of HCI. In alt.chi 2007. "
        },
        {
            id: 40,
            title: "Henriette C M Hoonhout. 2008. Let the Game Tester Do the Talking: Think Aloud and Interviewing to Learn About the Game Experience. In Game Usability: Advancing the Player Experience, Katherine Isbister and Noah Schaffer (Eds.). Morgan Kaufmann, Chapter 4, 65 – 77. "
        },
        {
            id: 41,
            title: "Robin Hunicke, Marc Leblanc, and Robert Zubek. 2004. MDA: A Formal Approach to Game Design and Game Research. In Proceedings of the Challenges in Game AI Workshop, Nineteenth National Conference on Artificial Intelligence. "
        },
        {
            id: 42,
            title: "Patrick W. Jordan. 2000. Designing Pleasurable Products: An Introduction to the New Human Factors. Taylor & Francis, London. "
        },
        {
            id: 43,
            title: "Mallory Ketcheson, Luke Walker, and T.C. Nicholas Graham. 2016. Thighrim and Calf-Life: A Study of the Conversion of Off-the-Shelf Video Games into Exergames. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (CHI ’16). ACM, New York, NY, USA, 2681–2692. [https://doi.org/10.1145/2858036.2858406](https://doi.org/10.1145/2858036.2858406) "
        },
        {
            id: 44,
            title: "Rilla Khaled and Gordon Ingram. 2012. Tales from the front lines of a largescale serious game project. In Proceedings of CHI 2012. ACM Press, 69–78. [https://doi.org/10.1145/2207676.2207688](https://doi.org/10.1145/2207676.2207688) "
        },
        {
            id: 45,
            title: "Annakaisa Kultima. 2015. Game Design Research. In Proceedings of the 19th International Academic Mindtrek Conference (AcademicMindTrek ’15). ACM, New York, NY, USA, 18–25. [https://doi.org/10.1145/2818187.2818300](https://doi.org/10.1145/2818187.2818300) "
        },
        {
            id: 46,
            title: "Youn-Kyung Lim, Erik Stolterman, and Josh Tenenberg. 2008. The anatomy of prototypes: Prototypes as filters, prototypes as manifestations of design ideas. ACM Trans. Comput.-Hum. Interact. 15, Article 7 (July 2008), 27 pages. Issue 2. [https://doi.org/10.1145/1375761.1375762](https://doi.org/10.1145/1375761.1375762) "
        },
        {
            id: 47,
            title: "Regan Mandryk, Kori Inkpen, and Tom Calvert. 2006. Using Psychophysiological Techniques to Measure User Experience with Entertainment Technologies. Behaviour and Information Technology (Special Issue on User Experience 25, 2 (2006), 141–158."
        },
        {
            id: 48,
            title: "Joe Marshall, Conor Linehan, and Adrian Hazzard. 2016. Designing Brutal Multiplayer Video Games. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems (CHI ’16). ACM, New York, NY, USA, 2669–2680. [https://doi.org/10.1145/2858036.2858080](https://doi.org/10.1145/2858036.2858080)"
        },
        {
            id: 49,
            title: "Jean McNiff. 2013. Action Research: Principles and Practice. Routledge. "
        },
        {
            id: 50,
            title: "Florian Mueller and Katherine Isbister. 2014. Movement-based Game Guidelines. In Proceedings of the 32Nd Annual ACM Conference on Human Factors in Computing Systems (CHI ’14). ACM, New York, NY, USA, 2191–2200. [https://doi.org/10.1145/2556288.2557163](https://doi.org/10.1145/2556288.2557163) "
        },
        {
            id: 51,
            title: "Janet Horowitz Murray. 1997. Hamlet on the Holodeck: The Future of Narrative in Cyberspace. The Free Press, New York, NY, USA. "
        },
        {
            id: 52,
            title: "Nintendo. 2003. WarioWare. WarioWare, Inc.: Mega Microgames!. (2003). "
        },
        {
            id: 53,
            title: "Donald A. Norman. 1990. The Psychology of Everyday Things. Basic Books, New York. "
        },
        {
            id: 54,
            title: "James Pierce. 2014. On the Presentation and Production of Design Research Artifacts in HCI. In Proceedings of the 2014 Conference on Designing Interactive Systems (DIS ’14). ACM, New York, NY, USA, 735–744. [https://doi.org/10.1145/2598510.2598525](https://doi.org/10.1145/2598510.2598525) "
        },
        {
            id: 55,
            title: "Matt Ratto. 2011. Critical Making: Conceptual and Material Studies in Technology and Social Life. The Information Society 27, 4 (2011), 252–260. [https://doi.org/10.1080/01972243.2011.583819](https://doi.org/10.1080/01972243.2011.583819)"
        },
        {
            id: 56,
            title: "Tom Regan. 2017. Recreate the thrills of ’90s PC admin in this browser game. (2017). [https://www.engadget.com/2017/07/06/recreate-the-thrills-of-90s-pc-admin-in-this-browser-game/](https://www.engadget.com/2017/07/06/recreate-the-thrills-of-90s-pc-admin-in-this-browser-game/) "
        },
        {
            id: 57,
            title: "Jesse Schell. 2008. The Art of Game Design: A book of lenses (1 ed.). Morgan Kaufmann. "
        },
        {
            id: 58,
            title: "Donald A. Schön. 1983. The Reflective Practitioner: How Professionals Think in Action. Basic Books. "
        },
        {
            id: 59,
            title: "Ben Shneiderman. 2004. Designing for Fun: How Can We Design User Interfaces to Be More Fun? interactions 11, 5 (Sept. 2004), 48–50. [https://doi.org/10.1145/1015530.1015552](https://doi.org/10.1145/1015530.1015552) "
        },
        {
            id: 60,
            title: "Herbert A. Simon. 1996. The Sciences of the Artificial (3rd Ed.). MIT Press, Cambridge, MA, USA. "
        },
        {
            id: 61,
            title: "Anselm Strauss and Juliet M. Corbin. 1998. Basics of Qualitative Research : Techniques and Procedures for Developing Grounded Theory. SAGE Publications. "
        },
        {
            id: 62,
            title: "T.L. Taylor. 2002. Whose game is this anyway? Negotiating corporate ownership in a virtual world. In Computer Games and Digital Cultures Conference Proceedings. Tampere University Press, 227–242. "
        },
        {
            id: 63,
            title: "James Vincent. 2017. Relive the Windows 95 glory days with this work simulation game. (July 2017). [https://www.theverge.com/tldr/2017/7/6/15927338/work-simulation-game-windows-95-pippin-barr](https://www.theverge.com/tldr/2017/7/6/15927338/work-simulation-game-windows-95-pippin-barr) "
        },
        {
            id: 64,
            title: "Sebastien Wesolowski. 2017. “It is as if you were doing work”, un simulateur de travail pour un monde postemploi. (2017). [https://motherboard.vice.com/fr/article/8xaq4a/it-is-as-if-you-were-doing-work-un-simulateur-de-travail-pour-un-monde-post-emploi](https://motherboard.vice.com/fr/article/8xaq4a/it-is-as-if-you-were-doing-work-un-simulateur-de-travail-pour-un-monde-post-emploi)"
        },
        {
            id: 65,
            title: "Raymond Williams. 2003. Television: Technology and Cultural Form. Routledge. "
        },
        {
            id: 66,
            title: "Jerry Willis. 2007. Foundations of qualitative research: Interpretive and critical approaches. Thousand Oaks, SAGE PUBLISHING, CA. "
        },
        {
            id: 67,
            title: "Zhao Zhao, Ali Arya, Anthony Whitehead, Gerry Chan, and S. Ali Etemad. 2017. Keeping Users Engaged Through Feature Updates: A Long-Term Study of Using Wearable-Based Exergames. In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI ’17). ACM, New York, NY, USA, 1053–1064. [https://doi.org/10.1145/3025453.3025982](https://doi.org/10.1145/3025453.3025982) "
        },
        {
            id: 68,
            title: "John Zimmerman, Jodi Forlizzi, and Shelley Evenson. 2007. Research Through Design As a Method for Interaction Design Research in HCI. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI ’07). ACM, New York, NY, USA, 493–502. [https://doi.org/10.1145/1240624.1240704](https://doi.org/10.1145/1240624.1240704)"
        }

    ],
    figures: [
        {
            id: 1,
            src: "Figure1.png"
        },
        {
            id: 2,
            src: "Figure2.png"
        },
        {
            id: 3,
            src: "Figure3.png"
        },
        {
            id: 4,
            src: "Figure4.png"
        },
        {
            id: 5,
            src: "Figure5.png"
        },
        {
            id: 6,
            src: "Figure6.png"
        },
        {
            id: 7,
            src: "Figure7.png"
        },
    ]

}

export default ArticleData;