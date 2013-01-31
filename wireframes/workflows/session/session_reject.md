# Session Reject

In order to unsuccessfully Sign In to an SMP member account, a user must provide a combination of invalid username and password. Upon submitting their invalid credentials, the server shall return an interstitial view with an error message explaining the problem and offering the solution of either resubmitting their credentials if they are indeed a registered member or offering the option to register. Password recovery links should be easily visible to the user.

Should the user submit valid credentials the server should return a Signed In view to the page where the user originally intended to Sign In. If the user continues to submit invalid credentials, the server shall continue to return the interstitial view.

Should the user opt to register, they should be engaged with the registration loop and redirected to the view where they originally intended to Sign In.

### Sign In Workflow

#### 1. User arrives at stylemepretty.com

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_01.png" width="901" height="505" /></a>

#### 2. User locates Sign In button and activates

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_02.png" width="901" height="505" /></a>

#### 3. Sign In form appears

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_03.png" width="901" height="505" /></a>

#### 4. User fills out form and submits

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_04.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_04.png" width="901" height="505" /></a>

#### 5. Server validates credentials and rejects

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_05.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_05.png" width="901" height="505" /></a>

#### 6. User fills out form and resubmits

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_06.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_06.png" width="901" height="505" /></a>

#### 7. Server redirects user to original view with user-bar changes, session created

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_07.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_reject_07.png" width="901" height="505" /></a>
