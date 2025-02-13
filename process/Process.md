
# February 12th 2025 

## 12:48 PM 
I think I've read enough -- I need to move to building. Im going to start again in a couple hours. What I need is to bring the text in and start playing with it. 

Prototype Zero is about meta-cues. Its about the direct interaction with the text on the screen. 


One thing I think that should be there in digital, interactive text is visual aids. And in this translation Im doing of the paper,  


# February 11th 2025 

## 2:54 PM 
I paused for a bit to read the theoretical stuff a bit more to develop my prototypes on. Another roadblock in there was the red journal stuff - it was all on paper and I had to digitize it which I hadn't done. When my notes arent digitized I cant put them together, search with them. Since I write in digital, my notes need to be in the digital medium because switching modalities has a significant overhead as well. This has been a good exercise in investigating my own weaknesses and things I need to maintain. Today I come back to coding this. 

Also that I was just so goddamn depleted I needed some rest. 

Stopping 2:59PM -- going back to reading and writing. 
# February 5th 2025 

## 8:06AM 
Continuing, setting up the boilerplate stuff -- done 

I can begin coding the first prototype.
For this, I need to 
1. read the MD file and bring it into its constituent parts. These will be:
	1. The headings 
	2. The sections 
	3. The paragraphs 
	4. The references & bibliography 
	5. The footnotes 
	6. The figures and figure references
2. then I need to put them on the screen. One section goes the whole way, one paragraph highlighted at a time. Switch sections horizontally. 
3. Once this is done, I'm interested in:
	1. Changing citation style, font size, font family (serif and sans serif), and line spacing up to the reader. Put citations and footnotes on hover 
	2. A word highlighter that the reader gets to shift with the arrow key and it helps the reader focus on the paper. arrow keys are used to move between the arrow  
	3. In this one, I also need to lay extra emphasis on metacues. In print form, we have the thickness of the page and we can move forward or backwards at a non-linear pace, we can skim in a different way than we do on screen... perhaps a way to see the whole of the paper and then hover the mouse on the page to see it in a more readable form... 
	4. Hover really is a brilliant interaction it affords "kinda". as in... unlike other transitions which are integral, black and white, hover invites me "come inside, have a look dearie" and if you like something, take the next step. 
4. prototype zero is about only reading. prototype one is going to be about writing alongside reading. The prototype two works with shifting things around, which also includes opening multiple pages at once and connecting things together in them; concept maps and the sort. As for four, Im wondering if its interesting to put some AI into this that *forces* the reader to read. This makes it the edgy part again. A co-reader that pushes you to write as you read. try to make the reader uncomfortable or challenge with questions?
5. I still havent gotten a good answer about: what do we want to do when we read on screen? How does a computer afford and how do we want to read. On a paper we can run a pencil along the text but on screen we cant do that. But really: What do we want to do when we read on a screen? HOW Do we want to read on a screen? 

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
6. Writing and Rewriting layers
	1. to engage with a text we need to be able to write our thoughts. As Eric hayot writes, we dont write what we have thought, we write to think. (case in point, this very journal).
7. Ability to restructure the paper
	1. People don't read a paper in the same order as is put together by a publisher, they read it usually first as abstract only, then introduction and conclusion, then maybe some survey of the methodology and look at the discussions 
	2. Point being: the ability to focus in on things that
8. concept map -- nodes 
9. deep references 
	1. The ability to reference the nodes or markers in *other* papers? how would this work 
10. manual markers
	1. Like bookmarks at different spots of the paper drawing a through-line through the paper.  
11. lowlighting 
	1. the reverse of highlighting? Would this be useful? How would this make the reader feel? 
12. Still curious to think of something that would be somewhat... *edgy* like *forcing* a user to be an active reader. 

Stopped: 11:44 AM 