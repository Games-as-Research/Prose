
# February 24th 2025 

//Import the notes from github commits. 

## 5:00 PM 
After having developed prototype two, I am trying to use this to try and read the article. Oh my god... not to honk my own horn but FUCK This feels good. The last two months holding this form in my head and reading in PDFs has been a nightmare 

Double-clicking to reference the paragraph or source in my writing space is a fucking game changer for me. Pairing these side by side + enhancement on hover. When I read this with the hover on, the inner voice in my head is different, my focus is different. When I try reading it without the hover, the periphery is requesting my access, but with the hover on it has all my attention. 
![[Screenshot 2025-02-24 at 4.57.50 PM.png]]

But be damned these interactions the biggest advantage of this is the fact that this form gives me ideas. And by me I dont me specifically but it *will* inspire these ideas in other readers too; this is the whole point of creating this - to open the design space. Case in point: I showed it to TJ and he had the same reaction, he kept recommending how else I could enhance this, refine this.

I think each of these is a good illustration of how digital-first academic reading ought to be. From here-on, the ideas are adding a much smaller refinement and polish on the prototype. Which is great but a completely different direction. 

The goal is to illuminate the design space. What interactions change my reading behaviours, my reading process, my reading needs. 

When I translate from PDF to Web app, I make the paper fluid, the paper takes the form of the window (and at window_count = 1,  screen). Now I can open the article in whatever way I want  -- see [here](https://www.youtube.com/watch?v=LGAxxIqMZGg) 

When I spread the article out, introduce foregrounding, conditional rendering, and generally some meta-interactions, I change the way someone interacts with an article. This allows me to pay attention on the sections I want to pay attention to. 
The only thing that I think is missing is spatial navigation and hovering. This one is extremely important. I dont know if I should implement spartial navigation or if I should implement embedding things...  (nvm did it)

To record: 
1. Prototype Zero: Fluid Article 
2. Prototype One: Meta-interactions and Meta-Cues 
	1. Adds smoother transitions between paragraph foregroundings 
	2. Adds visual hierarchy to Bibliography as well 
3. Prototype Two: Writing 

## 10:30 PM 
There is a deliberate arms length that I have kept from hypertext and hyperlinking. For one, it has historically gotten a lot of attention but also two: hyperlink affords breadth-first search. There is some of that that happens but it is 

Future of Academic publication:
Once we start process

# February 18th 2025 

## 11:00 AM 
8. Modelling the paper as a graph -- the current and the next 
9. Demonstrating the need for a paradigm shift from academic articles as files to academic articles as software 
	1. Erasing the boundary between the reader and the paper. The form of the reader must be the form of the paper 
	2. Prototype zero 
10. The design space of The Digital Academic Article. the problem setting and the problem solving

Paper allows for reeading AND writing and with its persistence it also encourages being able to think alongside reading. Writing is how we think. 
What is writing like in PDFs? 

This one is focused on reading. I think when the translation from paper to screen happened we only focused on the superficial functions of reading not the underlying intentions and motivations. 

When we put it like this we realize, an article to read needs also to be an article to write. An article needs to be part of something I am writing




## 8:35 AM
Darling you've got to let me know
should I write or should I code? 

I think I need to write first so I have some understanding of what Im reflecting on, and so I also have theoretical solid grounds to build on. I should write first because I need to get my thoughts in order. I can change the writing later as well. 


# February 17th 2025 

## 3:54 PM
There is nothing wrong with skeuomorphic design, it is the first step. This here is the next step. 
For animations, I have found a very sophisticated library: GSAP. As I said in an earlier entry, real world interactions are animated, we dont get things shifting by blinking. Animations and transitions are to be key parts of the digital article. 

From GSAP I only need scrolling for now. That is what Im especially interested in because I need the transition from paragraph to paragraph and from section to section. Lets see what this looks like. 

Another thing I was thinking was about modelling an academic paper as data and how the entities in an academic paper might relate to each other. Entities being paragraphs, sources, citations, sections, etc. This would be a graph structure and the thing with a graph structure is that it can be treated linearly and spatially both. Linearly, it is essentially a linked list, where as spatially it is a graph. 

This is getting more and more complex because there is the problem solving aspect of building this and the problem setting aspect of designing this... I have to be sharp, gotta stay focused on the task at hand; harder since I can't breathe properly and my blood pressure is high... Might need another day to finalize this. 

Also as I imagine this and as I read this text on the screen, it is getting harder to feel comfortable with any other form of text considering that the one I am visualizing is in my opinion the superior text

## 12:30 PM 
==A paradigm shift from `digital text as files` to `digital text as software`==

PDFs are saturated because there are things that we cant do on paper, and PDFs are paper on screen. And the form of the paper is constrained by  a) space and b) static persistence. So it is futile to push for the paper-screen boundary. The only time digital space is constrained is by the size of the screen and even then you may pan and zoom. So digital space overtakes the spatial, static, and mutable constraints of paper. There may be layers upon layers stacked on top of each other and it would make no difference. 

