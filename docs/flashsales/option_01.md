# Infrastructure Options for a Flash Sales System

### Option 1

In the Option #1 approach, SMP would take those steps necessary to implement a system closely associated with the SMP brand yet offloading the majority of the responsibility to the product or service provider while enhancing and controlling more of the sales process on SMP's end.

SMP's technical team would be expected to provide more middleware to the process, most notably a method by which the provider would provision advertisement assets, provide a product page template and enable user conversion. A method by which to collect, analyze and display statistics related to the sales process would also need to be implemented. 

The following responsibilities represent those incurred by both Provider and SMP for a purchase in an Option #1 implementation.

#### Provider responsibilities

* Inventory verification
* Advertisement Asset Supply
	* Media
	* Text
	* URL's
* Advertising placement (provider-owned properties, network)
* Shopping cart
* Purchase order fulfillment (payment transaction/refund, shipping, tracking, notifications, returns)
* Customer service

##### Inventory verification
The provider would be responsible for providing proof that the items they are promoting for sale on the SMP do in fact exist in a quantity that would satisfy SMP supply requirements for the particular sale. Some sales will be of declining inventory stocks ("while supplies last"), some will be aggregated sales orders ("ships in 4 to 6 weeks"), others will be reservation-based sales (package deals) and yet some will be voucher-type sales where the provider can offer discounts on future sales. At a minimum, a contract should be in place that would guarantee product/service delivery as well as the honoring of reservations, coupons or other vouchers within a specified time period.

##### Advertisement Asset Supply
The provider would be responsible for supplying all advertisement materials to include media, product/service description and appropriate URL's used for the sole purpose of promoting the specified product/service. These materials would be industry-compliant as well as appropriate for the SMP network in content and purpose.

##### Advertising placement
Should the provider desire to further promote their sale through a third-party not affiliated with SMP, they would be responsible for the costs, content and product/service availability above and beyond the amount negotiated with SMP.

##### Shopping cart
The provider shall be responsible for the provision of a secure e-commerce solution that would allow for product/service purchasing. This solution should not only be able to perform financial transactions between the SMP network member and the provider but also allow for purchase confirmation, refund confirmation, delivery tracking and disseminate any notifications on behalf of the SMP network member.

##### Purchase order fulfillment
The provider would be responsible for the actual procurement, shipment and delivery of any physical purchases as well as the administration of any reservations, coupons or vouchers which require no physical possession on behalf of the purchaser.

##### Customer service
The provider would be responsible for guaranteeing a minimal customer servicing level to purchasers that could include assistance via email, online chat or telephone. The purpose of this customer service would be to assist purchasers with any difficulties that may arise due to shipping, payment or procurement errors.

#### SMP responsibilities

* Vendor sourcing, recruitment and qualification
* Inventory verification
* Advertisement content aggregation, review and approval
* Product page
* Flash Sales system promotion
* Advertisement placement (SMP-owned properties, network)
* Statistical collection, analysis and display
* Feedback collection and analysis

##### Vendor sourcing, recruitment and qualification
SMP would be responsible for the sourcing, recruitment and qualification of all providers invited to joined the provider program. This would ensure that no third-party vendors would be participating in the program without SMP approval and would facilitate the subsequent recruitment of additional providers into the partner program in addition to the vendor guide. I would imagine that this process would be somewhat similar to SMP's current vendor vetting process yet not as strict nor would it incur any up-front payments to SMP other than a potential surety bond.

##### Inventory verification
SMP would have to ensure that the inventory for sale actually exists, can be procured within reasonable amount of time or that guarantees at the time of purchase will be honored by the provider. For a minimal implementation, a contract would have to suffice.

##### Advertisement content aggregation, review and approval
SMP would have to provide a system similar to the submissions server where the provider would be able to upload all of their advertisement assets. These assets would be retained by SMP for future use.

SMP would have to review all materials pertaining to the advertisement (media, text, terms) and approval of those materials for deployment to the network.

##### Product page
SMP would be responsible for the provision of a web page detailing the product/service offered for sale to the SMP network which would include appropriate media, contextual descriptions, the terms of sale and a method by which the user can choose to make a purchase. The SMP-provisioned product page would be linked directly to the provider's shopping cart upon the activation of a call to purchase action by the user.

The product page would lend itself to multiple uses, including the collection of email addresses to be added to the newsletter initiative as well as affording SMP the opportunity to convert users to members. SMP would also be able to further expand the product page to include other content promoting the SMP network.

