# Settings Tabs Workflow

Once a member has [successfully registered an account](https://github.com/stylemepretty/UX/blob/master/wireframes/workflows/membership/membership_success.md) with SMP they will be redirected to a Welcome view where they can choose to learn more about SMP. In this section they will be prompted to provide profile, newsletter subscription and privacy settings.


<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_10.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_10.png" width="901" height="505" /></a>

Up until this point, SMP should only possess the following information from the member:

* Email address
* Username
* Password 

### Settings Initializing

Should the member opt to learn more about SMP, the will be redirected to their Settings section which will be subdivided into a vanity bar, including avatar, and a tabs area. The Profile tab should be open by default in the section, displaying a form prepopulated with the member's email address and three empty fields (input:text) for their Name, Wedding Date and Wedding Location along with a Save button (input:submit).

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_initialize.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_initialize.png" width="600" height="504" /></a>

#### Avatar Workflow

The member avatar workflow should be as easy as possible. The member has to simply click on the current avatar to trigger a file modal window to open in the browser and select the image they want.

The avatar can be changed from any view in the settings section by clicking on it.

##### 1. Member clicks image, file modal appears, user selects desired image
<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_avatar_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_avatar_01.png" width="600" height="504" /></a>

##### 2. Member clicks "open", returns to settings section
<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_avatar_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_avatar_02.png" width="600" height="504" /></a>

#### Profile Workflow

Inside the profile tab the member can customize their full name, change their email address, add a wedding date and location.

##### 1. Member fills in unpopulated form fields, activates form submit

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_profile_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_profile_01.png" width="600" height="504" /></a>

##### 2. Member returns to Profile view

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_profile_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_profile_02.png" width="600" height="504" /></a>
	
##### 3. Member changes email address, activates form submit

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_profile_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_profile_03.png" width="600" height="504" /></a>

##### 4. Member returns to Profile view, displaying email change message

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_profile_04.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_profile_04.png" width="600" height="504" /></a>

##### 5. Member receives confirmation email at new email address and activates confirmation link

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_profile_05.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_profile_05.png" width="600" /></a>

###### 5A. Server returns new browser window with minimal confirmation view

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_profile_05a.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_profile_05a.png" width="600" /></a>

##### 6. Server returns member to profile with visible email confirmation

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_profile_06.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_profile_06.png" width="600" height="504" /></a>

#### Subscriptions Workflow

Inside the subscriptions tab the member can select to subscribe or unsubscribe to any number of SMP publications or content streams.

##### 1. Member subscribes to subscriptions and activates form submission

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_subscriptions_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_subscriptions_01.png" width="600" height="504" /></a>

##### 2. Member returns to Subscriptions view

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_subscriptions_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_subscriptions_02.png" width="600" height="504" /></a>

#### Privacy Workflow

Inside the subscriptions tab the member can select their type of desired profile: public or private. Default should be public.

##### 1. Member selects to change their profile type to private.

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_privacy_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_privacy_01.png" width="600" height="504" /></a>

##### 2. Member returns to Privacy view, lock displayed

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_privacy_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_privacy_02.png" width="600" height="504" /></a>

#### Account Workflow

Should the member choose to change their password, they will find a form with three fileds (current password, new password, new password confirm) and a save/submit button. The member must fill in all three fields correctly and submit, the server returning them to a blank account view.

##### 1. Member opens the Account tab, fills in password change fields and activates Save button
<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_account_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_account_01.png" width="600" height="504" /></a>

##### 2. Member returns to Account view
<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_account_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_account_02.png" width="600" height="504" /></a>

Should the member choose to delete their account, they will find a Delete My Account button inside their Account tab along with an explanation of what will happen should they delete their account. Once the member has activated the Delete My Account button, an modal overlay shall appear with another visual/numeric explanation of the consequences for deletion along with a form field (input:text) for which they will be required to enter their username and a Delete button. Once the member activates the delete button they will be redirected to the SMP homepage.

##### 3. Member opens the Account tab and activates Delete button
<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_account_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_account_03.png" width="600" height="504" /></a>

##### 4. Modal overlay appears
<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_account_04.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_account_04.png" width="600" height="504" /></a>

##### 5. Member enters username and activates Delete button
<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/settings/settings_tabs_account_05.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/settings/settings_tabs_account_05.png" width="600" height="504" /></a>

##### 6. Server redirects user to SMP homepage

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_01.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/workflows/membership/membership_success_01.png" width="901" height="505" /></a>