Digital text as software will be able to do all that we could do on paper and MORE. For instance viewing a dataset or running a code snippet is not something you can do on paper and PDFs dont afford that dynamism either. PDF may evolve over the next years and I'm sure there are more that newer versions are capable of and will be but the fundamental assumption of "digital documents" limits us. We need to see that digital text is software and so it would make sense to create and distribute digital text as software. Each paper as an app? Each paper as a plugin to one main reader? A web application with access to all these papers? 

Stopped: 1:09 PM --- really hungry... 

# February 16th 2025 

## 11:53 AM 
I am starting the development of this by converting a paper into this but I think if the final version is this form of my own thesis, that would be cool. 

I've got the structure of the essay down in my web app. 
This is the first prototype. This includes the basic structure. 

Next up this needs to be ==enhanced with metacues==. These are going to ==situate== me and guide my attention. ==Guiding my attention== on the screen is of peak importance. These seemingly minor differences in UI design have gotten us from videos on screen to hours of addictive doomscrolling with short, vertically scrolling videos. 
==Vertical== motions imply ==continuity==. ==horizontal== motions imply a change in context. ==Hover== implies conditional viewing -- the "kinda" attention. 
When Im in a section I need to know where I am in the whole. The 

I am thinking about the side panel.  This panel can serve as my commentary, as the settings panel, as the bibliography... this is where the tensors concept comes in -- I can stack panels on top of each other, much like Im doing with the sections of the essay.
Footnotes, bibliography of that paragraph. 


Another thing I need to think about is the subsections and sub-subsections. should I create a recursive structure where if there is a subsection I should have it render itself as a subcomponent? 

I'm thinking the paragraphs should be numbered to orient the user. 

There is an idea of adding a chat box, essentially. One that looks like I'm talking to the paper. But here, what will matter is what one can do with the chat messages after they have been sent. It would be interesting to explore what this experience is going to feel like if I start sending them to AI? 
I think it is useful to think of Eric hayot at this point where he says we dont write what we have thought, we write to think. So the reader will write in that chatbox as they are reading. But these reflections need to be anchored to the main text some how... Nodes? Not sure.... 
How will these notes/thinking/writing come together with the main text. Zotero does page numbers but I have done away with page numbers. Another thing missing with zotero is that in their annotations sidepanel, their visual hierarchy gives more importance to the page number. This is counterproductive to the purpose of highlighting i.e. revisiting an important piece quickly. The main thing should be the highlighted text, or at least a part of it, and the page number should be a secondary thing.  


I also think there should be a way for readers to export something but again... we are then limited to PDFS... ugh. 

Nodes is an interesting idea and goes very well with highighting. Generally, any highlighted section can be a node. But highlights are too jarring. If I want to place a node on the entire paragraph, then it visually implies the entire paragraph is important to glance on, but in reality the really important thing is what I am crafting with the node. 

I think a highlight can be a node but a node is not necessarily a highlight. 
The smallest unit of a node is a word. The largest unit may be a paragraph? Or maybe nodes can be constructs in an essay... 
Constructs would include: 
11. word
12. sentence 
13. paragraph 
14. section (and sub sections)


I was thinking of reconfiguration as an affordance. If I were to think of this in the simplest form it would be displaying different sections at once to draw connections. But then if I think about it some more, it is about guiding my attention. If I were to reconfigure the article I would remove sections, I would change the order, I would hide some paragraphs that are not relevant. I would try and maybe extract the through-line of the essay. I would do the things one does when active reading an article. So the next question is: What do we do when we are active reading? And not just the actions -- since those are determined by affordances of the medium (someone wielding a sword kills differently than someone wielding a bow and arrow) -- but the intention.

Form follows Function 
Function follows Intention
Form ***must*** therefore follow **intention**

What does the active reader try to achieve? If, as Bret Victor puts it, 

What about rewriting a section? Then contrasting them? 


# February 15th 2025

## 3:32 PM 

The paper is going to have sections and content. The content is going to be divided into paragraphs. These paragraphs are the quanta of an essay since they correspond to an idea. 

