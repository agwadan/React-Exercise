import React from 'react';
import './contentPage.css';

export const ContentPage = () => {
  return (
    <div class='body-content'>
      <h1 id='title'>My Page</h1>
			<div class="row">	
				<p class='para-text'> <span class="glyphicon glyphicon-film"></span>This page is entirely a test page.  I will just type what I feel like. this is just to really
				occupy some space in the page and try to make the web page have some content. <br/>
				I first worked on this page on the <i><b>14<sup>th</sup>, August 2017</b></i>.</p>
				<p>That is it about this page.</p>
				<p>For any more information, ask me personally.</p>

			<div>
				<h2 class='subtitle'>Text 1</h2>
				<p class='para-text'>This page is entirely a test page.  I will just type what I feel like. this is just to really
				occupy some space in the page and try to make the web page have some content. <br/>
				
				I first worked on this page on the <i><b>14<sup>th</sup>, August 2017</b></i>.</p>
				
				<p class='para-text'>That is it about this page.</p>
			
				<p class='para-text'>For any more information, ask me personally.</p>
			</div>
			
			<div>
				<h2 class='subtitle'><a class='link' href="#txt2" data-toggle = "collapse">Text 2</a></h2>
				<div id="txt2">
					<p class='para-text'>This page is entirely a test page.  I will just type what I feel like. this is just to really
					occupy some space in the page and try to make the web page have some content. I first worked on this page on the <i><b>14<sup>th</sup>, August 2017</b></i>.</p>
					That is it about this page.	For any more information, ask me personally.
				</div>
			</div>

			<div>
				<h2 class='subtitle'>Text 3</h2>
				<p class='para-text'>This page is entirely a test page.  I will just type what I feel like. this is just to really
				occupy some space in the page and try to make the web page have some content. <br/>
				
				I first worked on this page on the <i><b>14<sup>th</sup>, August 2017</b></i>.</p>
				
				<p class='para-text'>That is it about this page.</p>
			
				<p class='para-text'>For any more information, ask me personally.</p>
			</div>

			<div>
				<h2 class='subtitle'>Text 4</h2>
				<p class='para-text'>This page is entirely a test page.  I will just type what I feel like. this is just to really
				occupy some space in the page and try to make the web page have some content. <br/>
				
				I first worked on this page on the <i><b>14<sup>th</sup>, August 2017</b></i>.</p>
				
				<p class='para-text'>That is it about this page.</p>
			
				<p class='para-text'>For any more information, ask me personally.</p>
			</div>
			

			<div class="row">
				<div>
				<h2 class='subtitle' id="dob">DOB</h2><small>Date Of Birth</small>
				
				<p class='para-text'>I, the designer of this web page, am <i><b>Daniel Agwa</b></i>. I was born on the <i><b>5<sup>th</sup>, November 1996</b></i>.</p>
				
				If you ever wish to contact me, all you need is below;<br/><br/>
				</div>
			</div>

		</div>
		<br/><br/><hr/><br/><br/>
		<blockquote>
			<address>
				<a href="mailto:agwa.dan@outlook.com">agwa.dan@outlook.com</a>
				<br/><a class='link' href="mailto:agwa.dan@gmail.com">agwa.dan@gmail.com</a>
				<br/><a class='link' href="mailto:dagwa@cis.mak.co.ug">dagwa@cis.mak.ac.ug</a>
				<br/><a class='link' href="mailto:agwa.dan@goexpress.co.ug">agwa.dan@goexpress.co.ug</a>
				
				<p>001, Mukorwa Drive, Mulawa, Kira, Wakiso</p>
				
			</address>
		</blockquote>
		
		<p class='para-text'>Below,   I will list all the schools I have attended from the time i started schooling;
		
		<h2 class='subtitle' id="schools"><u>SCHOOLS ATTENDED</u></h2>
		
		<ol>
			<li class='list-item'>V & H Nursery School</li>
			<li class='list-item'>Salvation Army Nursery School</li>
			<li class='list-item'>Kitante Primary School</li>
			<li class='list-item'>Hormisdallen Nursery & Primary School Kamwokya</li>
			<li class='list-item'>Naalya Secondary School Namugongo</li>
			<li class='list-item'>College of Computing And Information Sciences, Makerere University Kampala</li>
		</ol>
		
		</p>
		
		<div class = "jumbotron">
			<p class='para-text'>We all know that we need <b>O<sub>2</sub></b> to live. Reminds me of a song by Avalon which tells God that he is our Oxygen. 
			Literally meaning we can't live without him.</p>

			<button type="submit" class="btn btn-danger" role="button">Test button</button>
		</div>

		<div class="well hidden-sm hidden-md">
			<p>This appears on all screen sizes</p>
			
		</div>

		<div class="well hidden-sm">
			<p>This appears in all screens appart from the small ones.</p>
		</div>

		<div class="well">
			<p>this aint hidden at all.</p>
		</div>
		
		<p class='para-text'>In this paragraph, I will just be testing the use of un-ordered lists.
		To do that, I will just write a random list of friends;
		
		<ul>
			<li class='list-item'>Lambert</li>
			<li class='list-item'>
				Sheila
				<ol>
					<li class='list-item'>Light Skinned</li>
					<li class='list-item'>Quite reserved</li>
					<li class='list-item'>Silent Burner</li>
				</ol>
			</li>
			<li class='list-item'>Crawford</li>
			<li class='list-item'>Stephen Araka Gift Mukoya
				<ol>
					<li class='list-item'>Talkative</li>
					<li class='list-item'>Has the coolest hairstyle in all of <b>MUK</b></li>
				</ol>
			</li>
			<li class='list-item'>Nsubuga</li>
		</ul>
		
		</p>
		
		<br/><br/><hr/><br/><br/>
		
		<p>Don't mind this line a lot. <br/> It is just to test the new line thing.</p>

		<div class='service-image'></div>

		
		<p class='para-text'><strong>NOTICE:</strong> I wrote this line just to test the use of <b>"Strong"</b>. And to mention that you should
		not change anything about this page. </p>
		
		<p class='para-text'><span class="glyphicon glyphicon-film"></span>This line is to test the use of <b>em</b> which actually stands for <em>emphasis</em>. </p>
		
		<blockquote>
			<p>I used this line to Test the use of <em><b>blockquote.</b></em> You will notice that this paragraph is actually indented. It doesn't start from 
			where all the other paragraphs and lines start from.</p>
		</blockquote>
		
		<p class='para-text'><q>Without wonder, how could life ever be wonderful ?</q> This particular line, is to test the use of quotation in the text. So, the
		words that appear in qoutes, is a line from a song by <b>Switchfoot </b><q>Begin Forever.</q> This is from their most recent album that i know, 
		<em><b>Where the Light shines through.</b></em></p>
		
		<p class='para-text'>So recently..... Actually Currently, We are working on an <b>Android</b> <abbr title = "Application"> app.</abbr>
		The name of this app is, <acronym title = "Touch A Heart">TAH</acronym>. <br/>
		Now, the purppose of this paragraph is to test the use of abbreviations and acronyms on a web-page.
		Try moving the cursor over the words <b>app</b> and <b>TAH</b> on the previous line.</p>
		
		<p class='para-text'><cite><q>Selling the News,</q></cite> is a song by the American band Switchfoot. 
		This song talks about how the media industry in the world has gone to the dogs. <br/>
		This paragraph was used to test the use of <b>"cite"</b> which actually stands for citation. 
		the text in italics are the ones within the cite tag.</p>
		
		<p class='para-text'><dfn><acronym title="Social Studies">SSt</acronym></dfn> Is the study of man and his surrounding.
		<br/>So this paragraph was written just to test the use of <b>dfn</b>, which actually means defination.
		Am actually supprised that Chrome put it in Italics. The term we're defining is Social Studies, which we have written as SSt.</p>
		
		<br/><br/><hr/><br/><br/>
		
		<p class='para-text'>Please don't mind the line separating this paragraph from the other.
		I just did that to make the work look a little more organised.</p>
		
		<p class='para-text'>I actually didn't <del>had</del> <ins>have</ins> what to write in this paragraph. But I just ant to demonstrate the use of <b>ins</b> and <b>del.</b>
		I also tested the <s>strike-through</s> in this paragraph.</p>
		
		
		
		<p class='para-text'><a class='link' href="https://www.youtube.com/watch?v=lFF2bkiHNVQ" target="black">Watch Ken Block drive with Captain Slow in the car.</a></p>
		
		<p class='para-text'>Well, the above text is a link. When clicked, it will lead one to a youtube video of Ken Block hosted on a Top Gear Show by James May. 
		Not in studio, but at an air field doing what he does best.<br/>
		So, this paragraph is to test the use of links. linking this page to another sight.
		<br/>I have further modified it to open the link in a new tab.</p>
		
		<p class='para-text'>In this paragraph, I will link to another web page known as; <a href="Trial2.html">Test Page 2</a></p>
		
		<p class='para-text'>In this paragraph, I won't do something so new. 
		I will just link to another page which is a <a class='link' href="Child/Trial_Child1.html">child page</a> to the directory <q><b>
		My html Exercising site</b></q></p>
		
		<p class='para-text'>Here, I will take you back to the <a class='link' href="#top">top</a> of this page. 
		If you wish to know the schools I attended, you can click <a class='link' href="#schools">here.</a></p>	
		<br/><br/>
	</div>
  )
}
