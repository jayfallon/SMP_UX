# Header

The header should be visible on all pages of the Style Me Pretty website with the exception of interstitial pages or landing pages designed for marketing purposes.

The Header should consist of three separate horizontal sections:

* User Bar
* Situation Bar
* Global Navigation

### Header Sections

#### User Bar
The User Bar has one main function which is to encapsulate a series of linked buttons, all of which provide the user with an action and a visual display.

When a user state is Signed Out, the user can see three linked buttons ordered from first to last and labeled:

* Sign In
* Register
* Help
* Build a Board


##### Sign In Functionality

When a user activates the Sign In link, a small drop down overlay should appear directly beneath the Sign In button consisting a form with the following fields:

* Username or Email address (input:text)
* Password (input:text)
* Remember Me (checkbox)
* Submit (input:submit)

Should the user choose to fill out the form with their information and submit the form, the page view should refresh while the server validates the user information. Should the information be correct, the server should return a view where inside the User Bar there should be a linked buttons consisting of 

* Linked Member Button (member avatar (small), username and arrow)
* Help
* Build a Board

The Register button shall not appear when a member is signed in.

Once the linked Member button has appears the member can activate it by clicking on their avatar, username or the arrow displayed within the button.

By clicking on their avatar or username, the member will access their dashboard. By clicking on the arrow portion of the button, a drop down overlay will appear containing a link to Sign Out. Should the member choose to activate the Sign Out link, the member's session will be destroyed and the server will refresh the same page view the user was on at Sign Out but will display the the original linked buttons:

* Sign In
* Register
* Help
* Build a Board

_Would you want a "help" item here?_

Should the user-provided information be incorrect, the server should return the user to the same view, displaying the same drop down overlay with an error message atop the form reading "The credential you have provided are incorrect. Please try signing in again." and the username and password input fields highlighted in red with the Remember Me checkbox unchecked. 

##### Password Recovery Functionality

A password recovery link should be added to the Sign In form. When the user activates the PAssword Recovery link, they should be presented with a separate view devoid of anything butminimal SMP branding, prompting them to provide their email address in an input:text field and submitting it to the server. 

Upon submission, if the email address exists in the system, the user should be presented with a minimal view alerting them to via textual message that an email has been sent to their account to assist them in changing their password with a link redirecting them back to the page they had originally been browsing before attempting to Sign In. 

The email message should consist of a text message alerting the user that someone had requested to recover their password on SMP. An explanation should accompany this message alerting the user to do nothing if in fact it was not that user who attempted password recovery. 

A link should be provided in the email redirecting the user back to a minimal SMP view consisting of a form with three components:

* New Password (text:password)
* New Password Confirm (text:password)
* Submit (input:submit)

Should the New Password meet SMP's minimal security requirements and match New Password Confirm, the user should be presented with a minimal SMP view alerting them that their password has been changed and aredirected to either the SMP home page or their Dashboard page, the User Bar buttons will changed to a Signed In state. 

At this point they will probably have more than one browser tab/window open to the SMP site. The user could easily recover their browser experience where they left off by refreshing the page view they had been originally browsing prior to attempting to Sign In but I see a gap in the user experience where the user would not be returned to their original view in the same browser tab/window where they had reset their password.

##### Register Functionality

###### 1. User activates Link
When a user activates the Register link, a small drop down overlay will appear directly beneath the button consisting of a form with the following fields:

* Email address (input:text)
* Submit (input:submit)
* A text disclaimer noting that SMP will not user their email address for spam and that they can choose to unregister at any time. 
* Cancel (text link)

Should the user provide a valid email address and submitted the form, the form should disappear and a text note reading "You have successfully submitted the registration form. We will be sending to you an email with your account details." along with a text link labeled "Close". Should the user activate the Close link, the drop down overlay should disappear. Should the user choose not to activate the Close link, the drop down overlay will remain visible until the user either activates another link on the same page view, focuses on any form field on the page or refreshes their browser. The user can continue to browse the website anonymously up until they receive a registration email and activate their account by signing in. 

Should the user provide an invalid email address, the server should display an interstitial error message (visual or text) and then redisplay the submission form with the email address input field highlighted in red.

Should the user provide an email address that has already been registered, the server should display a message alerting the user to this fact and asking them if they would like to recover their password or use a different email address. A link to a Help section for recovering passwords or content added under a different email address no longer available/in use should be provided.

_incomplete sentence above._
_Jay: fixed_

