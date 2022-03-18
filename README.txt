CS193X Final Project
====================

Project Name: Garden of Eden
Your Name: Bi Tian Yuan
Your SUNetID: jackyuan

Overview
--------

The user is able to review past journals & pictures of his life with Garden of Eden. Garden of Eden randomly selects a piece of the user's past picture and past journal (along with the emotional analysis of the journal) and display it in the front end. Users can continue to add new pictures & journals as he progresses through life, thus building a Garden of his memories from the past. 

Running
-------
<TODO: In general, we should be able to `npm install` and `npm start` your project. If there is anything else we need to know about running your pojrect, please let us know here.>

1. Run npm install
2. Go to ./public/js, and run "mongosh mongodb_init.js"
3. Npm start and go to localhost://1930

Features
--------

I implemented a "Photo" class and a "Journal" class, with event handlers that monitor any new inputs from the user adds them to the backend, and randomly pulls a pair of photo and journal from the backend when requested. Furthermore, when the instance of the "Journal" is pulled from the backend, the text is sent to an external NLP API, that scans the text for its emotion, and returns an analysis of the text. 

The user can keep on refreshing the page for new memories, or submit new journal entries or pictures. The pictures link can either point to an external image link, or a locally hosted picture in the folder "./images" 


Collaboration and libraries
---------------------------

I have used the Math.Random() function. And I have also used the deep.AI external API to get an analysis of the text I sent. Furthermore, I also looked at previous CS 193X assignments while completing this final project. 


Anything else?
-------------
In the beginning, I attempted a more ambitious smart contract project. However, only after putting in 10+ hours in it did I realize that my Solidity skills were not strong enough to complete a full-stack smart-contract project. Quickly, I switched to a more conservative Journal type of app because I'm a very emotional person. Sorry about the switch in the end. 