# Password Recovery

On occassion the user will forget their password and resort to a password recovery loop. The user will be able to initiate the wirkflow from any SMP view and reset their password via a unique link that they receive via their email account. A user should not receive their password in plain text either via email or browser view.

Should a user no longer have access to their original email account, a workflow should be in place to allow them to recover their account credential through an alternate method. The email address is currently immutable under Dashboard/Settings.

### Recovery Success Workflow

#### 1. User arrives at stylemepretty.com

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_01.png" width="901" height="505" /></a>

#### 2. User locates Sign In button and activates

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_02.png" width="901" height="505" /></a>

#### 3. Sign In form appears

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_03.png" width="901" height="505" /></a>

#### 4. User locates and activates Password Recovery link

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_04.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_04.png" width="901" height="505" /></a>

#### 5. Server returns interstitial view

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_05.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_05.png" width="901" height="505" /></a>

#### 6. User fills out form and submits

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_06.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_06.png" width="901" height="505" /></a>

#### 7. Server returns acknowledgement message

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_07.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_07.png" width="901" height="505" /></a>

#### 8. User receives email and activates Password Reset link

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_08.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_08.png" width="636" height="488" /></a>

#### 9. Server returns interstitial page with password reset form

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_09.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_09.png" width="901" height="505" /></a>

#### 10. User fills out form and submits

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_10.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_10.png" width="901" height="505" /></a>

#### 11. Server redirects user to main page. 

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_11.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_11.png" width="901" height="505" /></a>

### Recovery Reject Workflow

#### 1. User arrives at stylemepretty.com

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_01.png" width="901" height="505" /></a>

#### 2. User locates Sign In button and activates

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_02.png" width="901" height="505" /></a>

#### 3. Sign In form appears

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/session/session_success_03.png" width="901" height="505" /></a>

#### 4. User locates and activates Password Recovery link

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_04.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_04.png" width="901" height="505" /></a>

#### 5. Server returns interstitial view

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_05.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_success_05.png" width="901" height="505" /></a>

#### 6. User fills out form and submits

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_reject_06.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_reject_06.png" width="901" height="505" /></a>

#### 7. Server rejects invalid/non-existant email, returns interstitial view

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_reject_07.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/password_recovery/password_reject_07.png" width="901" height="505" /></a>

The user will continue in the recovery loop as long as they do not submit a valid/existing email address.