import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {

    return (
      <div>
      <article>
        <button onclick="openPage('Home')">Home</button>
        <button onclick="secondPage('About-Me')">About Me</button>
        <button onclick="openPage('Work-History')">Work History</button>
        <button onclick="openPage('Contact-Me')">Contact Me</button>
        <div id="Home" class="tabcontent">

          <h1 style="font-size:50px" class="tien-text">Xin chào, I am Tien Nguyen Borland</h1>
          <p style="font-size:25px" class="under-tien-text">And I'm a Web Developer</p>
          <a href="https://www.linkedin.com/in/tien-borland-3b223265/" class="fa fa-linkedin" target="blank"></a>
          <a href="https://www.facebook.com/nguyen.tien.520" class="fa fa-facebook" target="blank"></a>
          <img src="https://lh3.googleusercontent.com/g_Pvd7qs0RTe0i-5JULdRsFl-T0g21bLZMT06iIWIWCtKU7MCkrYO6A0VvJw9Jm93kqBuBLYdhoBozXuIQPu6WuW6xDOeCM_dwi7FqAn6-uT9ZZww7flT84I26cq83Pn_ZIHxsSMwxDs59j-7v2nwr2zj3OZV992aXaurTsF5Qg95GDQuyPRNig-cixMHHI629j3Zj4vRDSvlBKXwxKL5Oz4HmkDCiU1MwfIyaUic3vYxhv1WLthdDkcNrAKT0c0JjpeDQ7jorgbgztsdZUqlROP9GoLPa1OKLM0RN_CV19MXog0WgZYfbNsu3-TfjEqziDBPBnU22DgW5qPDXfBxmUaEHknm-N34bUMvCPNzzWf4Ym0j-Uc6b-JLxIyrZZ-2_9lYcIQ7YvriaH9IZ-fVAhd8HwQUBbaWOjPConvAKZi42vf0c6S60kScNcNSjZ-epQjcNzdI5iJ_TepMlNt-7tB094NRrwvmj3wnm4oiz1c8kKcwab1mIFRwxet0TDaC6W_oBV95Kx2oyKzrZwYkJCGgp1j2eLJMqtpWxNhXlresqxQK4KSN4Xqa28Oc09eWXy_ASUYuFenKUvIyWpXIbrInSMVq92eYWLm2Q=w1440-h540-no"
            alt="profilepic" style="width:100%" />
  
      </div>

          <div id="About Me" class="tabcontent">
            <h3>About Me</h3>
            <p>
              <ul>Graduated from University of Minnesota in Healthcare Management</ul>
              <ul>Bilingual (Vietnamese/English)</ul>
              <ul>Hard working individual with desire to learn</ul>
              <ul>Accountable, committed to results with great interpersonal skills, interacted effectively with all levels of hospital
            personnel (strong customer service and communication skills).</ul>
              <ul>Working knowledge of Medical terminology, Clinical Best Practices, and Medicare/ M.edicaid with highly developed
            organizational skills and time management skills.</ul>
            </p>
          </div>

          <div id="Work-History" class="tabcontent">
            <h3>Work History</h3>
            <p></p>
          </div>

          <div id="Contact-Me" class="tabcontent">
            <h3>Contact Me</h3>
            <p></p>
          </div>
    </article>



        <footer></footer>
        </div>
        );
      }
    }
    
    export default App;
