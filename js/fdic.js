(function($, parent){
	if (parent['fdic'] !== undefined) {
		return;
	}
	var fdic = parent.fdic = {};
	var contacts = {
		greg_hernandez : {
			name: "Greg Hernandez",
			office_phone: "(202) 898-6984",
			cell_phone: "(202) 340-4922",
			email: "ghernandez@fdic.gov"
		}
		
	};
	var settings = {
		pr_index_template: '<div class="index-container"> {#foreach $T as pr_article} <div class="index-article"> <span class="index-date">{$T.pr_article.date}</span> <span class="index-title"><a id="{$T.pr_article.id}" href="file:///Users/bradkahl/Desktop/Brad%20Kahl/Projects/GIT/jTemplateDemo/pr/2013/pr.html#{$T.pr_article.id}">{$T.pr_article.title}</a></span> </div> {#/for} </div>',
		pr_template: '<div class="container"> <div class="fdic-container"> <div class="fdic-header"> <div class="fdic-type">{$T.type}</div> <hr size="1" color="#003366" noshade="noshade" /> <div class="pr-title">{$T.title}</div> <div class="fdic-release"> <div>FOR IMMEDIATE RELEASE</div> <div class="pr-date">{$T.full_date}</div> </div> <div class="fdic-contact-info"> <div>Media Contact:</div> <div><span class="pr-name">{$T.who.name}</span> <span class="pr-office-phone">{$T.who.office_phone}</span></div> <div>Cell: <span class="pr-cell-phone">{$T.who.cell_phone}</span></div> <div>Email: <a href="mailto:{$T.who.email}"><span class="pr-email">{$T.who.email}</span></a></div> </div> </div> <div class="fdic-body"> {#foreach $T.body as paragraph} <p>{$T.paragraph.p}</p> {#/for} </div> <div class="fdic-footer"> <div class="hash-divider">###</div> <div>Congress created the Federal Deposit Insurance Corporation in 1933 to restore public confidence in the nation\'s banking system. The FDIC insures deposits at the nation\'s 7, 181 banks and savings associations, and it promotes the safety and soundness of these institutions by identifying, monitoring and addressing risks to which they are exposed. The FDIC receives no federal tax dollars — insured financial institutions fund its operations.</div> <div>FDIC press releases and other information are available on the Internet at <a href="http://www.fdic.com">www.fdic.gov</a>, by subscription electronically (go to <a href="http://www.fdic.gov/about/subscriptions/index.html">www.fdic.gov/about/subscriptions/index.html</a>) and may also be obtained through the FDIC\'s Public Information Center (877-275-3342 or 703-562-2200). <span class="pr-number">{$T.article_number}</span></div> <div class="last-updated-date">Last Updated {$T.last_updated_date}<span></span> <span><a href="mailto:communications@fdic.gov">communications@fdic.gov</a></span> </div> </div> </div> </div>'
	};
	var getSelectedRelease = function() {
		var location = document.location.href;
		return location.split("#")[1];
	};
	var init = function(){
		$ = jQuery;
		$.extend(fdic, {
			jQuery:$,
			settings:settings,
			contacts:contacts,
			getSelectedRelease:getSelectedRelease
		});
	}
	init();
})(undefined, window);