Designing for the web, I have two panels. The one on the left is a control panel of sorts where the reader gets to modify things. The one on the right is the main content. This is a pretty standard layout for desktop apps. 

I'm also thinking about how the user will make notes, where will that be. Some 

The guiding question for me here should be, what would make the reader want to read in the digital form? What kind of interactions in the digital form will make the reader prefer the digital form? 

To answer this, I must think, what is it that the user does in print form? When I read through a paper I visualize what Im reading, I follow through the argument the reader is making, I try and connect the pieces. 

Why do people Active Read? What is the intention there? 
Active reading is never done in isolation. Can someone just read without writing? 
Active reading involves assimilating what one is reading with what one already knows. What about new things? Things that one is reading for the first time? (well for any adult, this is unlikely, if not impossible)



# February 12th 2025 

## 12:48 PM 
I think I've read enough -- I need to move to building. I'm going to start again in a couple hours. What I need is to bring the text in and start playing with it. 

Prototype Zero is about meta-cues. Its about the direct interaction with the text on the screen. 


One thing I think that should be there in digital, interactive text is visual aids. And in this translation I'm doing of the paper,  


# February 11th 2025 

## Meta-cues
The message that the form sends to the reader to orient them, 

The real world is animated. As I move between pages, i don't magically go from one to the other, my movements and the page movements are smoothed; temporally spread out. 
Animations are meta cues, they guide the eye and hence the maintain attention. 

## 2:54 PM 
I paused for a bit to read the theoretical stuff a bit more to develop my prototypes on. Another roadblock in there was the red journal stuff - it was all on paper and I had to digitize it which I hadn't done. When my notes arent digitized I cant put them together, search with them. Since I write in digital, my notes need to be in the digital medium because switching modalities has a significant overhead as well. This has been a good exercise in investigating my own weaknesses and things I need to maintain. Today I come back to coding this. 

Also that I was just so goddamn depleted I needed some rest. 

Stopping 2:59PM -- going back to reading and writing. 
# February 5th 2025 

Form of the paper and the article-reader boundary. 
This understanding can be enhanced if I were to compare this in digital form and the print form because in print form this boundary does not exist -- Is this due to the persistent nature (materiality) of paper? 
This only occurs in the digital form. 

-- Affordances of paper article,  K Ohara 

## 8:06AM 
Continuing, setting up the boilerplate stuff -- done 

I can begin coding the first prototype.
For this, I need to 
15. read the MD file and bring it into its constituent parts. These will be:
	1. The headings 
	2. The sections 
	3. The paragraphs 
	4. The references & bibliography 
	5. The footnotes 
	6. The figures and figure references
16. then I need to put them on the screen. One section goes the whole way, one paragraph highlighted at a time. Switch sections horizontally. 
17. Once this is done, I'm interested in:
	1. Changing citation style, font size, font family (serif and sans serif), and line spacing up to the reader. Put citations and footnotes on hover 
	2. A word highlighter that the reader gets to shift with the arrow key and it helps the reader focus on the paper. arrow keys are used to move between the arrow  
	3. In this one, I also need to lay extra emphasis on metacues. In print form, we have the thickness of the page and we can move forward or backwards at a non-linear pace, we can skim in a different way than we do on screen... perhaps a way to see the whole of the paper and then hover the mouse on the page to see it in a more readable form... 
	4. Hover really is a brilliant interaction it affords "kinda". as in... unlike other transitions which are integral, black and white, hover invites me "come inside, have a look dearie" and if you like something, take the next step. 
18. prototype zero is about only reading. prototype one is going to be about writing alongside reading. The prototype two works with shifting things around, which also includes opening multiple pages at once and connecting things together in them; concept maps and the sort. As for four, Im wondering if its interesting to put some AI into this that *forces* the reader to read. This makes it the edgy part again. A co-reader that pushes you to write as you read. try to make the reader uncomfortable or challenge with questions?
19. I still havent gotten a good answer about: what do we want to do when we read on screen? How does a computer afford and how do we want to read. On a paper we can run a pencil along the text but on screen we cant do that. But really: What do we want to do when we read on a screen? HOW Do we want to read on a screen? 

Stopping at: 12:15PM 

## 12:00AM 
Fixed the problems with MD on github. Don't know why though, its kinda irrelevant to my purpose... lol  
Anyway. Whats next? 

I'll stop here and move to writing and let this stir in my mind. I need a throughline of execution - like the thread for Tanjiro. 
Stopped 12:32AM 


