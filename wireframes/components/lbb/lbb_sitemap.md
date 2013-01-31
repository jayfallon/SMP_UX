# Little Black Book Sitemap

## Page Levels

Page levels are organized according to their proximity to the index view (http://stylemepretty.com).

### Level  Two

There are two separate Level Two page types in the LBB and they are the section index for the Little Black Book [http://www.stylemepretty.com/little-black-book/](http://www.stylemepretty.com/little-black-book/) which shares space in the main navigation along with other sections headers and can be accessed at any point by the user from any view in the SMP web site, and all of the Vendor profile pages which while cannot be accessed from the global navigation, occupy their own namespace in the SMP web site.

### Level Three

The Level Three views inside the LBB page structure are:

* Little Black Book Blog [http://www.stylemepretty.com/little-black-book-blog/](http://www.stylemepretty.com/little-black-book-blog/)
* Category and Location filter results, example: [http://www.stylemepretty.com/little-black-book/beauty](http://www.stylemepretty.com/little-black-book/)
* Vendor galleries
* Vendor blog posts aggregated view.

### Level Four, Five

Level Four pages apply to the single image/video views inside of the Vendor galleries.

These level pages also apply to the Little Black Book as views in the breadcrumbs displayed when a user navigates LBB geographical sections. Examples for Four would be:
http://www.stylemepretty.com/little-black-book/rhode-island/newport/ 
and Five would be:
http://www.stylemepretty.com/little-black-book/rhode-island/newport/catering/

----
## Page Types

The page types employed in the Little Black Book are:

* Grid, five-column
* Grid, three-column
* Profile, Two-column
* Profile Gallery, Five-column
* Profile Single, One-column (overlay)

----
## Pages

All pages will consist of a content area that will change depending on the view and a header and footer which will remain unchanged.

#### Index

* URL: [http://www.stylemepretty.com/little-black-book/](http://www.stylemepretty.com/little-black-book/)
* Page Level: Level 2
* Page Type: Grid, Five-column

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_index.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_index.png" width="320"></a>

The default view for the LBB index page shows all categories of vendors currently available in the LBB. There are currently 42.

The view consists of four separate components:

**#1 H2 and filter mechanism.**

The H2 and filter mechanism serves to alert the user of the section they are currently browsing as well as providing a filtering mechanism by which the user can select a particular category and location they desire to browse either simultaneously or standalone.

When the user has departed the Index view, the H2 would serve as a link back to it.

**#2 Breadcrumb and results display.**

The breadcrumb and results display serves to alert the user to where they are within the structure of the LBB as well as to alert them to the quantity of results that their filter has generated. In the case of the Index page where both filters are set to All/All, there would be neither breadcrumbs nor filter results and we can take the opportunity to provide the user with a text link for the LBB Blog.

**#3 Promoted level.**

Within the main content section of the view, the first row of tiles can be used to provide promotional spots for the LBB team to sell to vendors on category/location basis, promote new vendors as part of their on-boarding process and/or reserve a spot for advertising.

**#4. Category display.**

The remainder of the tiles in the content section would serve to link the user to the 42 different categories currently available in the LBB. The can be sorted alphabetically, by popularity or by another method.

####  Category and Location filter results

* Example URL: [http://www.stylemepretty.com/little-black-book&favors](http://www.stylemepretty.com/little-black-book&favors)
* Page Level: Level 3
* Page Type: Grid, Five-column

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_category_select.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_category_select.png" width="320"></a>

The default view for the LBB category-filter-only page shows all vendors listed in the LBB for a particular category.

The changes in the view's four separate components consist of:

**#1 H2 and filter mechanism.**

The H2 has become a link back to the LBB index view and the filter now shows that the user has selected a vendor category.

**#2 Breadcrumb and results display.**

The LBB blog link has been removed (although it could still be displayed) and now the user can see how many vendors are in the specified category as well as have access to a listing display of those vendors via a link.

**#3 Promoted level.**

In this example, the promoted vendors have been replaced with sponsored vendors or advertisement.

**#4. Category display.**

The remaining tiles reflect all of the LBB vendors for a particular category and can be sorted according to multiple methods.

For the other two views that can be generated by the filter, location-only or category and location, the views are displayed below without much change save for the indicators in the filter and in the results.

Showing all vendors in a particular location:

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_location_select.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_location_select.png" width="320"></a>

Showing all vendors of a particular category in a specified location:

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_category_location_select.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_category_location_select.png" width="320"></a>

#### Category and Location listing display

* Example URL: [http://www.stylemepretty.com/little-black-book/favors-boston](http://www.stylemepretty.com/little-black-book/favors-boston)
* Page Level: Level 3
* Page Type: Grid, Three-column

Showing parent listing:

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_listing_parent.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_listing_parent.png" width="320"></a>

Upon accessing the Show Listing link available for every filter result, the user will be presented with a three-column grid display listing all of the vendors who meet their filter criteria. Each component in the grid would consist of a mix of visual and textual data and linking directly to each vendor. The main difference between the listing view and the results view is that the listing view has a static URL whereas the filter results are generated by the user via a form.

The changes in the view's four separate components consist of:

**#1 H2 and filter mechanism.**

Changes in the filter mechanism to display the user-provided filters.

**#2 Breadcrumb and results display.**

Actual breadcrumbs linked back to each section would be displayed. Gone would be the results indicator (but it could possible stay) and a link back to the filter results display would replace the listing display text link.

**#3 Promoted level.**

In this example, sponsored vendors and/or advertisement occupy the first listed results.

**#4. Listing display.**

All of the vendors meeting the filtering criteria would be displayed in a three column grid (blocked for subdivisions) sorted in the same manner as the filter results display.

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_listing_child.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_listing_child.png" width="320"></a>

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_listing_grandchild.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_listing_grandchild.png" width="320"></a>

#### Vendor Profiles

* Example URL: [http://bella-bridesmaid-los-gatos.stylemepretty.com/vendor-profile/](http://bella-bridesmaid-los-gatos.stylemepretty.com/vendor-profile/)
* Page Level: Level 2
* Page Type: Profile, Two-column

The default view for the Vendor profile shows the vendor's vanity component, all of their contact information and a grid in the content area depicting vendor-curated galleries and vendor-related blog posts.

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_profile_index.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_profile_index.png" width="320"></a>

The changes in the view's separate components consist of:

**#1 H2 and filter mechanism.**

No changes since last user-generated filter results.

**#2 Breadcrumb and results display.**

The description text changes to reflect the user navigating through a set of vendors from their filter results and the addition of a looping navigation component that will take the user to the next or previous vendor profile page as well as back to the filter results view.

**#3 Vendor Vanity.**

Vendors will be afforded the opportunity to post photos of themselves or their work in lieu of an avatar, provide basic and social networking information along with description text of their product and/or service. An H3 heading will wrap the vendor's name with a link back to the vendor profile.

**#4. Blog posts.**

Users can see and access vendor-related blog posts from the content area.

**#5. Vendor Galleries.**

Users can see and access vendor-curated galleries from the content area.

**#6. Vendor Information.**

All of the vendor's contact information should be listed on their profile page. This will reduce the need for a separate contact view.

#### Vendor Galleries

* Example URL: [http://bella-bridesmaid-los-gatos.stylemepretty.com/vendor-profile/gallery-xyz](http://bella-bridesmaid-los-gatos.stylemepretty.com/vendor-profile/gallery-xyz)
* Page Level: Level 3
* Page Type: Profile Gallery, Five-column

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_profile_gallery.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_profile_gallery.png" width="320"></a>

The default view for the vendor profile gallery consists of a five-column grid with the vendor-curated images for that gallery sorted with a waterfall layout.

The changes in the view's separate components consist of:

**#1 H2 and filter mechanism.**

No changes since last user-generated filter results.

**#2 Breadcrumb and results display.**

The linked vendor name (H2) occupies the left side of the component and the gallery name occupies the right, unlinked.

**#3 Content area.**

All of the images in the gallery are organized in a waterfall layout, clicking on one of them will activate the single view.

#### Vendor Galleries Single

* Example URL: [http://bella-bridesmaid-los-gatos.stylemepretty.com/vendor-profile/gallery-xyz/td4gP](http://bella-bridesmaid-los-gatos.stylemepretty.com/vendor-profile/gallery-xyz/td4gP)
* Page Level: Level 4
* Page Type: Profile Single, One-column

<a href="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_profile_gallery_single.png"><img src="https://github.com/stylemepretty/UX/raw/master/wireframes/components/lbb/lbb_profile_gallery_single.png" width="320"></a>

The vendor galleries single view is meant to be an overlay view from within the gallery. The image itself will have a unique url with layout wrapper but when the user has reached the image via the vendor gallery it should be displayed in an overlay.

The changes in the view's separate components consist of:

**#1 H2 and filter mechanism.**

No changes since last user-generated filter results but hidden under overlay.

**#2 Breadcrumb and results display.**

Gallery name has been replaced with a looping navigation component describing to the user which image they're viewing along with access to the next or previous image or the gallery itself. In addition, the user can close the overlay by clicking off it to return to the gallery.

**#3 Content area.**

The content area depicts the image or video and an area for text description or sponsored advertisement.