Should the user choose not to provide an email address the dropdown overlay should disappear once the user activates the Close link, any other link on the page or focuses on a form field.

###### 2. User responds to email
When the user receives their activation email post submitting the registration from, they should be able to easily discern who the sender of the email is, the purpose of the email, why it was sent and what to do if they were not the same person who register for membership at SMP. The email should also include a unique linked url that when activated will take them to a view on the SMP website.

###### 3. User activates account
Upon being redirected to SMP by activating the link in their email, the user should be presented with a view on the SMP website that includes an account activation form consisting of:

* User email address
* Username (input:text)
* Password (input:password)
* Password Confirm (input:password)
* Agree to ToS (checkbox:unchecked)
* Submit (input:submit)

(all fields required)

_Accept terms of service here?_

but there should be no header, footer or other information on the page other than simple SMP branding, the less distracting the better. A note alerting the user that they can delete their account at any time would be most helpful.

Once the user has filled out the form fields correctly, and the information provided has been validated (username is not taken, password and password confirm match and suffice for passing SMP security requirements) and agreed to the ToS the user can submit the form for account activation. Once submitted, the user is now a member.

_I like this.  Not possible to have partially registered users._

Should any of the validations fail while the user is filling out the submission form, the failed field should be highlighted in red and an appropriate error message should appear. Until the user has corrected their error, the form will not submit.

###### 3. Member chooses to proceed

Upon submission of the account activation form, the server should present the Member with a view consisting of a welcoming message with their username and four separate paths to continue onto the SMP website:

1. A link to the SMP homepage where the Member can continue browsing. It would be better to have the Member returned to the page where they were last browsing as a user, but not sure how feasible that would be.

_In some cases we can bring the user back to the last place they were browsing.  Cookies are the simplest, but least reliable, way to do this. 

2. A link to the Board Builder page, possibly with a how-to video included as an interstitial or landing page.

_I'm all for a "how to" video or a series of them. I'd consider a "help" link or email address too._

3. A link to a guided tutorial of the Dashboard consisting of either text/images and/or video describing the different parts of the website and their functionality and a visual indicator of how much the Member has learned/seen. The Dashboard should display pre-populated content in their Boards, Favorites (including content they favorites prior to completing the account activation process), an invitation to share content with their social media accounts (authorizing posting to Facebook and Twitter), a visual indicator alerting them to settings not yet filled out (wedding date/city).

_I like the idea of pre-populated content! If we want a guided tour, I think we should design it as we finalize some of the sites look and feel.  Even this tour might require some UX analysis._