# February 4th 2025 

## 9:45 PM 

Okay lets begin. I want to start and take prototype zero to a far enough state. As for the template Im using for repository, I'll change the home screen to the different prototypes. 
I have to first make a paper into an MD file. 

--- 10:09 PM MacOS wants to update now, fuckin A... brb 
--- 10:54 Back in action.

Paper converted 
End of day


## 11:20 AM 
Okay. I've been processing this for about 2 months in my head and it is finally go time. I imagine this system as one base prototype that provides the core structure of an academic article, and then 4 other prototypes that use this base structure to build other interactions on top of it. 

To power this base structure I will convert a paper - likely Rilla and Pippin's paper from 2023 - into a formatted MD files collection. This strips the paper of its strict formatting from the publisher and extracts the data into a malleable form. 

From this I build a system in react that loads this MD file into a web app.
Scrolling vertically implies continuity, whereas scrolling horizontally -- like cards -- implies a shift in the entity. So with that rationale in mind I think each section of the paper should be a vertical entity and transition between each section should be a horizontal swipe. 

A paragraph is the quanta of an essay. A paragraph represents an idea in an essay. So instead of swiping continiously, there should be a gentle "flick" that jumps between paragraphs. This way, there is also a ==meta-cue== for the reader: "so and so idea was 4 flicks ago". 

I think for prototype zero this idea of meta-cues is of peak importance. This is one thing severely missing from the current form and I think this is exactly what disorients people or makes them feel out of control. 

I am yet to think of how sub-sections should be dealt with but I will figure that out once this much is in. 

As for the other prototypes, I have some main ideas . 
20. Writing and Rewriting layers
	1. to engage with a text we need to be able to write our thoughts. As Eric hayot writes, we dont write what we have thought, we write to think. (case in point, this very journal).
21. Ability to restructure the paper
	1. People don't read a paper in the same order as is put together by a publisher, they read it usually first as abstract only, then introduction and conclusion, then maybe some survey of the methodology and look at the discussions 
	2. Point being: the ability to focus in on things that
22. concept map -- nodes 
23. deep references 
	1. The ability to reference the nodes or markers in *other* papers? how would this work 
24. manual markers
	1. Like bookmarks at different spots of the paper drawing a through-line through the paper.  
25. lowlighting 
	1. the reverse of highlighting? Would this be useful? How would this make the reader feel? 
26. Still curious to think of something that would be somewhat... *edgy* like *forcing* a user to be an active reader. 

**Stopped: 11:44 AM** 
 
# January 9th 2025 

- If we think about it, the ability to write in margins is not really a feature but more like a “making it work”. We do it because the material doesn’t deny us — A library book annotated For instance is frowned upon. 
- So I wonder what the optimal invitation would be in this case. Rewriting? Summarizing? 

- Highlighting is to guide the eyes to focus on whats important. Color coding was something people did ad-hoc; it was a way to group/cluster information
- Based on these, I wonder how useful it is to continue the note-taking and highlighting metaphor into the digital realm 

---

Why game-design research to illustrate the concept? Why playful ways to communicate research? 

27. already plenty of science, computer science and programming examples 

I think Game design is a nice deviation. It is also that game design is focused significantly on digital games. While all games are interactive, digital games lend themselves nicely to illustrate the argument of playful/playable/interactive research communication.
It is also that game design is such an inter/multi/trans disciplinary area that arguments that apply to game design can then be applied to other — more “serious” — areas of study. 

It is also that I have been funded for game design research communication and I myself am(was) a game developer. 

---
- The screen is only a barrier/feels like one because we (want to) engage and perceive the object like a paper. 
- Which is why when we read a paper in a tablet with a stylus we feel a lot more comfortable because it feels closer to our expectations of the medium. 

- If the artifact was in fact digital native/first, and afforded engagements as such, then such needs wouldn’t be there. 
- I speculate that navigation and position through/in a paper is very important for learning because as I read, I construct a whole in my head, I construct the schema(ta) for the knowledge embedded in the text; The tool of knowledge communication ought to help me figure that out, construct it. 
- The digital form should transcend the limitations imposed by the materiality of paper. 

---

This is research about academic reading and speculates on the academic article as an artifact for education; its form its medium, the knowledge embedded into it and the way it communicates research. 


The academic article encapsulates the teaching and learning intentions of the writer and the reader. 

How does one learn from the academic article? 
How do we learn from it in print form? How do we engage with it in print form? And what about the digital form? And what more could we do? 

---

