import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Syncopate:700|Teko:400"');
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    position: relative;
    color: #474247;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1;
    background: #f2f2f2;
}

ul,li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.selected {
  color: #ff00ff;
}

.fade-enter {
  opacity: 0.01;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 100ms ease-in;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0.01;
  transition: opacity 100ms ease-in;
}
.page-enter {
  opacity: 0.01;
}
.page-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
.page-exit {
  opacity: 1;
}
.page-exit-active {
  opacity: 0.01;
  transition: opacity 500ms ease-in;
}


/* unvisited link */
a:link {
  color: #474247;
}

/* visited link */
a:visited {
  color: #474247;
}

/* mouse over link */
a:hover {
  color: #474247;
}

/* selected link */
a:active {
  color: #474247;
}




`