4. A link to the [LBB - How To Apply](http://www.stylemepretty.com/lbb-how-to-apply/) page for vendors.

_Will this be present to all members? Not just vendors (as we don't ask members if they are vendors.)_


###### 4. Member chooses to delete their account

At some point in the life of the member, they may choose to delete their account. In order to facilitate this and provide the member with an extra measure of confidence, it would be imperative to include a Delete Account button under the settings tab. This button and its intent should be made clear to the member as part of the registration/account activation process.

The process for deleting an account should be as simple as possible and better described under the Dashboard functionality docs. While the account deletion process should be as painless to the member as possible it can also be optionally used to collect information from the member as to why they are deleting their account (a simple list with checkboxes should suffice) as well as views as an opportunity for SMP to present a human face and acknowledge the member leaving.

##### Help

The Help button functionality should be active to all users and members of the SMP website. The Help button provides a direct link to the Help section of the website. The users and members can access Help at all times via the User Bar, Search and a link in the footer.

##### Build a Board Functionality

The Build a Board functionality should be active to all users and members of the SMP website regardless of their Sign In state and visible to all except on the Build a Board page as it would be redundant and confusing to the user/member. 

In its default state, the Build a Board (BAB) button should be represented with its text title. When a user or member favorites an image on the website, the BAB button should perform a visual highlight and a numeral should appear representing the number of those items favorites by the user or member. For the first favorites item, a drop down overlay should appear directly beneath the BAB button containing a form with the following components:

_A little confused but this sounds good._

* Board Name (input:text)
* Set of four default board configurations, selectable via click one at a time.
* Up to ten thumbnail images representing the favorited items
* A "more…" link that would take the user/member to the Build a Board page should there be more than ten images favorited.
* A text link specifying an implicit link to the Build a Board page (See all images on the Build a Board page)
* Submit button (input:submit)
* Clear Board button (input:reset)
* Close link

The Board Name could be any combination of letters and characters up to those allowed by SMP to represent a board title. 

The set of four default board configurations should be predetermined by SMP and should allow the user/member to determine the layout of the board without actually seeing the board represented at full scale. The user/member should only be able to choose one board configuration at a time.

The set of image thumbnails representing recently favorites items should be clickable only to remove from the list, activated through a highlighted mouseover or click for non-PC devices.

The "more…" link should be prefaced by the number of images beyond ten that the user/member has recently favorites. The link should take the user/member directly to the Build a Board page where their favorites images should be pre-assembled into the default board of their choosing.

The text link should do work exactly the same way as the more link but should be permanent as the "more…" would only appear should there be more than ten images. The text link should include language that would offer the user/member the option of building a board quickly through this interface or doing so through the Build a Board page.

The Submit button should validate that there are the minimal number of images necessary to build a board. Should there not be enough, an error message should alert the user/member in order that they rectify. Should the board submission validate, the user/member should be presented with a message to confirm validation and that the board is ready to be shared via a short URL provided, embed code provided, via social networks as applicable to the member's settings (dashboard/sharing) or viewable under the member's Inspiration Boards tab of their dashboard.

_I really like the social sharing calls to action here.  nice job!_

_how has the user created the board?  Has she dragged images onto a board?  Has the board been prepopulated?_  

The Clear button should clear the board name, return the board configuration to its default and clear all favorites images from the drop down.

By activating the Close link, the user/member would hide the BAB drop down at any time and could activate it again by clicking on the BAB button.

Once a board has been submitted, the numeric indicator adjacent to the BAB button should return to a zero state, and all of the fields in the BAB drop down should be cleared as well.

To access a board that has been submitted, a user/member can use the short URL for direct access, be able to locate it in the gallery under boards or as a member locate it under their dashboard/inspiration boards tab where they could also edit or delete the board. A user would not be able to perform any more tasks to a submitted board, however both users and members would be able to further edit and curate their boards should they go to the Build a Board page prior to submitting their board.

#### Situation Bar

The Situation Bar should be located directly underneath the User Bar with ample spacing for readability. The purpose of the Situation Bar is to display the SMP logo linked back the main page of the website, a title section where the user/member can make a visual reference as to which section of the website they are currently browsing and a search component. These components are listed and explained below:

* SMP Logo (H1) providing a link to the main page of the website, active on all pages
* Title (H2) section. Blank on the homepage but containing the section title for all other sections
* Search component consisting of an text input and a submit button. Activation of a search query would present the user/member with a results page.

##### SMP Logo Functionality

The SMP logo should remain consistent and not change over time save for promotional purposes or presenting a smaller image on pages other than the main page. The link should not change nor offer any other functionality that would be inconsistent with linking back to the main page directly.

##### Title Section Functionality

The title section should consist of text that represent the section that is currently displayed in the browser but should also link to the landing page of the particular section as users/members may have been directed to that page through a URL that bypasses the section landing page.

The title section can also be used as a promotional area on the main when not employed, allowing the SMP logo to be placed in a more prominent position.

##### Search Functionality

The search component should operate in a conventional fashion and accept input from the user/member and return search results in a custom results page, formatted to web conventions, providing descriptions and links to content relevant to the search query as well as making use of promotional opportunities.

#### Global Navigation

Global navigation is represented via a single-line, horizontal bar that is conventional on most websites. The global navigation would be divided into button representing the most important sections of the website and would indicate through selection which section the browser is currently displaying. There should be no drop down menus or other functionality present in the global navigation bar other than direct links to the sections.

_Did you mean to say "No drop downs"?  I am really tempted to have somewhat visual dropdowns._

The Global Navigation Bar should consist of the following links in this order:

* Blogs
* Wedding Inspiration
* Real Weddings
* DIY Projects
* Fashion Look Book
* Little Black Book

_I have a sneaking suspicion that these will change.  Does "Wedding Inspiration" go to the galleries or to a landing page?  "Blogs, Galleries, Weddings, Local (might not be worth it), Shop, Vendors" would be my vote for navigation._

All of the links should be uniform in size and color but one could make a case for the Little Black Book link to be a standout color from the rest.

##### Global Navigation Functionality

The links in the global navigation bar should have no functionality other than directing the user/member to the pertinent section landing page. For visual effect, the links could have simple color-changing mouse-overs.

_Very tempted to somehow do a visual drop down for blogs that shows recent posts in various streams._