- The purpose and intention of reading an academic article may/should translate across mediums but not necessarily the structure
- There will be resistance to the adoption of such a digital first paper because people will need to relearn to use it
- There may not even be a way to print it which means that the people who want to print it all will certainly to want to read this way. 
- But this lossy conversion is important. There has to be an advantage to reading digitally that is exclusive for user conversion — there has to be more that the digital article can do, is capable of, can be used for, for people to consider relearning how to read with this. besides, if this is intuitive, the process can be made easier/learning curve be made smoother.
- creation problem -> adoption problem 
- PDFs neatly pack the content of an article and retain their form across media — which is one of  its constraints as well. PDFs afford consistency but refuse mutability, and because they are so generic, like android devices, there is too much variation that forbids any use case specific functionality. 
- The ecosystem of Zotero allows making the paper your own and storing it reliably.  

## Archive

![[Prose_Outline.jpeg]]
# January 8th 2025

The digital world is an entirely new universe. Anything that I need there, I must build it from scratch (in the same way as it exists in the real world). All interactions need to be rebuilt. So if someone needs a certain ability, to be able to shuffle the pages of a PDF, that functionality needs to be built into it, it needs to be meticulously well defined and programmed; call that a side effect of programming. 

For these interactions to be intuitive, we need gestures and animations. But when we read on a computer, we are limited by the cursor; which just might be why people prefer to read on ipads, but even there the gestures are limited and contained in the 

But see that is not the case with the real world. The ability to shuffle papers of a printed article are a consequence of a page being a discrete entity that can be moved around and is not inherently bound to the container that is the collection of pages we call the printed article. It is a byproduct of the laws of nature, shuffle-able papers did not need to be invented. Print reading allows shuffling for anyone with hands, it enables the reader to impose their own sequence, structure, and as a result: meaning. 
A book, for instance, may *deny* shuffling, a bound book does not afford the shuffling of pages. But then you can go ahead and tear a page out. Once again, a byproduct of the laws of nature. The force exerted on the page i stronger than the structural integrity of the materials used in the book (paper, glue, thread, binding, etc.). Someone who is unable to exert this strength, or access an angle at which breaking force can be applied will not be able to tear the page out of the book. 

The universe we inhabit affords us through the laws of nature, we can directly impact it because we can apply forces. 

But in the digital realm, in the universe of bits, we do not have that degree of freedom/control. In the digital space, all interactions need to be programmed, built from the ground up. There are few side effects and pages cant be torn. And so if every possible interaction needs to be programmed, then and built into the system as an intuitive thing, (if a user is going to interact with a system their expectations need to be met, enough for them to be able to be productive while they adapt to the new things in the system.) then a skeuomorphic, linear translation is an inadequate version of the article, which is why we find people printing the article to read it on paper where their expectations match the affordances.  

The reader doesn't get e-readers where they can impose their own structure on paragraphs or pages of an article, unless the underlying interactions are programmed in, which can then afford a certain kind of ability to the reader. 

The ability to impose a unique order of pages/sections along with the ability to rewrite paragraphs, invites the reader to write as they read. These two interactions together invite the reader to now make sense of the paper in their own way. This breaks the rigidity of the paper as the author saw it and allows the reader to approach it on their own level.  
Then the ability to compare the rewritten with the original, or multiple rewritten versions over time helps the append more material, isolate section sand draw connections between concepts, write a second layer of narrative on top of the paper, write multiple of these layers 

The above mentioned challenge with computing, of having to build everything from the ground up, is precisely what is the key strength of computation. No matter how pedantic and meticulous one needs be when developing these tools, the system is not bound by space and instead of physics, these systems lean on human psychology. `Talk about bruner's three representations and how this leans on the visual part. Then talk about what Alan kay had to say about this.` 

This now begs the question once again: What is the boundary between the form of the paper and the form of the reader. Because when we look at a two column layout, that is not the form of the reader it is embedded in the pdf. 

In the real world we are able to isolate a page and remove it from the whole. In the digital world however, the entire paper is contained within a pdf. If i were to remove the page, it would then be contained inside another pdf but it can not exist outside the container. 


- How would we shuffle pages inside a pdf? Why do we even have pages? 

Digital reading should be enhanced reading, we are finally free from the constraints of text. 
*"But now I'm free... there are no strings on me..."*

What's missing? What makes it worse than print reading?  




-----
Reading
	Academic Reading 
		Digital Academic Reading 

Writing 
	Academic writing 
		Writing tools  
Reading and Writing (in this context) are inherently tied together. 

