<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">

  @import "node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

  // variable declartions
  $green: #A2AD59;
  $brown: #8E936D;
  $blue-1: #598381;
  $blue-2: #177E89;
  $blue-3: #08605F;
  $white: #fbfbfb;
  $black: #202020;
  $red: #b71212;

  body {
    font-family: 'Cabin', sans-serif;
    color: #fff;
    overflow-x: hidden;
      overflow-y: scroll;
  }

  .hamburger-inner {
    background-color: $blue-1;
  }

  .hamburger-inner::after {
    background-color: $blue-1;
  }

  .hamburger-inner::before {
    background-color: $blue-1;
  }

  .main {
    display: flex;
      align-items: center !important;
    height: 100vh;
    background-color: $white;
    color: $blue-2;

    h1 {
      text-align: left;
      font-family: 'Cabin', sans-serif;
      text-transform: uppercase;
      font-size: 3em;
      font-weight: 900;
    }

    .main-message {
      font-size: 3em;
      font-family: 'Cabin', sans-serif;
      text-transform: capitalize;

        span {
          border-bottom: 6px solid $brown;
        }
    }

  }

  .about {
    display: flex;
      align-items: center !important;
    color: $blue-1;
    height: 100vh;
    background: rgba(142,147,109, .3);

      h2 {
        font-size: 3em;
        font-weight: 900;
        text-transform: uppercase;
      }

      a {
        color: $green;
      }

      p {
        font-size: 1.2em;
        font-weight: 100;
      }

      .top {
        padding-top: 0.5em;
        padding-bottom: 0.5em;

          span {
            border-bottom: 6px solid $brown;
          }
      }

      .bottom {
        // background-color: $blue-2;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
      }

      .profile {
        img {
          // border-radius: 100%;
          width: 50%;
        }
      }
  }

  .skills {
    display: flex;
      align-items: center !important;
    height: 100vh;
    color: $black;
    background-color: $white;

    h2 {
      text-align: center;
      text-transform: uppercase;
      font-size: 3em;
      font-weight: 900;
      color: $blue-2;
    }

    hr {
      color: $blue-2;
      border-top: 1px solid $blue-2;
    }

    .top {
      padding-top: 0.5em;
      padding-bottom: 0.5em;

        span {
          border-bottom: 6px solid $brown;
        }
    }

    .skill {
      color: #fff;
      text-align: center;
      font-size: 10em;
      transition: transform 0.5s ease 0s;
        &:hover {
          cursor: pointer;
        }
    }

    .html {
      color: $green;
    }
    .styles {
      color: $blue-3;
    }
    .js {
      color: $blue-1;
    }
    .php {
      color: $brown;
    }
  }

  .niche {
    display: flex;
      align-items: center !important;
    color: $blue-1;
    height: 100vh;
    background-color: $white;

      h2 {
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 900;
        color: $blue-2;
      }

      a {
        color: $blue-2;
        font-weight: bold;
      }

      p {
        font-size: 1.2em;
        font-weight: 100;
      }

      .top {
        padding-top: 0.5em;
        padding-bottom: 0.5em;

          span {
            border-bottom: 6px solid $brown;
          }
      }

      .niche-icon {
        font-size: 7em;
      }
  }

  .contact {
    display: flex;
      align-items: center !important;
    color: $blue-1;
    height: 100vh;
    background: rgba(142,147,109, .3);	

      h2 {
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 900;
        color: $blue-2;
      }

      p {
        font-size: 1.2em;
          font-weight: 100;
      }

      .top {
        span {
          border-bottom: 6px solid $brown;
        }
      }

      .submit-form {
        background-color: $blue-2;
        color: $white;
        padding-left: 1em;
        padding-right: 1em;

          &:hover {
            background-color: $blue-1;
          }
      }

      .form-success {
        display: none;
        text-align: center;
        font-size: 2em;
        padding-top: 2em;
      }

      .form-fail {
        display: none;
        text-align: center;
        font-size: 2em;
        padding-top: 2em;
        color: $red;
      }

      .parsley-errors-list {
        list-style: none;
        color: $red;
      }

      .parsley-required {
        text-align: right;
          padding-top: 0.5em;
      }
  }

  // Global Styles

  .push {
    padding-bottom: 10em;
  }

  .bg-light {
    background-color: $blue-3 !important;
  }

  .is-visible {
    display: block !important;
  }

  .fixed-to-bottom {
    position: absolute;
    bottom: 0;
    right: 10%;
    padding-bottom: 1.5em;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .padding-0{
      padding-right:0;
      padding-left:0;
  }

  .text-container {
    max-width: 50%;
  }

  .footer {

    background-color: $blue-3;
    padding-top: 1em;
    padding-bottom: 1em;

    ul, li {
      list-style: none;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    p {
      text-align: center;
      font-size: 0.7em;
    }

    .icons {

      font-size: 4em;
      color: #fff;
      padding: 0.5em;

    }

    .github {
        &:hover {
          color: #24292e;
          -webkit-transition: color 0.5s ease-out;
          -moz-transition: color 0.5s ease-out;
          -o-transition: color 0.5s ease-out;
          transition: color 0.5s ease-out;
        }
      }

      .instagram {
        &:hover {
          color: #8a3ab9;
          -webkit-transition: color 0.5s ease-out;
          -moz-transition: color 0.5s ease-out;
          -o-transition: color 0.5s ease-out;
          transition: color 0.5s ease-out;
        }
      }

      .soundcloud {
        &:hover {
          color: #f50;
          -webkit-transition: color 0.5s ease-out;
          -moz-transition: color 0.5s ease-out;
          -o-transition: color 0.5s ease-out;
          transition: color 0.5s ease-out;
        }
      }

    .social-links {
      display: flex;
      flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }

  // Media Queries
  /* Landscape phones and down */
  @media (max-width: 480px) {
    .main {

      h1 {
        font-size: 1.4em;
      }

      .main-message {
        font-size: 1.4em;
      }
    }

    .about {

      h2 {
        font-size: 1.4em;
      }

      height: 100%;
      padding-top: 2em;
      padding-bottom: 2em;
    }

    .skills {
      height: 100%;
      padding-top: 2em;
      padding-bottom: 2em;
    }

    .niche {

      h2 {
        font-size: 1.4em;
      }

      height: 100%;
      padding-top: 2em;
      padding-bottom: 2em;
    }

    .contact {

      h2 {
        font-size: 1.4em;
      }

      height: 100%;
      padding-top: 2em;
      padding-bottom: 2em;

      .form-success {
        font-size: 1em !important;
      }

      .form-fail {
        font-size: 1em !important;
      }
    }

    .footer {

      padding-top: 0.75em;
      padding-bottom: 0.75em;

      .icons {
        font-size: 3em;
      }
    }

    .push {
      padding-bottom: 3em;
    }
  }

  @media (max-width: 767px) and (orientation: landscape) {
    .main {
      height: 35em;
      font-size: 0.7em;
      padding-top: 0.75em;
      padding-bottom: 0.75em;
    }
    .about {
      height: 35em;
      font-size: 0.7em;
      padding-top: 0.75em;
      padding-bottom: 0.75em;
    }
    .niche {
      height: 45em;
      font-size: 0.7em;
      padding-top: 0.75em;
      padding-bottom: 0.75em;
    }
    .contact {
      height: 45em;
      font-size: 0.7em;
      padding-top: 0.75em;
      padding-bottom: 0.75em;
    }
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 767px) {
    
  }

  /* Portrait tablet to landscape and desktop */
  @media (min-width: 768px) and (max-width: 979px) {

  }

  /* Large desktop */
  @media (min-width: 1200px) {

  }
</style>
