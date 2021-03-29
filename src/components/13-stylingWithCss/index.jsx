import React from 'react';
import './index.css';

export default function IndexPage() {
  return (
    <div>
      <div id='box1'><h1><b>CSS</b> box 1</h1></div>
      <div id='box2'>CSS box 2 CSS box 2 CSS box 2 </div>
      <div class='paragraph-container'>
        <h2>A paragraph</h2>
        <p class='paragraph'>skajd fhadlc vkas j cnl ka jshvn aclaks jdclkasjd ckasj cnkas
        djvcn ksa mc nlkasd jn skajd fhadlc vkas j cnl ka jshvn aclaks
        jdclkasjd ckasj cnkas djvcn ksa mc nlkasd jn skajd fhadlc vkas j
      cnl ka jshvn aclaks jdclkasjd ckasj cnkas djvcn ksa mc nlkasdjn</p>
      </div>
      <h2>List</h2>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
      <a href='www.google.com' id='google-link'>Click Me</a>

      <form>
        <textarea placeholder='type here'>
        </textarea>
        <button>Submit</button>
      </form>

    </div>

  )
}