The thing that is confusing me here is that I don't know how to go about researching this. I worry that what if the thing I'm reading is not useful or is wasteful? OR what if Im going in the wrong direction? 
I am trying to conserve time, I am trying to remember things as I read them for the first time. This leads to a fear of forgetting the things I am trying to read, what if I cant retain what Im reading, this is taking away my attention from reading it and that is ruining my reading ability. 

If I dont remember exactly, if I have paid attention I will remember. Thats the bottom of it. Any further is going in overthinking territory. I know from prior experience. Yes I do. Nobody has written a thesis in 2 days? Watch me write it.


The goal of my dissertation is to explore digital reading. 
*What if we were to have you explore ==making design knowledge playable==, building off the tech approach you made for Reflective Surfaces?* 
*it's about ==communicating (research) knowledge in playable ways==*


---
The question that keeps bothering me as I read the material is whether I'm reading the right material. 
What if I'm going in the wrong direction, what if I'm wasting time? 

# January 4th 2025 

What are the affordances of the paper that transcend it, beyond the interactions programmed in the reader?  
That is, at what point does it stop being the affordances of the reader and start being the affordance of the paper? 

How is an affordance not the affordance of the e-reader? 
Where do we draw the line between the form of the paper itself and the form of the e-reader? 

28. A PDF contains data
29. Data goes into the reader 
30. Reader parses the data and displays it
31. If the reader alters the way it parses the data, has it become a new form? And is this a new form of the paper? 

So the question arises: what is the form of the paper? Is the paper itself formless?  

In this research, let us unpack the problem of the `interactive research paper`

What I want to do with this thesis is open up the problem of the (~~interactive~~) digital research article and how the digital research article ought to afford differently. 

I want to unpack the problem and explore ~~all~~ some of the possible avenues. Unlike the hour-glass structure, this one is more like a crawled maze. 



# January 2nd 2025 
This research is not about replacing the print form, but establishing a unique form/identity of the digital form that is more than a skeuomorphism. This is also ==not about the future of the print publication==, that is not quite the point. This research is about the form of the digital academic paper. 

==if we are in the digital sphere, how do we engage with our digital publication in a digital-first manner.== 

What does digital-first even mean?

Who am I writing this thesis for? 
32. The ==audience is people like who I was when I started on this==. So when I present a literature review, I write it such that it encapsulates all the efforts that have gone into this, historically. 
33. when I write ==the introduction it is to explain to such a reader what Im doing as a whole and why this is worthwhile.== 
34. This is not about criticizing others but more ==about synthesizing everything== that has come before so as to not repeat their mistakes/lacking and to build on top of their successes for the purpose. 
35. The ==methodology is supposed to express how I'm going to go about the research==. As a master's student, the purpose of the thesis is to demonstrate that I am capable of going about research independently. So I should be able to select appropriate methods for my research. 
36. The part that confuses me is whatever I build, ==how do I validate it?== How do I prove what I've built works and is valuable?
37. If I am able to deconstruct what I am building into parts - as I build it - and I am able to relate this to other research and argue for how this would support the learning process from reading in this form, then I think there is something there. 
38. If I can justify every part of the creation with other research, then I think I have something to stand on. 
39. The whole ought to be greater than the sum of its parts. 
40. This is a research-creation thesis so the challenge of any other creation thesis should apply to this. For this I should read up the 

**Questions**
41. What is it that I'm doing when I'm reading academic text? 
42. And How can the digital form help me do this better? 
43. Is the current digital form doing that for me? 
44. How do we read academically? 
45. How does the digital form afford now? What are the affordances of a PDF in adobe? 
46. How is this digital form better than the print form and how is the print form better than the digital form? 
47. Under what conditions would people choose the digital form over the print form? 



# December 29th 2024 
My research is about the academic paper, how it is presented and the lack of interactivity with the paper and the data the paper is built on. The Contentions with digital reading are those of interruption and 
I have an introduction written for my thesis proposal which is talking about the problem with the digital form of the academic papers very succinctly. 

I think first I need to build my argument, find the sources Im going to lean on, and then I should think about morphing it to the audience's needs. 

As I read the Zimmerman 2010 paper, they also talked about justifying why I need a research creation approach to creation as Richy did. He was right. I should justify why I need a RtD approach to working. 
 
It is *supported* by digital reading in general but it has to be specifically about the digital reading of academic papers, especially in the context of game design. This is also 

---
I have been absorbing the material too much, I want to write more. I havent written in quite some time. 
What I need now is of the entire list that I have stuff in, I need subset of all the papers I need to read and review, I suppose this is the point where one defines an inclusion-exclusion criteria. 

