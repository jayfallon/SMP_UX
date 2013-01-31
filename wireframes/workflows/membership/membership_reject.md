# Membership Rejection

In order to unsuccessfully activate a member account on SMP, a user would need to incorrectly perform a number of tasks, each resultingin an error that would prompt a response from SMP and an attempt to reinsert the user into the registration workflow.

### Workflow

For all cases we will assume that the user has arrived via browser at stylemepretty.com

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_01.png" width="901" height="505" /></a>

#### 1. User provides invalid email address, or no email address

A user could attempt to provide an invalid email address that form validation should pick up either upon field entry or submit (client and server).

##### 1A User locates Register button and activates

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_02.png" width="901" height="505" /></a>

##### 1B Registration request form appears

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_03.png" width="901" height="505" /></a>

##### 1C User provides invalid email address and submits

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_01c.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_01c.png" width="901" height="505" /></a>

##### 1D Server returns error message

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_01d.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_01d.png" width="901" height="505" /></a>

The server will continue to return an error message as long as the user attempts to provide an invalid email address. The user can cancel this loop at any time by activating the Cancel link.


#### 2. User provides email address already in use

A user could attempt to provide a valid email address already registered to an account. Form validation should pick this up and return an appropriate error message along with a prompt for the user to recover their password. 

Should a user be attempting to gain unauthorized control over the account of a member, they will be unable to do so unless they have control of the email address in question.

##### 2A User locates Register button and activates

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_02.png" width="901" height="505" /></a>

##### 2B Registration request form appears

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_03.png" width="901" height="505" /></a>

##### 2C User provides email address already in user and submits

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_02c.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_02c.png" width="901" height="505" /></a>

##### 2D Server returns error message and prompts user for possible recovery

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_02d.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_02d.png" width="901" height="505" /></a>

The server will continue to return an error message as long as the user attempts to provide an email address already in use. The user can cancel this loop at any time by activating the Cancel link.


#### 3. User attempts to activate account from expired email link

Should there be an expiration date set on email activation links and a user activates the link post expiration, they will be unable to activate their account. The user should be alerted to this error by the server and prompted to resubmit their email address to the registration workflow through an interstial view with the same form elements found on the user-bar registration workflow.

##### 3A User opens email and activates expired link 

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_07.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_07.png" width="636" height="488" /></a>

##### 3B User is redirected to interstitial view with error message and new registration form

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_03b.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_03b.png" width="901" height="505" /></a>

##### 3C User provides email address and submits form

For security purposes we should assume that the original activation link has been compromised and the email address must be re-entered in order to proceed with activation.

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_03c.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_03c.png" width="901" height="505" /></a>

##### 3D Server returns confirmation and user is prompted to check email inbox, continue browsing smp.com

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_03d.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_reject_03d.png" width="901" height="505" /></a>


