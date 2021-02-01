# Evox-lab
EvoxLab copy

I saw awesome site http://evoxlab.com/ and decided to copy this site to practice some interesting functionality.
take a note that this site is NOT RESPONCIVE. i'd wish a had more time for this fun project:)

Main features of this site is css and javascript

This elements were done using CSS: 
-1st section: box shadow on elements,
-2nd section: awesome hover effect on list elements and button. also ticker was done using css.
-3d section: simple reveal elements on hover
-4d section: custom form style, when you start typing in thew input, the label will appear on the top of the input, also if you will type incorrect email 
the bottom border will be colored in red to show you that there are an error.
menu list: if you hover social links/language/or start project linls the letters will smoothly change colors on the left and right side of menu. 
Also if you hover dots, you will see animation with number of the section.
hidden menu list(click on the menu btn) conatins simmilar functionality: ticker, hover animation on links, and hover effect on close btn.

js: in java script was done menu btn, dots, scrolling, revealing sections on scroll
menu btn: using js each letter was wrapped with a span tag, than i used GSAP and animated it the way you can see on the web-seite.
dots: each dot was created by js, the amount of dots will automaticlly change if you add new sections. if you click on any dot you will be smoothly redirected 
to the necessary section. Also it will show and keep active state of the dot.
also i used IntersectionObserver to reveal sections. as soon as you will reach 15% of the next section, it will appear.