---
I was reading these articles here: 
48. https://medium.com/@Max_Goldstein/exploring-explorable-explanations-92f865c8d6ba
49. https://worrydream.com/ExplorableExplanations/
50. https://docs.google.com/document/d/18zU3b51sPWoImlR_XXODTDeP6n9oIscouvpidXAr6Gs/edit?pli=1&tab=t.0

# December 11th 2024 

I have found another instance where an alternative of the Watts-Strogatz paper was presented. Havent really looked at it but it is here: [Scientific Communication as Sequential Art](https://worrydream.com/ScientificCommunicationAsSequentialArt/)

I got this from the Atlantic article I was reading and while that article has no references (hah, I see the value of them now lol) it does present very similar articles. if I could possibly dig deeper into this, I have an argument in the literature. 

In a literature review, I need not summarize an article but I need to analyze it. That is the purpose. If I can analyze the atlantic article, the two versions presented and put them all in conversation with my affordance lens, I think I have something solid. 

Im feeling more confident that this is a kind of lit review I can do and nail; else I was feeling very lost as to what to write and that I have forgotten how to write. 

I still dont know what exactly this domain is that I am operating in. If I dig into the roots of the watts-strogatz paper I might be able to find more about the academic discipline. 

I do really like the material of the atlantic article but it doesnt have any sources - should I email the author? 

In any case, I am dead sleepy now, I need to sleep... Will return tomorrow and should remember the 23:59 deadline better! 

# December 10th 2024

## Midnight 
I have primed my reading faculties by reading through eric hayot's book and I think im warmed up. I am able to focus and read at variable speeds. 

I read through the introduction of `Literatures in the Digital Era: Theory and Praxis` by Amelia Sanz and Dolores Romero and this has been a phenomenal starting point because they talk about a lot of the issues that I am targeting with my creation. My notes 

What Im gathering from this is that this is what I will use as the grounds to speculate on the affordances in the digital-first academic paper. There is plenty of literature on hypertext, in the domain of digital humanities: digital/electronic publications. This book also touched on **the difficulty of integrating interactivity with narrativity**. 

The problem/lacking with this book is what is lacking with all resources on the topic i.e. all of these resources are about digital publication in general, and mine is about academic reading, academic articles, research papers. Their Digital form. How much of their arguments still apply to mine? 

As for the proposal, God this is so disruptive to my work, I need to scope the problem, present an understanding of the domain in which my research lies. For the lit review of the proposal, I should describe the problem with digital reading and attempts at solving such a problem. 


--- 
there is a lot of discussion on other digital media being used as part of the academic paper, but nothing about the digital form of the academic paper. There is no discussion on using affordances of modern computation (Friendly User Interfaces, Connectivity, Responsive UI, Embedded Dictionaries, Embedded resources) 


## 5:01 AM
Fuck me... I have just stumbled upon the "Article of the Future" by Elsevier and this is exactly the direction.
In 2008 they had the article 2.0 competition 
Deadlinks a common problem. 

There is some work on the future of the academic article and that is exactly where my research lies but the question really is, what *is* that domain?  

Links: 
51. [Envisioning the scientific paper of the future](https://www.facetsjournal.com/doi/10.1139/facets-2019-0012#:~:text=We%20review%20four%20essential%20qualities,measurable%20impact%20beyond%20Impact%20Factor.)
52. [The future of Academic publishing](https://www.nature.com/articles/s41562-023-01637-2)
53. [Open Access and the Future of the Scientific Research Article](https://pmc.ncbi.nlm.nih.gov/articles/PMC6674633/)
54. [Beyond the journal: The future of scientific publishing](https://network.febs.org/posts/beyond-the-journal-the-future-of-scientific-publishing)
55. [The Scientific Paper Is Obsolete](https://www.theatlantic.com/science/archive/2018/04/the-scientific-paper-is-obsolete/556676/)
56. [Elsevier's article 2.0 contest](https://scholarlykitchen.sspnet.org/2008/10/14/elseviers-article-20-contest/)
57. [The “Article of the Future” — Just Lipstick Again?](https://scholarlykitchen.sspnet.org/2009/07/21/the-article-of-the-future-lipstick-on-a-pig/)
58. Lee, S. H. (2013). Print vs. Digital: The Future of Coexistence (for. .). _URN:ISBN:9780-2-0370-591-9_.
59. [how problematic is e-reading?](https://www.thenewatlantis.com/text-patterns/how-problematic-is-e-reading)
60. [How E-Reading Threatens Learning in the Humanities](https://www.chronicle.com/article/how-e-reading-threatens-learning-in-the-humanities/)
61. [Theses in Canada on "Digital Academic Reading"](https://library-archives.canada.ca/eng/services/services-libraries/theses/Pages/list.aspx?AW_S=Digital+Academic+Reading+#result_table)

A lot of the discourse in the future of scientific publication centres upon *open access*. What about the form of said publication? 
How can we make a form that the end user doesnt feel the need to print? How can we create a digital-first form, that is inherently superior to the print form in that it affords so much more than the print form? 

----
Lit Review Section guidleines:

62. “Reading from paper compared to screens: A systematic review and metaanalysis” 
63. Digital Humanities 
	1. Digital Editions - The skeuomorphism of texts 
	2. Born-Digital Dissertations 
	3. Topic Modelling 
64. Talk about “From papyrus to hypertext: toward the universal digital library”
65. Digital v/s Paper reading (primarily academic): (3) 
	4. problems with digital (academic/post-secondary) reading    
	5. Inadequacies of the print-form 
66. Digita Reading  (3)
	6. PostPrint    
	7. Affordances of Digital Reading 
	8. RCS, other interactive reading projects

Contextualize this problem within the general scheme of digital reading, as the geology prof from the reddit post said. 

--- 
Read so far: 
67. Kuteeva, M., & Mauranen, A. (2018). Digital academic discourse: Texts and contexts. _Discourse, Context & Media_, _24_, 1–7. [https://doi.org/10.1016/j.dcm.2018.06.001](https://doi.org/10.1016/j.dcm.2018.06.001)
68. Sanz, A., & Romero, D. (Eds.). (2007). _Literatures in the Digital Era: Theory and Praxis_. Cambridge Scholars Pub. [https://archive.org/details/literaturesindig0000unse/page/n11/mode/2up](https://archive.org/details/literaturesindig0000unse/page/n11/mode/2up) 
69. Aalbersberg, Ij. J., Heeman, F., Koers, H., & Zudilova-Seinstra, E. (2012). Elsevier’s **Article of the Future** enhancing the user experience and integrating data through applications. _Insights: The UKSG Journal_, _25_(1), 33–43. [https://doi.org/10.1629/2048-7754.25.1.33](https://doi.org/10.1629/2048-7754.25.1.33)

# December 9th 2024

## 4:00 AM 
I have been introduced to literature on the topic by TJ (Tinfy's friend). He has suggested [Matthew Kirschenbaum](https://english.umd.edu/directory/matthew-kirschenbaum) and [Katherine Hayles](https://english.ucla.edu/people-faculty/hayles-katherine-n/) both of whom's books I've got, I've perused and I get the sense that this issue of interactive reading runs deeper than I know. 

This has led me to take a step back and study this more, to try and understand the scope. It has made me think that maybe I dont understand the topic well enough and I should read all of this before I write and submit my things 

But the thing is, I'm working on 3 things simultaneously on this project. The Proposal, the final text, and the creation. 

The proposal is just bureaucracy so I need to push that out. Ive got a clear enough introduction, I've got the methodology and I need some literature review to back this up. 
For the literature review 
- I have a text on the problems between reading from screens and reading from paper - the performance problems. 
- I have texts on Hypertexts
- I have the stuff on PostPrint from Katherine Hayles
- I have stuff on New Media and digital affordances from Matthew Kirschenbaum 

I must note here that my approach has been to get it over with and I have been comparing this with my previous work on Ludosis. The problem with that is that I have had years of experience thinking about educational games and my degree was planned for that purpose. 

This project is new, I have not thought about this one enough so I need to read more, Find out what is happening. I need to build on top of all this. 

This is going to take time so get to it! 
I have also forgotten how to write, I am rusty in that department. 

---- 
There is also the fact that a lot of the work done in this domain - the domain of interactive reading - is based on books. This here is not about a book, rather research papers, academic publications. How much of this is transitive? How much of this applies to both and at what point does this stop relating? 
My focus is on academic papers, so how much of the argument for books can I transfer on to academic papers, how do I structure this relation between digital reading of books and digital reading ofacademic papers? 

I need to read up on this more because when I start thinking about the topic, I run into more questions than answers, and I cant make decisions without answers. 
The approach of reading and summarizing wont necessarily work here because this is a new domain for me. 
Although its a very good domain for me because I always wanted to work with digital reading, I really want to learn more about this. 