##### Flash Sales system promotion
SMP would be responsible for the actual promotion of the existence of the Flash Sales system to the network via blog postings, newsletter articles or social media dissemination prior to the launch of the actual system. This would educate the network on the workflow, expectations and purpose of the system. For a minimal implementation, a simple beta test would be ideal yet not required.

##### Advertisement placement
SMP would be responsible for the placement and dissemination of all advertisement throughout SMP-owned properties to include the SMP website, newsletter, social media accounts and any third party networks deemed necessary to assist in the promotion.

##### Statistical collection, analysis and display
SMP would benefit from the collection of user statistics at all points of entry to the product page and any subsequent actions the user may take on the page (time on page, favoring, sharing, purchasing). This data should be collected and stored in a database and displayed through a simple interface to SMP.

##### Feedback collection and analysis
Should SMP desire to collect feedback from the network regarding the Flash sales workflow, transaction, customer service and overall experience, they would need to engage an independent service or expand their current contact process to include the Flash Sales system. While SMP could easily design, build and maintain a feedback system, I would recommend utilizing a service that specializes in that, such as [Zendesk](http://www.zendesk.com/). 

#### Conclusion

An Option #1 implementation covers the basic needs to get a Flash Sales system deployed on the SMP network and would be optimal for large, well-known partners who have not only an independent, qualified sales network in place but also a level of experience that would be comfortable handling a user base the size of the SMP network.

This implementation would be less than ideal for smaller providers who do not have a dedicated sales and customer service team or system in place.

##### Drawbacks
The main drawbacks that I see from this approach would be the reliance on the provider to provision the shopping interface along the reporting of actual sales analytics and being ultimately responsible for customer service. While a feedback system would be in place from SMP's side, the SMP team would still be relying on the solicitation of feedback on the SMP network while having to interface any challenges with the provider.

The SMP technical team would have to build a provisioning server (Dropbox as an option) as well as provision a process for collection and display of data.

##### Benefits
The expansion of SMP's role in the Flash Sales system would bring about greater control in the product presentation. SMP would control any and all of the assets used to promote the product, the product page layout, design and functionality along with the collection of data from user interaction. While funneling users to the product page, SMP can also seize the opportunity to convert any unregistered user to the network as well as gather further data to assist in the understanding of the network's shopping behavior.

#### Proposed Option #1 Workflow - Success

##### Workflow Overview

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/option_01_workflow.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/option_01_workflow.png" width="512" height="384" /></a>

##### 1. User arrives at SMP access point and activate link to Flash Sale (SMP responsible)

###### 1a. SMP Facebook Page

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_01a.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_01a.png" width="512" height="384" /></a>

###### 1b. SMP Newsletter

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_01b.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_01b.png" width="434" height="327" /></a>

###### 1c. SMP unique landing page

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_03.png" width="512" height="384" /></a>

###### 1d. SMP Website (sidebar advert show. post and others not included in this example)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_01d.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_01d.png" width="512" height="384" /></a>

##### 2. Server returns Flash Sale product page (SMP responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_02.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_02.png" width="512" height="384" /></a>

##### 3. User selects product to purchase, activate purchase workflow (SMP responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_03.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_03.png" width="512" height="384" /></a>

##### 4. User provides required financial information (provider responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_04.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_04.png" width="512" height="384" /></a>

##### 5. User activates purchase (provider responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_05.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_05.png" width="512" height="384" /></a>

##### 6. User receives confirmation of purchase (provider responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_06.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_06.png" width="512" height="384" /></a>

##### 7. User receives confirmation or purchase availability or physical shipment (provider responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_07.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_07.png" width="512" height="384" /></a>

##### 8. User is able to track purchase (provider responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_08.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_08.png" width="512" height="384" /></a>

##### 9. User is able to contact customer service (provider responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_09.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_09.png" width="512" height="384" /></a>

##### 10. User is able to complete product return/refund if applicable (provider responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_10.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_10.png" width="512" height="384" /></a>

##### 11. User is able to provide feedback to SMP sales team (SMP responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_11.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/minimal_11.png" width="512" height="384" /></a>

##### 12. Provider uploads assets (SMP responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_12.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_12.png" width="512" height="384" /></a>

##### 13. SMP manager views product page data (SMP responsible)

<a href="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_13.png"><img src="https://github.com/stylemepretty/UX/raw/master/docs/flashsales/optional_13.png" width="512" height="384" /></a>